import { useRouter } from 'next/navigation';

import { Div, Icon, Image, Text } from '@/styles';
import { useSelector } from '@/context';
import { logout } from '@/context/actions/auth';

const LoggedHeader = () => {
    const router = useRouter();

    const { user } = useSelector((state) => state);

    return (
        <Div dir="row" align="center" gap="20px">
            <Div
                cursor="pointer"
                dir="row"
                align="center"
                gap="5px"
                onClick={() => router.push('/perfil')}
            >
                <Text size=".9rem" weight="bold">
                    {user?.name}
                </Text>
                <Image
                    src={`/profile/${user?.photo}`}
                    height={30}
                    width={30}
                    alt="User profile"
                />
            </Div>
            <Div dir="row" gap="5px" cursor="pointer" onClick={() => logout()}>
                <Text>Sair</Text>
                <Icon name="logout" />
            </Div>
        </Div>
    );
};

export default LoggedHeader;
