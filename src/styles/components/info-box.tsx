import { Div } from '../layout';
import { Text } from '../typograph';

interface IProps {
    title: string;
    value: string | number;
}

const InfoBox = ({ title, value }: IProps) => {
    return (
        <Div
            bg="#2980b9"
            padding="10px"
            radius="5px"
            width="200px"
            height="100px"
            justify="space-between"
        >
            <Text color="#fff" weight="bold">
                {title}
            </Text>
            <Text color="#fff" weight="bold" size="1.4rem">
                {value}
            </Text>
        </Div>
    );
};

export default InfoBox;
