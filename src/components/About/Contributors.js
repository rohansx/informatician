import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css/pagination";

function Contributors(props) {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(14);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/rohansx/informatician/contributors")
      .then((response) => {
        setContributors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = contributors.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={`contact-container ${
        props.theme === "dark" ? "dark-mode" : ""
      }`}
    >
      <h1 className="text-center text-very-dark-desaturated-blue text-3xl leading-8 font-bold text-shadow-md mb-3 mt-3">
        Our Valuable Contributors
      </h1>

      <div
        className={`flex flex-wrap justify-center p-6 gap-4 shadow-md rounded-xl sm:p-12 bg-gray-100  ${
          props.theme === "dark" ? "bg-black" : ""
        }`}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {currentUsers.map((contributor) => (
              <div
                key={contributor.id}
                className="flex flex-col items-center space-y-4 text-center divide-y divide-gray-700"
              >
                <a
                  rel="noopener noreferrer"
                  href={`https://github.com/${contributor.login}`}
                  aria-label="GitHub"
                  className="p-2 rounded-md hover:text-violet-800"
                  style={{color:"#3372c1"}}
                >
                  <img
                    src={contributor.avatar_url}
                    alt="avatar"
                    className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
                  />
                </a>
                <div className="my-2 space-y-1">
                  <h2
                    className={`text-xl font-semibold sm:text-2xl text-gray-600 ${
                      props.theme === "dark" ? "text-white" : ""
                    }`}
                  >
                    {contributor.login}
                  </h2>
                  <p
                    className={`px-5 text-xs sm:text-base text-gray-500 ${
                      props.theme === "dark" ? "text-white" : ""
                    }`}
                  >
                    {`Contributions: ${contributor.contributions}`}
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  {/* Add any additional content or buttons here */}
                </div>
              </div>
            ))}
            {contributors.length === 0 && <p>No contributors found.</p>}
          </>
        )}
      </div>

      <div className="pagination flex justify-center">
        {contributors.length > 0 && (
          <ul className="flex justify-center space-x-4 mt-4 ">
            {Array.from(
              { length: Math.ceil(contributors.length / usersPerPage) },
              (_, index) => {
                const pageNumber = index + 1;
                return (
                  <li
                    key={pageNumber}
                    className={`cursor-pointer ${
                      currentPage === pageNumber ? "font-bold" : ""
                    } ${
                      props.theme === "dark"
                        ? "underline-white"
                        : "underline-black"
                    }`}
                    onClick={() => paginate(pageNumber)}
                  >
                    {pageNumber}
                  </li>
                );
              }
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Contributors;
