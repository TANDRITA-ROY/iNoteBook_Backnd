const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type : String,
        required : true
    },
    descriptions:{
        type : String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now
    }
});module.exports= mongoose.model('Note',NoteSchema )