import React from 'react';

import { IconBase } from '@/types/styles';

const ArrowLeft = ({
    height = '19',
    width = '12',
    color = '#4E4E4E'
}: IconBase) => {
    return (
        <svg width={width} height={height} viewBox="0 0 12 19" fill="none">
            <path
                d="M1.48718 18.0247L9.99963 9.51228L1.48718 0.999899"
                stroke={color}
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default ArrowLeft;
