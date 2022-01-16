import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/about">About</Link> Page
      </p>
    </div>
  );
};
