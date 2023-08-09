const { Schema, Types } = require('mongoose');

function getDate(val) {
    if (!val) return val;
    return (val.getMonth()) + "/" + val.getDate() + "/" + val.getFullYear();
}

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            get: getDate,
        },
    },
);

module.exports = { reactionSchema };