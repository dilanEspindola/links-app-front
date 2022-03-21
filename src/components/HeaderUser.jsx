import { useNavigate } from "react-router-dom";
import { useCookie } from "../hooks/useCookie";

export const HeaderUser = ({ children }) => {
  const { removeCookie } = useCookie();
  const navigate = useNavigate();

  const logout = () => {
    removeCookie();
    navigate("/");
  };

  return (
    <>
      <header>
        <nav>
          <button onClick={logout}>logout</button>
        </nav>
      </header>
      {children}
    </>
  );
};
