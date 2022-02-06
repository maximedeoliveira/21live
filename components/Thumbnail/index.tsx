import { styled } from '@stitches/react';
import { formatThumbnailUrl } from '../../lib/twictch';
import Image from 'next/image';
import ViewerCount from '../ViewerCount';

type ThumbnailProps = {
    url: string;
    user_name: string;
    viewer_count: number;
}

const Thumbnail = (props: ThumbnailProps) => {
    return (
        <ThumbnailContainer>
            <Image
                src={formatThumbnailUrl(props.url)}
                alt={props.user_name}
                width={320}
                height={180}
                layout='responsive'
                quality={100}
            />
            <ViewerCount count={props.viewer_count} />
        </ThumbnailContainer>
    )
}

const ThumbnailContainer = styled('div', {
    position: 'relative'
})

export default Thumbnail