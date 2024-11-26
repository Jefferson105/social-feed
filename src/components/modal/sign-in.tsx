import { useReducer, useRef, useState } from 'react';
import { ZodError } from 'zod';

import { dispatch, useSelector } from '@/context';
import { Button, Div, Err, Icon, Input, SubTitle, Text } from '@/styles';
import { genericReducer } from '@/context/reducer';
import { EmailSchema, PasswordSchema, UserSchema } from '@/schemas/user';
import { loginUser } from '@/server/auth';
import { userDispatch } from '@/context/dispatches';

const initialState = {
    email: '',
    password: ''
};

const SignIn = () => {
    const { user } = useSelector((state) => state);
    const validations = useRef([false, false]);

    const [form, dispatchForm] = useReducer(genericReducer, initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isFormValid = validations.current.every((v) => !!v);

    const onSubmit = async () => {
        if (!isFormValid) return;

        setError(null);

        try {
            setLoading(true);

            const info = UserSchema.parse(form);

            const user = await loginUser(info);

            userDispatch(user);
        } catch (error) {
            if (error instanceof ZodError) setError(error?.issues[0].message);
            else setError(String(error));
        } finally {
            setLoading(false);
        }
    };

    if (user) return <Text>Login feito com sucesso!</Text>;

    return (
        <Div width="100%" gap="10px">
            <SubTitle margin="0 auto">Entre!</SubTitle>
            <Input
                onValue={(email) => dispatchForm({ email })}
                onValidation={(v) => (validations.current[0] = v)}
                schema={EmailSchema}
                type="email"
                label="Email"
                placeholder="Email"
                required
            />
            <Input
                onValue={(password) => dispatchForm({ password })}
                onValidation={(v) => (validations.current[1] = v)}
                schema={PasswordSchema}
                label="Senha"
                placeholder="Senha"
                type="password"
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
                Não tem uma conta?{' '}
                <Text
                    onClick={() => dispatch({ layout: 'sign-up' })}
                    display="inline"
                    cursor="pointer"
                    decoration="underline"
                >
                    Cadastre-se!
                </Text>
            </Text>
        </Div>
    );
};

export default SignIn;
