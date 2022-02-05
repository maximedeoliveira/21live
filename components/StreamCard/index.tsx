import { Stream } from '../../lib/twictch';

type StreamCardProps = {
    stream: Stream;
}

const StreamCard = (props: StreamCardProps) => {
    const { stream } = props;

    return (
        <div>
            <p>{stream.user_name}</p>
            <p>{stream.title}</p>
            <p>{stream.viewer_count}</p>
            <p>-------------------------</p>
        </div>
    )
}

export default StreamCard