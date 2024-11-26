import { dispatch } from '@/context';
import { Button, Div, Icon, Text } from '@/styles';

const UnloggedHeader = () => {
    return (
        <Div dir="row" gap="20px" align="center">
            <Div
                onClick={() => dispatch({ layout: 'sign-in' })}
                dir="row"
                gap="5px"
                cursor="pointer"
            >
                <Icon name="user" />
                <Text size="1.1rem">Entrar</Text>
            </Div>
            <Button
                onClick={() => dispatch({ layout: 'sign-up' })}
                radius="5px"
                width="100px"
            >
                Cadastrar
            </Button>
        </Div>
    );
};

export default UnloggedHeader;
