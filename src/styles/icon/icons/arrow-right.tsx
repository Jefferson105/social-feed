import React from 'react';

import { IconBase } from '@/types/styles';

const ArrowRight = ({
    height = '19',
    width = '11',
    color = '#4E4E4E'
}: IconBase) => {
    return (
        <svg width={width} height={height} viewBox="0 0 11 19" fill="none">
            <path
                d="M10.001 18.0251L1.48833 9.51276L10.001 1.00037"
                stroke={color}
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default ArrowRight;
