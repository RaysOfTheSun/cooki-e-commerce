let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const cookieSchema = new Schema({
    name: {
        type: 'string'
    },
    desc : {
        type: 'string'
    },
    image: {
        type: 'string'
    },
    category : {
        type: 'string'
    }
});

module.exports = mongoose.model('cookies', cookieSchema);