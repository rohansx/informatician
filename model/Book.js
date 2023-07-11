import {Schema, model, models} from "mongoose"


const bookSchema = new Schema({
  bookName:{
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,   
  },
  publisher: {
    type: String,
    required: true,     
  },
  pages: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    default: "",
    required: true,
  },
  bookpdf: {
    type: String,
    default:"",
  },
  category:{
    type:String,
    default:"",
  }
},
{ timestamps: true }
)
const Book = models.Book || model("Book", bookSchema)
export default Book;