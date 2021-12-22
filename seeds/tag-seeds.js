const sequelize = require('../config/connection');
const { Tag } = require('../models');

const tagdata = [
    {
      tag_name: 'pizza party'
    },
    {
        tag_name: 'brunchies brunch'
    },
    {
        tag_name: 'death by chocolate'
    },
    {
        tag_name: 'italian'
    },
    {
        tag_name: 'indian'
    },
    {
        tag_name: 'brazilian'
    }
]
const seedTags = () => Tag.bulkCreate(tagdata, {individualHooks: true});

module.exports = seedTags;