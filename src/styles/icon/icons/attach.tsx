import React from 'react';

import { IconBase } from '@/types/styles';

const Attach = ({
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
                    d="M2011 5059 c-454 -56 -822 -419 -881 -870 -8 -59 -10 -507 -8 -1484
4 -1389 4 -1401 25 -1493 104 -450 365 -796 752 -996 419 -216 904 -216 1325
2 271 139 487 361 625 640 55 109 92 218 124 354 21 92 21 110 24 1270 4 1162
3 1178 -16 1217 -56 108 -215 114 -276 11 -20 -35 -20 -51 -25 -1210 l-5
-1175 -27 -96 c-61 -222 -142 -365 -297 -520 -228 -228 -475 -332 -791 -332
-315 0 -563 104 -791 332 -154 155 -236 298 -298 520 l-26 96 0 1430 0 1430
28 80 c47 133 115 233 221 323 62 53 188 116 276 139 85 22 244 22 330 0 242
-62 442 -262 508 -507 16 -60 17 -157 17 -1315 0 -1038 -2 -1257 -14 -1289
-17 -49 -83 -121 -136 -149 -57 -30 -174 -30 -230 0 -52 28 -109 88 -132 138
-17 37 -18 106 -23 1062 -5 1010 -5 1022 -26 1050 -32 44 -105 76 -155 68 -54
-9 -115 -64 -129 -116 -7 -26 -10 -372 -8 -1051 3 -951 4 -1016 22 -1068 65
-197 204 -341 388 -401 103 -34 253 -34 356 0 184 60 323 203 388 401 18 52
19 123 22 1280 2 787 -1 1259 -7 1320 -20 181 -91 367 -193 503 -70 94 -203
215 -296 270 -190 112 -428 163 -641 136z"
                />
            </g>
        </svg>
    );
};

export default Attach;
