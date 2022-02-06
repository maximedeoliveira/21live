import { styled } from '@stitches/react';

type ViewerCountProps = {
    count: number;
};

const ViewerCount = ({ count }: ViewerCountProps) => {
    return (
        <ViewerCountContainer>
            <ViewerIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </ViewerIcon>
            <span>{count}</span>
        </ViewerCountContainer>
    );
};

const ViewerCountContainer = styled('div', {
    position: 'absolute',
    bottom: '10px',
    left: '8px',
    padding: '4px 6px',
    borderRadius: '6px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
});

const ViewerIcon = styled('svg', {
    stroke: '#fff',
    strokeWidth: '1.5',
    width: '14px',
    height: '14px',
    fill: '#fff',
    marginRight: '5px',
});

export default ViewerCount;
