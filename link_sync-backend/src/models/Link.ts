import mongoose, { Document } from "mongoose";

export interface ILink extends Document {
  user: mongoose.Types.ObjectId;
  platform: string;
  url: string;
  enabled: boolean;
  order: number;
}

const linkSchema = new mongoose.Schema<ILink>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    platform: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      default: "",
    },

    enabled: {
      type: Boolean,
      default: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ILink>("Link", linkSchema);