export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string'
        },
        {
            name: 'publisedAt',
            title: 'Published at',
            type: 'datetime'
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text'
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: "image",
                    fields: [{ type: "text", name: "alt", title: "Alt" }],
                },
            ],
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string'
        },
    ]
}