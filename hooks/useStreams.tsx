import { useQuery } from 'react-query';
import { getStreams } from '../lib/twitch';

export const STREAMS_KEY = 'streams';

const useStreams = (token: TwitchAppToken, initialData: Stream[]) => {
    return useQuery(STREAMS_KEY, () => getStreams(token), { initialData });
};

export default useStreams;
