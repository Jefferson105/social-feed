import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '@/styles/colors';
import { Div } from '../layout/container';
import Label from '../typograph/label';

interface IStyles {
    checked: boolean;
}

const getStyles = ({ checked }: IStyles) => {
    if (!checked)
        return css`
            background-color: #fff;
            border: thin solid #ccc;
        `;

    return css`
        background-color: ${COLORS.main};
        &::after {
            position: absolute;
            content: '';
            width: 7px;
            height: 3px;
            top: 12px;
            left: 5px;
            transform: rotate(45deg);
            background-color: #fff;
        }
        &::before {
            position: absolute;
            content: '';
            width: 12px;
            height: 3px;
            top: 11px;
            left: 8px;
            transform: rotate(-45deg);
            background-color: #fff;
        }
    `;
};

const Box = styled.div<IStyles>`
    width: 24px;
    height: 24px;
    border-radius: 5px;
    position: relative;
    ${(props) => getStyles(props)}
`;

interface IProps {
    onChange: (checked: boolean) => void;
    checked?: boolean;
    label?: string;
}

const CheckBox = ({ onChange, checked = false, label }: IProps) => {
    const [isChecked, setCheck] = useState(checked);

    useEffect(() => {
        setCheck(checked);
    }, [checked]);

    return (
        <Div align="center" dir="row" gap="5px">
            <Box
                checked={isChecked}
                onClick={() => {
                    setCheck(!isChecked);
                    onChange(!isChecked);
                }}
            />
            {label && <Label>{label}</Label>}
        </Div>
    );
};

export default CheckBox;
