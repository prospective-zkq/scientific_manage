const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../config/db')
const PatentSchema = new Schema({
  projectName: String,
  account: String,
  userName: String,
  second_college: String,
  patentType: String,
  cooperation: String,
  field: String,
  approval: String,
  createDate: {
    type: Date,
    default: Date.now()
  },
  endTime: Date,
  phone: Number,
  remarks: String,
  status: String,
  isConclusion: String,
  category: String,
  scores: String
},{versionKey: false})
const PatentModel = db.model('Patent', PatentSchema)
module.exports = PatentModel