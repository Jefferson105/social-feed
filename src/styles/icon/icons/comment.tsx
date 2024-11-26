import React from 'react';

import { IconBase } from '@/types/styles';

const Comment = ({
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
                    d="M1305 4510 c-435 -33 -831 -263 -1070 -625 -97 -147 -155 -282 -203
-475 l-26 -105 -3 -1347 c-2 -742 -1 -1348 3 -1348 3 0 326 149 717 330 l710
330 1158 0 c731 0 1195 4 1260 10 484 49 902 338 1122 775 47 95 91 222 119
346 22 99 23 122 23 494 0 433 -6 482 -76 682 -146 413 -483 739 -899 871
-217 69 -154 66 -1510 68 -674 1 -1270 -2 -1325 -6z m2597 -325 c271 -48 521
-202 689 -424 107 -143 188 -349 208 -534 14 -124 14 -540 0 -664 -50 -447
-360 -811 -801 -940 l-93 -28 -1265 -3 -1264 -3 -527 -244 c-290 -135 -529
-245 -533 -245 -11 0 -7 2024 5 2127 51 457 381 833 827 943 42 10 91 21 107
23 17 2 602 5 1300 5 1040 1 1284 -1 1347 -13z"
                />
                <path
                    d="M1407 3116 c-65 -24 -128 -81 -165 -151 -23 -42 -27 -62 -26 -130 0
-66 5 -89 27 -131 100 -195 368 -221 499 -49 95 126 79 301 -38 404 -25 22
-66 47 -91 55 -56 19 -154 20 -206 2z"
                />
                <path
                    d="M2453 3113 c-61 -21 -136 -92 -164 -155 -17 -39 -23 -72 -24 -123 0
-117 57 -209 168 -267 34 -19 58 -23 127 -23 73 0 92 4 136 27 142 75 200 248
131 391 -34 67 -101 130 -164 151 -57 20 -154 19 -210 -1z"
                />
                <path
                    d="M3503 3114 c-60 -22 -127 -86 -160 -152 -54 -111 -27 -263 63 -341
68 -60 111 -76 204 -76 73 0 92 4 135 27 107 56 160 146 159 268 0 61 -5 85
-27 126 -32 64 -103 127 -164 148 -57 20 -154 19 -210 0z"
                />
            </g>
        </svg>
    );
};

export default Comment;