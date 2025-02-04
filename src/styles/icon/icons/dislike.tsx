import React from 'react';

import { IconBase } from '@/types/styles';

const Dislike = ({
    height = '20',
    width = '20',
    color = '#4E4E4E'
}: IconBase) => {
    return (
        <svg width={width} height={height} viewBox="0 0 512 512" fill="none">
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none"
            >
                <path
                    d="M2555 4993 c-157 -9 -349 -43 -500 -89 -44 -13 -187 -63 -317 -111
l-238 -88 0 -1314 0 -1313 158 -172 c350 -378 734 -816 825 -938 l27 -37 0
-304 c0 -356 4 -381 74 -445 57 -52 107 -66 210 -57 317 27 594 216 731 498
66 138 85 227 92 448 l6 185 -82 282 c-44 154 -81 283 -81 286 0 3 267 6 593
6 652 0 672 2 788 61 126 63 239 210 268 347 35 166 -19 339 -142 461 l-55 54
33 61 c109 200 77 432 -81 595 l-62 64 24 37 c64 97 90 260 60 378 -25 97 -65
171 -131 238 l-60 62 33 61 c109 197 74 438 -87 598 -69 69 -175 126 -265 142
-53 10 -1669 13 -1821 4z"
                />
                <path d="M0 3315 l0 -1585 600 0 600 0 0 1585 0 1585 -600 0 -600 0 0 -1585z" />
            </g>
        </svg>
    );
};

export default Dislike;
