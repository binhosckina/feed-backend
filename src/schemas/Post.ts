import { Schema, model, Document } from 'mongoose'

interface PostInterface extends Document {
  title: string,
  description?: string,
  body: string,
  isRead: boolean
}

const PostSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  body: { type: String, required: true },
  isRead: { type: Boolean, default: false }
}, {
  timestamps: true
})

export default model<PostInterface>('Post', PostSchema)
