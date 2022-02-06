import { Stream } from '../../lib/twictch';
import Thumbnail from '../Thumbnail';
import { styled } from '@stitches/react';
import Link from 'next/link';

type StreamCardProps = {
    stream: Stream;
};

const StreamCard = (props: StreamCardProps) => {
    const { stream } = props;

    return (
        <div>
            <Link href={`https://twitch.tv/${stream.user_name}`} passHref>
                <a target="_blank">
                    <Thumbnail
                        url={stream.thumbnail_url}
                        user_name={stream.user_name}
                        viewer_count={stream.viewer_count}
                    />
                </a>
            </Link>
            <Title>{stream.title}</Title>
            <Streamer>{stream.user_name}</Streamer>
        </div>
    );
};

const Title = styled('p', {
    marginBottom: '5px',
});

const Streamer = styled('p', {
    marginTop: '5px',
    fontSize: '13px',
    color: '#b1b1b1',
});

export default StreamCard;
