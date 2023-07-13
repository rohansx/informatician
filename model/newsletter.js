import { Schema, models, model } from "mongoose";

const newsletterSchema= new Schema({
  email:{
    type: String,
    unique:[true, 'Email Already Exist!'],
    required:[true, 'Email is required']
  }
},{ timestamps: true })

const Newsletter = models.Newsletter || model("Newsletter",newsletterSchema);

export default Newsletter;