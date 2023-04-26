export default {
    name: 'coaches',
    type: 'document',
    title: 'Coaches',
    fields: [
        {
            name:'id',
            type: 'number',
            title: 'ID'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'biop1',
            type: 'text',
            title: 'BioP1'
        },
        {
            name: 'biop2',
            type: 'text',
            title: 'BioP2'
        },
        {
            name: 'headshot',
            type: 'image',
            title: 'Headshot',
            options: {
                hotspot: true
            }
        }
    ],
    orderings: [
        {
            title: 'ID',
            name: 'idNumber',
            by: [
                {field: 'id', direction: 'asc'}
            ]
        }
    ]
}