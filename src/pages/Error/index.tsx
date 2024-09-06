import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
      </div>
    );
  } else {
    return (
      <div id="errorpage">
        <h1>Oops!</h1>
        <h2>Unknown error</h2>
      </div>
    );
  }
};

export default ErrorPage;
