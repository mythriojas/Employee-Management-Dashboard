import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-sm fixed bottom-0 right-0 bg-gray-800 mx-auto flex justify-items-center space-y-1 p-2 flex-col text-gray-50 text-xs">
      <a href="https://rajeshroyal.com" target="_blank" rel="noreferrer">
        <p>@Rajesh.royal</p>
      </a>
      <p>
        database will reset at midnight everyday.
        <a
          href="https://heroku-employee-mgmt.herokuapp.com/"
          className="text-blue-400"
          target="_blank"
          title="because free heroku server needs a cold start."
          rel="noreferrer">
          {" "}
          Click here
        </a>{" "}
        if data is not loading.
      </p>
    </footer>
  );
};

export default Footer;
