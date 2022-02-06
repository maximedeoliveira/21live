import type { GetServerSideProps } from 'next';
import { getStreams, Stream } from '../lib/twitch';
import Streams from '../components/Streams';
import { styled } from '@stitches/react';
import { dehydrate, Query, QueryClient, useQuery } from 'react-query';

const STREAMS_KEY = 'streams';

const Home = () => {
    const { data: streams } = useQuery(STREAMS_KEY, getStreams);

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
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(STREAMS_KEY, getStreams);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

export default Home;
