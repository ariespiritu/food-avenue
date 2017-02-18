import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Please fill in first name',
    trim: true,
  },
  lastName: {
    type: String,
    required: 'Please fill in last name',
    trim: true,
  },
  email: {
    type: String,
    index: {
      unique: true,
    },
    lowercase: true,
    trim: true,
    default: '',
    required: 'Please fill in email address',
  },
});

export default mongoose.model('User', UserSchema);
