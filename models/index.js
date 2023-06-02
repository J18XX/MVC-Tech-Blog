const Post = require('./post');
const User = require('./user');
const Comment = require('./comment');

User.hasMany(Post, {
    foreignKey: 'id',
//    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'id',
//    onDelete: 'CASCADE'
})