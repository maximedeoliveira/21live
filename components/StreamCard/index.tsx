import Thumbnail from '../Thumbnail';
import { styled } from '@stitches/react';
import Link from 'next/link';

type StreamCardProps = {
    stream: Stream;
};

const StreamCard = (props: StreamCardProps) => {
    const { stream } = props;

    return (
        <StreamContainer>
            <Link href={`https://twitch.tv/${stream.user_name}`} passHref>
                <a target="_blank">
                    <Thumbnail
                        url={stream.thumbnail_url}
                        user_name={stream.user_name}
                        viewer_count={stream.viewer_count}
                    />
                </a>
            </Link>
            <StreamInfoContainer>
                <Title>{stream.title}</Title>
                <Streamer>{stream.user_name}</Streamer>
            </StreamInfoContainer>
        </StreamContainer>
    );
};

const StreamContainer = styled('div', {
    backgroundColor: '#1A202C',
    borderRadius: '8px',
});

const StreamInfoContainer = styled('div', {
    padding: '12px',
});

const Title = styled('p', {
    margin: '0 0 8px 0',
    fontSize: '13px',
});

const Streamer = styled('p', {
    margin: 0,
    fontSize: '12px',
    color: '#b1b1b1',
});

export default StreamCard;
