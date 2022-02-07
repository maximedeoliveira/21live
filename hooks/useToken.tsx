import { useQuery } from 'react-query';
import { getAppToken } from '../lib/twitch';

export const TWITCH_TOKEN = 'token';

const useToken = (initialData: TwitchAppToken) => {
    return useQuery(TWITCH_TOKEN, getAppToken, {
        initialData,
        staleTime: Infinity,
    });
};

export default useToken;
