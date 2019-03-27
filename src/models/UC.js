const mongoose = require('mongoose')

const { Schema } = mongoose

const UCSchema = new Schema ({
    name: {type: String, required: true},
    requirement: {type: String, required: true},
    work_load: {type: Number, required: true},
    required_BCC: {type: Number, required: true},
    required_EC:{type: Number, required: true},
    required_EB:{type: Number, required: true},
    required_EM:{type: Number, required: true},
    required_BBT:{type: Number, required: true},
    required_BMC:{type: Number, required: true},
    required_BCT:{type: Number, required: true},
    interdiciplinary_BCT:{type: Number, required: true},
    elective_BCC:{type: Number, required: true},
    pdf:{type: String, required: true}
})

module.exports = mongoose.model('dados', UCSchema)