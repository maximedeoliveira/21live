import axios from 'axios';

export const getAppToken = async (): Promise<TwitchAppToken> => {
    return await axios
        .post('https://id.twitch.tv/oauth2/token', {
            client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials',
        })
        .then((res) => res.data);
};

export const getStreams = async (token: TwitchAppToken): Promise<any> => {
    let data: Stream[] = [];
    let hasNextPage = true;
    let nextCursor = '';

    const params: StreamsParams = {
        game_id: process.env.NEXT_PUBLIC_GAME_ID as string,
        language: 'fr',
        first: 100,
    };

    while (hasNextPage) {
        if (hasNextPage && nextCursor !== '') {
            params.after = nextCursor;
        }

        await axios
            .get<{ data: Stream[]; pagination?: { cursor?: string } }>(
                `${process.env.NEXT_PUBLIC_TWITCH_API_URI}/streams`,
                {
                    headers: {
                        'Client-ID': process.env
                            .NEXT_PUBLIC_TWITCH_CLIENT_ID as string,
                        Authorization: `Bearer ${token.access_token}`,
                    },
                    params,
                }
            )
            .then((res) => {
                const filteredData = res.data.data.filter(
                    (stream) =>
                        stream.title.toLowerCase().includes('21 jump click') ||
                        stream.title.toLowerCase().includes('21jumpclick')
                );

                data = [...data, ...filteredData];

                if (res.data.pagination?.cursor) {
                    nextCursor = res.data.pagination.cursor;
                } else {
                    hasNextPage = false;
                }
            });
    }

    return data;
};

export const formatThumbnailUrl = (
    thumbnailUrl: string,
    width?: string,
    height?: string
) => {
    return thumbnailUrl
        .replace('{width}', width ?? '320')
        .replace('{height}', height ?? '180');
};
