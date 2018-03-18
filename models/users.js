var mongoose =  require('mongoose');

var UserSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    college: {type: String, required: true},
    role: {type: Boolean, default: false}
  }, {
    collection: 'users'
});

module.exports = mongoose.model('User', UserSchema);
