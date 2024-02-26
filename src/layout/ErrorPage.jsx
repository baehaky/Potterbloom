import { useRouteError, NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="bg-gray-200" id="error-page">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>
        <p className="text-4xl font-medium text-gray-800">
          {error.statusText || error.message}
        </p>
        <NavLink to="/" className="mt-4 text-xl text-blue-600 hover:underline">
          Go back home
        </NavLink>
      </div>
    </div>
  );
}
