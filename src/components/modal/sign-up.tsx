'use client';

import { useReducer, useRef, useState } from 'react';
import { ZodError } from 'zod';

import { dispatch, useSelector } from '@/context';
import { Button, Div, Err, Icon, Input, SubTitle, Text } from '@/styles';

import { genericReducer } from '@/context/reducer';
import {
    EmailSchema,
    NameSchema,
    PasswordSchema,
    UserCreateSchema
} from '@/schemas/user';
import { createUser } from '@/server/user';
import { userDispatch } from '@/context/dispatches';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {
    const { user } = useSelector((state) => state);
    const validations = useRef([false, false, false, false]);

    const [form, dispatchForm] = useReducer(genericReducer, initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isFormValid = validations.current.every((v) => !!v);

    const onSubmit = async () => {
        if (!isFormValid) return;

        setError(null);

        try {
            setLoading(true);

            const info = UserCreateSchema.parse(form);

            const user = await createUser(info);

            userDispatch(user);
        } catch (error) {
            if (error instanceof ZodError) setError(error?.issues[0].message);
            else setError(String(error));
        } finally {
            setLoading(false);
        }
    };

    if (user) return <Text>Cadastrado com sucesso!</Text>;

    return (
        <Div width="100%" gap="10px">
            <SubTitle margin="0 auto">Cadastre-se!</SubTitle>

            <Input
                onValue={(name) => dispatchForm({ name })}
                onValidation={(v) => (validations.current[0] = v)}
                schema={NameSchema}
                label="Nome"
                minLength={2}
                maxLength={100}
                placeholder="Nome"
                required
            />
            <Input
                onValue={(email) => dispatchForm({ email })}
                onValidation={(v) => (validations.current[1] = v)}
                schema={EmailSchema}
                type="email"
                label="Email"
                placeholder="Email"
                required
            />
            <Input
                onValue={(password) => dispatchForm({ password })}
                onValidation={(v) => (validations.current[2] = v)}
                schema={PasswordSchema}
                label="Senha"
                placeholder="Senha"
                type="password"
                required
            />
            <Input
                onValue={(confirmPassword) => dispatchForm({ confirmPassword })}
                onValidation={(v) => (validations.current[3] = v)}
                schema={PasswordSchema}
                label="Repita a senha"
                type="password"
                placeholder="Senha"
                required
            />
            {!!error && <Err>*{error}</Err>}

            {loading ? (
                <Icon name="loading" />
            ) : (
                <Button
                    bg={isFormValid ? undefined : '#ccc'}
                    cursor={isFormValid ? 'pointer' : 'not-allowed'}
                    onClick={onSubmit}
                >
                    Entrar
                </Button>
            )}
            <Text margin="10px auto 0 auto" align="center">
                Já tem uma conta?{' '}
                <Text
                    onClick={() => dispatch({ layout: 'sign-in' })}
                    display="inline"
                    cursor="pointer"
                    decoration="underline"
                >
                    Entre!
                </Text>
            </Text>
        </Div>
    );
};

export default SignUp;
