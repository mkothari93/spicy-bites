const { Comment } = require('../models');
const commentData = [
  {
    comment_text: 'This was delicious!',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Definitely making this again!',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Yummy! Definitely a must try!',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'This dish has so much flavor, I loved it!',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'My whole family loved it!',
    user_id: 2,
    post_id: 1
  },
];
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;