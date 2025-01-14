import React from 'react';

import { IconBase } from '@/types/styles';

const Down = ({ height = '20', width = '20', color = '#4E4E4E' }: IconBase) => {
    return (
        <svg width={width} height={height} viewBox="0 0 512 512" fill="none">
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none"
            >
                <path
                    d="M895 3506 c-67 -29 -105 -105 -90 -183 6 -34 100 -131 843 -875 744
-743 841 -837 875 -843 94 -18 39 -66 949 843 909 909 861 855 843 949 -9 49
-69 109 -118 118 -94 18 -46 59 -875 -768 l-762 -762 -758 757 c-424 424 -769
762 -785 768 -38 14 -85 12 -122 -4z"
                />
            </g>
        </svg>
    );
};

export default Down;
