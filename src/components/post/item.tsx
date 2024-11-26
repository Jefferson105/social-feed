import { likePostAction } from '@/context/actions/post';
import { Div, Footer, Header, Icon, Image, SubTitle, Text } from '@/styles';
import { COLORS } from '@/styles/colors';
import { IPost } from '@/types/posts';

const Post = ({
    _id,
    user,
    title,
    description,
    likes,
    liked,
    comments
}: IPost) => {
    return (
        <Div gap="10px">
            <Header>
                <Div dir="row" gap="5px" align="center">
                    <Image
                        src={`/profile/${user?.photo}`}
                        height={40}
                        width={40}
                        alt="User profile"
                    />
                    <Text>{user.name}</Text>
                </Div>
            </Header>
            <Div>
                <SubTitle>{title}</SubTitle>
                <Text>{description}</Text>
            </Div>
            <Footer gap="20px" align="center" dir="row">
                <Div
                    dir="row"
                    gap="5px"
                    cursor="pointer"
                    onClick={() => likePostAction(_id)}
                >
                    <Icon color={liked ? COLORS.blue : undefined} name="like" />
                    <Text>{likes}</Text>
                </Div>
                <Div dir="row" gap="5px" cursor="pointer">
                    <Icon name="comment" />
                    <Text>{comments || 0}</Text>
                </Div>
            </Footer>
        </Div>
    );
};

export default Post;
