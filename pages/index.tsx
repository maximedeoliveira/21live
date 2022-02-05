import type { GetServerSideProps, NextPage } from 'next';
import { getStreams, Stream } from '../lib/twictch';
import Streams from '../components/Streams';

type HomeProps = {
    streams: Stream[]
}

const Home = (props: HomeProps) => {
    return (
        <Streams streams={props.streams} />
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const streams = await getStreams()

    return {
        props: {
            streams
        }
    }
}

export default Home;
