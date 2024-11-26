import { useEffect, useReducer } from 'react';

import Post from '@/components/post/item';
import EmptyPost from '@/components/post/empty';
import { dispatch, useSelector } from '@/context';

import { Icon, Nav } from '@/styles';
import { listPosts } from '@/server/post';
import { genericReducer } from '@/context/reducer';

interface IReducer {
    page: number;
    loading: boolean;
    fetching: boolean;
    error: string | null;
}

const initialState: IReducer = {
    page: 0,
    loading: false,
    fetching: false,
    error: null
};

const ListPosts = () => {
    const { posts } = useSelector((state) => state);
    const [state, dispatchPost]: any = useReducer(genericReducer, initialState);

    const getMorePosts = async (page: number) => {
        dispatchPost({ fetching: true, loading: page === 0 });

        try {
            const list = await listPosts({
                page,
                size: 30
            });

            dispatch({ posts: list.concat(posts || []) });
        } catch {
            dispatchPost({ error: 'Erro ao carregar posts.' });
        } finally {
            dispatchPost({ fetching: false, loading: false });
        }
    };

    useEffect(() => {
        getMorePosts(0);
        // eslint-disable-next-line
    }, []);

    if (state.loading) return <Icon name="loading" />;

    return (
        <Nav gap="30px" width="100%">
            {posts?.length ? (
                posts.map((p, i) => <Post {...p} key={i} />)
            ) : (
                <EmptyPost />
            )}
        </Nav>
    );
};

export default ListPosts;
