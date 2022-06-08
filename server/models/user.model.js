const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },  
  cpf: { type: String, maxlength: 15 },
  telefone: { type: String, maxlength: 15 },
  dataNasc: { type: Date, },
  apto: { type: String, maxlength: 10 },
  email: { type: String, maxlength: 30,  required: true},  
  password: { type: String, required: true },
  inadimplente: { type: Boolean },
  sindico: { type: Boolean },
  tokens: [{ token: { type: String, required: true },},],
},
{
  timestamps: true,
  collection: 'users',
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email, inadimplente: user.inadimplente, sindico: user.sindico }, 'secret');
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error({ error: 'Login inválido!' });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: 'Login inválido!' });
  }
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;