var posts = [
    {
        title: 'Introducting Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'DevAhoy',
        url: 'http://devahoy.com'
    }
];

Template.postsList.helpers({
    posts: posts
});