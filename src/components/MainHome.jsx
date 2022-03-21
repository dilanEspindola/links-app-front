import { Link } from "react-router-dom";

export const MainHome = () => {
  return (
    <main>
      <h1>Here you can save your own links!</h1>
      <h3>If you don't have an account you can create one</h3>
      <Link to="/register" className="main__button">
        Register
      </Link>
    </main>
  );
};
