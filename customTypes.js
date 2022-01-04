const customTypes = {
    wip: {
        description: 'A feature, fix, or change that is still a work in progress',
        title: 'Work In Progress'
    },
    remove: {
        description: 'A feature or code block that is being removed',
        title: 'Remove'
    },
    update: {
        description: 'Indicates a change to package versions, project version, etc.',
        title: 'Update Version'
    },
    security: {
        description: 'Indicates any change related to the security features of the project like updating a vulnerable package',
        title: 'Security Update'
    }
}

module.exports = {
customTypes
}