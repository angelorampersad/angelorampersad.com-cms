export default {
    name: 'snippet',
    type: 'document',
    title: 'Snippet',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'markdown'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image'
        }
    ]
}