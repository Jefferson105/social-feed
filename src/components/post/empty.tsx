import { Div, Icon, Text } from '@/styles';
import { COLORS } from '@/styles/colors';

const EmptyPost = () => {
    return (
        <Div
            bg={COLORS.light}
            padding="10px"
            width="300px"
            height="300px"
            margin="40px auto 0 auto"
            align="center"
            justify="center"
            gap="15px"
            radius="5px"
            border="thin solid #ddd"
        >
            <Icon name="empty" />
            <Text
                color={COLORS.dark}
                weight="bold"
                size="1.2rem"
                align="center"
            >
                Ainda sem posts, seja o primeiro!
            </Text>
        </Div>
    );
};

export default EmptyPost;
