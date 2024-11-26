import { useRouter } from 'next/navigation';

import Logged from '@/components/header/logged';
import Unlogged from '@/components/header/unlogged';
import { useSelector } from '@/context';

import { Div, Header, Image } from '@/styles';
import Logo from '@/assets/fake-logo.png';

const HeaderMain = () => {
    const router = useRouter();
    const { user } = useSelector((state) => state);

    return (
        <Header height="70px" justify="center" boxShadow="0 1px 5px #ddd">
            <Div
                width="100%"
                maxWidth="1200px"
                margin="0 auto"
                dir="row"
                justify="space-between"
            >
                <Div onClick={() => router.push('/')} cursor="pointer">
                    <Image src={Logo} height={30} width={150} alt="Logo" />
                </Div>
                {user ? <Logged /> : <Unlogged />}
            </Div>
        </Header>
    );
};

export default HeaderMain;
