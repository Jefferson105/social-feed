'use client';

import { useSelector } from '@/context';
import { Div, Image, SubTitle, Text } from '@/styles';

export default function Perfil() {
    const { user } = useSelector((state) => state);

    return (
        <Div width="100%" gap="5px" align="center">
            <Image
                src={`/profile/${user?.photo}`}
                height={100}
                width={100}
                alt="User profile"
            />
            <SubTitle>{user?.name}</SubTitle>
            <Text>{user?._id?.toString()}</Text>
        </Div>
    );
}
