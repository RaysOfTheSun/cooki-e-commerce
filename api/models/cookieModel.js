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
    },
    serving: {
        type: 'string'
    },
    ingredients: {
        type: Schema.Types.String
    },
    nutriFacts: {
        type: Schema.Types.Mixed
    },
    points: {
        type: Schema.Types.Mixed
    },
    piece: {
        type: Schema.Types.Number
    }
});

module.exports = mongoose.model('cookies', cookieSchema);