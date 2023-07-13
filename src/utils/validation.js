
const emailRegex = /^\w+([\.-]?\w+)*@(gmail\.com|yahoo\.com|hotmail\.com|aol\.com|outlook\.com)$/;

const validate = {
    name: (value) => {
      if (!value) return { name: true, nameError: "Name field cannot be empty" };
      else {
        return value.length < 6
          ? { name: true, nameError: "Name must be atleast 6 characters long." }
          : { name: false, nameError: false }
      }
    },
    email: (value) => {
        return emailRegex.test(value)
          ? { email: false, emailError: false }
          : { email: true, emailError: "Please enter a valid email address" }
      },
    message: (value)=>{
        const numOfWords = value.split(/\s+/).length;
    
        if(numOfWords < 10 || numOfWords > 100){
          return {message: true, messageError: "Describe your message in 10 to 100 words"}
        }else{
          return {message: false, messageError: false}
        }
      },

      bookName: (value)=>{
        const numOfWords = value.split(/\s+/).length;
    
        if(numOfWords > 10){
          return {bookName: true, bookNameError: "Book title can contain maximum 10 words"}
        }
        else{
          return {bookName: false, bookNameError: false}
        }
      },

      authorName: (value)=>{
        const numOfWords = value.split(/\s+/).length;
        if(numOfWords < 2)  return {authorName: true, authorNameError: "Add First Name and Last Name"}
        if(value.length > 40) return {authorName: true, authorNameError: "Name must be less than 40 characters"}
        return {authorName: false, authorNameError: false}
      },

      publisher: (value)=>{
        if(value.length > 30) return {publisher: true, publisherError: "Publisher name must be less than 30 characterss"}
        return {publisher: false, publisherError: false}
      },

      pages: (value)=>{
          if(value.length < 1) return {pages: true, pagesError: "Pages cannot be in negative number"}
          if(value > 100000) return {pages: true, pagesError: "Pages must be less than 100000"}
          return {pages: false, pagesError: false}
      }
}

export default validate;
