import { styled } from '@stitches/react';
import { Stream } from '../../lib/twictch';
import StreamCard from '../StreamCard';

type StreamsProps = {
    streams: Stream[];
}

const Streams = (props: StreamsProps) => {
    return (
        <Grid>
            {props.streams.map(stream => <StreamCard key={stream.id} stream={stream} />)}
        </Grid>
    )
}

const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1rem',
    margin: '0 auto',
    maxWidth: '100%',
    width: '100%',
    padding: '0 1rem',
})

export default Streams