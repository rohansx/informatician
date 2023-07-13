import React from "react";
import "./AddBooks.css";
import Upload from "./Upload";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validate from "../../utils/validation";

const AddBooks = (props) => {
  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    publisher: "",
    pages: "",
    img: "",
    category: "",
  });

  const [error, setError] = useState({
    bookName: true,
    authorName: true,
    publisher: true,
    pages: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => {
      return { ...prev, [name]: value };
    });
    const message = validate[name](value);
    setError((prev) => {
      return { ...prev, ...message };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let submitable = true;
    Object.values(error).forEach((e) => {
      if (e !== false) {
        submitable = false;
        return;
      }
    });

    const bookPDF = document.getElementById("upload-btn");
    if(!bookPDF.files.length > 0) {toast.error("Please upload book."); return}


    if (submitable) {
      try {
        const res = await axios.post(
          "https://informaticonserver.onrender.com/api/book/add",
          book
        );
        toast.success("Book details added!!Upload the book.");
        localStorage.setItem("bookId", res.data);
      } catch (err) {
        toast.error("Fill all the details!");
        console.log(err.message);
      }
    } else {
      console.log("Fill all fields with valid data");
    }
  };
  const categories = [
    "Art",
    "Biography",
    "Business",
    "Children's",
    "Classics",
    "Christian",
    "Comics",
    "Cookbooks",
    "Ebooks",
    "Fantasy",
    "Fiction",
    "Novel",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Non-Fiction",
    "Poetry",
    "Psychology",
    "Prejudice",
    "Romance",
    "Science",
    "Thriller",
    "Universe",
  ];

  return (
    <div>
      <div className="addbook_main">
        <div className="addBooks-container">
          <div className="add-books text-white">
            <h1
              className="form-title"
              style={{
                color: props.theme === "dark" ? "white" : "black",
              }}
            >
              Add Books
            </h1>
            <form
              className="Boxx"
              onSubmit={handleSubmit}
              style={{
                color: props.theme === "dark" ? "white" : "black",
                backgroundColor: props.theme === "dark" ? "black" : "white",
              }}
            >
              <input
                className="Inputt"
                name="bookName"
                type="text"
                placeholder="Book Name"
                value={book.bookName}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.bookName && error.bookNameError && (
                <p className="error">{error.bookNameError}</p>
              )}
              <input
                className="Inputt"
                type="text"
                name="authorName"
                placeholder="Author Name"
                value={book.authorName}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.authorName && error.authorNameError && (
                <p className="error">{error.authorNameError}</p>
              )}
              <input
                className="Inputt"
                type="text"
                name="publisher"
                placeholder="Publisher"
                value={book.publisher}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.publisher && error.publisherError && (
                <p className="error">{error.publisherError}</p>
              )}
              <input
                className="Inputt"
                type="number"
                name="pages"
                placeholder="Pages"
                value={book.pages}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.pages && error.pagesError && (
                <p className="error">{error.pagesError}</p>
              )}
              <input
                className="Inputt"
                type="text"
                name="img"
                placeholder="Img Url"
                value={book.img}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              <select
                className="Inputt"
                name="category"
                value={book.category}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button className="Buttonn" type="submit">
                Add Book
              </button>
            </form>
          </div>
        </div>
        <Upload formData={error}/>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddBooks;
