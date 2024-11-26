import { ZodError } from 'zod';
import { useReducer, useRef, useState } from 'react';

import { Button, Div, Err, Icon, Image, Input, Text } from '@/styles';
import { genericReducer } from '@/context/reducer';
import { PostSchema } from '@/schemas/post';
import { dispatch, useSelector } from '@/context';
import { createPost } from '@/server/post';

const initialState = {
    title: '',
    description: ''
};

const CreatePost = () => {
    const { user, posts } = useSelector((state) => state);
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

            const info = PostSchema.parse({ ...form, user_id: user?._id });

            const newPost = await createPost(info);

            if (!newPost || !user) throw 'Post did not created';

            dispatch({
                posts: [
                    {
                        ...newPost,
                        user: {
                            _id: user?._id?.toString(),
                            name: user?.name,
                            photo: user?.photo
                        },
                        likes: 0,
                        liked: false
                    }
                ].concat(posts as any)
            });
        } catch (error) {
            if (error instanceof ZodError) setError(error?.issues[0].message);
            else setError(String(error));
        } finally {
            setLoading(false);
        }
    };

    if (!user) return null;

    if (loading) return <Icon name="loading" />;

    return (
        <Div width="100%">
            <Div
                dir="row"
                align="center"
                justify="space-between"
                width="100%"
                margin="0 0 10px 0"
            >
                <Div dir="row" align="center">
                    <Image
                        src={`/profile/${user?.photo}`}
                        height={40}
                        width={40}
                        alt="User profile"
                    />
                    <Text margin="0 0 0 10px" size="1.1rem">
                        O que está pensando?
                    </Text>
                </Div>
            </Div>
            <Input
                required
                maxLength={100}
                margin="0 0 10px 0"
                placeholder="Título do post"
                onValue={(title) => dispatchForm({ title })}
                onValidation={(v) => (validations.current[0] = v)}
            />
            <Input
                required
                maxLength={500}
                textarea
                margin="0 0 10px 0"
                placeholder="Descrição"
                onValue={(description) => dispatchForm({ description })}
                onValidation={(v) => (validations.current[1] = v)}
            />
            {!!error && <Err>*{error}</Err>}
            {loading ? (
                <Icon name="loading" />
            ) : (
                <Button
                    bg={isFormValid ? undefined : '#ccc'}
                    cursor={isFormValid ? 'pointer' : 'not-allowed'}
                    margin="10px 0 0 auto"
                    onClick={onSubmit}
                    width="100px"
                >
                    Enviar
                </Button>
            )}
        </Div>
    );
};

export default CreatePost;
