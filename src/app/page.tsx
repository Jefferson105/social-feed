'use client';

import CreatePost from '@/components/post/create';
import ListPosts from '@/components/post/list';

export default function Home() {
    return (
        <>
            <CreatePost />
            <ListPosts />
        </>
    );
}
