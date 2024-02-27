export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'job',
            title: 'Job',
            type: 'string'
        },
        {
            name: 'review',
            title: 'Review',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}