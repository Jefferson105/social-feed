import React from 'react';

import { IconBase } from '@/types/styles';

const Heart = ({
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
                    d="M1262 4830 c-319 -40 -586 -171 -812 -399 -203 -204 -325 -420 -395
-701 -124 -487 -34 -967 264 -1418 191 -289 438 -554 891 -958 288 -257 1167
-1007 1210 -1032 40 -24 55 -27 140 -27 85 0 100 3 140 27 43 25 924 776 1210
1032 455 406 700 670 891 958 298 451 388 931 264 1418 -70 281 -192 497 -395
701 -202 203 -418 320 -701 380 -142 30 -404 33 -528 5 -346 -75 -611 -248
-853 -556 l-28 -35 -27 35 c-239 302 -500 475 -833 551 -99 23 -327 33 -438
19z m334 -305 c284 -50 529 -214 723 -485 33 -47 74 -103 90 -126 74 -104 228
-104 302 0 16 23 57 79 90 126 265 370 634 544 1036 489 446 -61 794 -373 927
-832 105 -363 59 -744 -132 -1087 -160 -287 -427 -588 -892 -1005 -225 -201
-1171 -1015 -1180 -1015 -10 0 -952 811 -1180 1015 -715 641 -997 1041 -1065
1510 -44 303 19 629 172 886 230 387 678 599 1109 524z"
                />
            </g>
        </svg>
    );
};

export default Heart;