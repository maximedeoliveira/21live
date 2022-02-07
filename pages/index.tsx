import type { GetServerSideProps } from 'next';
import { getAppToken, getStreams } from '../lib/twitch';
import Streams from '../components/Streams';
import { styled } from '@stitches/react';
import useStreams from '../hooks/useStreams';
import useToken from '../hooks/useToken';

type HomeProps = {
    token: TwitchAppToken;
    streams: Stream[];
};

const Home = (props: HomeProps) => {
    const { data: token } = useToken(props.token);
    const { data: streams } = useStreams(token ?? props.token, props.streams);

    return (
        <Container>
            <Streams streams={streams} />
        </Container>
    );
};

const Container = styled('div', {
    padding: '1.5rem .5rem',
});

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = await getAppToken();
    const streams = await getStreams(token);

    return {
        props: {
            token,
            streams,
        },
    };
};

export default Home;
