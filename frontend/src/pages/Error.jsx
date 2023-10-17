import React from "react";
import { Link, useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// This page will be dispalyed every time we have an error in the app
const ErrorPage = () => {
  // Hook used to display a proper error message.
  // The error object depends of the error type from the source
  const error = useRouteError();
  let errorTitle = "An error occurred";
  let errorMessage = "Something went wrong";

  if (error.status === 500) {

    // throwing a json(method from eact-router-dom) error no need to parse the response
    // errorMessage = JSON.parse(error.data).message;
    errorMessage = error.data.message;
  }

  if (error.status === 404) {
    errorTitle = "Not Found";
    errorMessage = "Could not find the page";
  }
  return (
    <>
      <MainNavigation />
      <div>{errorTitle} </div>
      <p>{errorMessage}</p>
      <p>
        Return to <Link to="/"> Home</Link>
      </p>
    </>
  );
};

export default ErrorPage;
