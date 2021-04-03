import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password, 10)
  } catch (err) {
    next(err)
  }
})

userSchema.method({
  async comparePassword(password) {
    return await bcrypt.compare(password, this.password)
  },
})

export const User = mongoose.model('user', userSchema)
