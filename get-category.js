const emojis = require('./emojis.js');

const getCategory = function(category) {
    return emojis.filter(emoji => {
        emoji.categories.includes(category)
    });
}

module.exports = getCategory;