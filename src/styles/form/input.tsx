import styled from 'styled-components';
import React, { useState } from 'react';
import { ZodError, ZodString } from 'zod';

import { Div } from '../layout';
import { Err, Label } from '../typograph';

const Inp = styled.input`
    border: thin solid #ccc;
    width: 100%;
    height: 30px;
    font-weight: lighter;
    border-radius: 5px;
    padding: 0 3px;
    &:invalid {
        border: thin solid red;
        outline-color: red;
    }
`;

const Textarea = styled.textarea`
    border: thin solid #ccc;
    width: 100%;
    height: 60px;
    font-weight: lighter;
    border-radius: 5px;
    padding: 0 3px;
    &:invalid {
        border: thin solid red;
        outline-color: red;
    }
`;

interface IProps {
    label?: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    margin?: string;
    textarea?: boolean;
    schema?: ZodString;
    onValue?: (v: string) => void;
    onValidation?: (v: boolean) => void;
}

const Input = ({
    label,
    placeholder,
    onValue,
    onValidation,
    margin = '0',
    type = 'text',
    schema,
    textarea,
    ...rest
}: IProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const changeEvent = ({
        target
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        try {
            const val = target.value;

            setValue(val);
            if (onValue) onValue(val);

            setError(null);

            if (schema) schema.parse(val);

            if (onValidation) onValidation(true);
        } catch (err) {
            if (err instanceof ZodError) setError(err?.issues[0].message);
            if (onValidation) onValidation(false);
        }
    };

    return (
        <Div width="100%" margin={margin}>
            {!!label && <Label>{label}</Label>}
            {textarea ? (
                <Textarea
                    onChange={changeEvent}
                    value={value}
                    placeholder={placeholder}
                    {...rest}
                />
            ) : (
                <Inp
                    onChange={changeEvent}
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    {...rest}
                />
            )}
            {!!error && <Err>*{error}</Err>}
        </Div>
    );
};

export default Input;
