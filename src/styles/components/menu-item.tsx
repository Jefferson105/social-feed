import { useRouter } from 'next/navigation';

import { Li } from '../layout';
import { Icon, IconName } from '../icon';
import { Text } from '../typograph';

interface IProps {
    path?: string;
    onClick?: () => void;
    name: string;
    icon: IconName;
    selected: boolean;
}

const MenuItem = ({ path, onClick, name, icon, selected }: IProps) => {
    const router = useRouter();

    return (
        <Li
            margin="0 0 10px 0"
            padding="10px"
            radius="10px"
            dir="row"
            align="center"
            gap="10px"
            bg={selected ? '#fff' : undefined}
            border={`thin solid ${selected ? '#ddd' : 'transparent'}`}
            width="100%"
            cursor="pointer"
            onClick={() => (path ? router.push(path) : onClick && onClick())}
        >
            <Icon name={icon} />
            <Text>{name}</Text>
        </Li>
    );
};

export default MenuItem;
