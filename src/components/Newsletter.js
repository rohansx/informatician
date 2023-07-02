import React from "react";
import SubscribeButton from "./Buttons/SubscribeButton"

class Newsletter extends React.Component {
  render() {
    return (
      <>
        <p className="text-center text-lg font-semibold text-white pt-3">
          Subscribe to newsletter
        </p>
        <form className="flex justify-center mt-5 mb-5 ml-2 mr-2 max-[400px]:flex-col">
          <label for="simple-search" className="sr-only">
            Email
          </label>
          <div className="relative flex justify-center max-[400px]:flex-col items-center">
            <input
              type="email"
              id="simple-search"
              className=" border w-64 lg:w-96  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  bg-gray-200  "
              placeholder="Email address"
              required
            />
            <SubscribeButton/>
          </div>

        </form>
      </>
    );
  }
}

export default Newsletter;