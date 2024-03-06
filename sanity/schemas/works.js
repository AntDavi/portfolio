export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [
                {
                    name: 'category',
                    title: 'Category',
                    type: 'string'
                }
            ]
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'repository',
            title: 'Repository',
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
    ]
}