import mongoose, { Schema } from 'mongoose';

const userschema: Schema =   new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  status: {
    type: Boolean,
    default: true
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Roles',
    required: true
  },
  wallet: {
    type: Schema.Types.ObjectId,
    ref: 'Wallet',
  },
  nextkin: {
    type: Schema.Types.ObjectId,
    ref: 'Nextkin',
  },
  verified: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: function(){
      return Date.now()
    }
  },
  updated_at: {
    type: Date,
    required: true,
    default: function(){
      return Date.now()
    }
  }
})

export default mongoose.model('User', userschema)