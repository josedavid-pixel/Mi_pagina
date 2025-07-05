export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    image: string;
    tags: string[];
    aiHint: string;
};

export const posts: Post[] = [];
