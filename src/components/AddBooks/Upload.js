import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import './Upload.css';
const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("bookId");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      if (file) {
        toast.loading("Uploading...");
        const formData = new FormData();
        formData.append("file", file);

        await axios.post("https://informaticonserver.onrender.com/api/upload", formData);
        await axios.put("https://informaticonserver.onrender.com/api/book/" + id, {
          bookpdf: file.name,
        });
        navigate("/success");
        localStorage.clear();
      } else {
        toast.error("Choose a file to upload!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="upload p-10 d-flex flex-column justify-content-center align-items-center">
      <h2 className="fs-2 fw-bolder" style={{color:"#3372c1"}}>Upload Books</h2>
      <div className="upload-box my-5 p-10 d-flex flex-column justify-content-center align-items-center">
        <input
          type="file"
          name=""
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={handleFileChange}
        />
        <label className="mb-5" htmlFor="upload-btn">
          Select Books To Upload <LibraryBooksIcon className="ml-2" />
        </label>
        {file && (
          <p className="uploaded m-1">
            {file.name}
            <CloseIcon
              className="close-icon ml-10 cursor-pointer"
              onClick={() => setFile(null)}
            />
          </p>
        )}
        <button className="mt-4" type="submit" onClick={handleFileUpload}>
          Submit
        </button>
      </div>

      <p className="mt-0">
        Supported file types: pdf, txt, doc, ppt, xls, docx, and more
      </p>

      <ToastContainer />
    </div>
  );
};

export default FileUploadComponent;
