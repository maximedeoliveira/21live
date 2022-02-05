import axios from 'axios';

type TwitchAppToken = {
    access_token: string;
    expires_in: number;
    token_type: string;
}

export type Stream = {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: string;
    title: string;
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
    tag_ids: string[];
    is_mature: boolean
}

type StreamsParams = {
    game_id: string;
    language: string;
    first: number;
    after?: string;
    before?: string;
}

export const getAppToken = async () : Promise<TwitchAppToken>  => {
    return await axios.post('https://id.twitch.tv/oauth2/token', {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        grant_type: 'client_credentials',
    }).then(res => res.data)
};

export const getStreams = async (): Promise<any> => {
    const token = await getAppToken()

    let data: Stream[] = []
    let hasNextPage = true;
    let nextCursor = ''

    const params: StreamsParams = {
        game_id: process.env.GAME_ID as string,
        language: 'fr',
        first: 100,
    }

    while (hasNextPage) {
        if (hasNextPage && nextCursor !== '') {
            params.after = nextCursor
        }

        await axios.get<{data: Stream[], pagination?: { cursor?: string }}>(`${process.env.TWITCH_API_URI}/streams`, {
            headers: {
                'Client-ID': process.env.TWITCH_CLIENT_ID as string,
                'Authorization': `Bearer ${token.access_token}`,
            },
            params
        }).then(res => {
            const filteredData = res.data.data.filter(stream => stream.title.toLowerCase().includes('21 jump click') || stream.title.toLowerCase().includes('21jumpclick'))

            data = [...data, ...filteredData]

            if (res.data.pagination?.cursor) {
                nextCursor = res.data.pagination.cursor
            } else {
                hasNextPage = false
            }
        })
    }

    return data
}