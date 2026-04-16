import { useNavigate } from "react-router-dom";
import Header from "../components/shared/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      <div>Home</div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export default Home;
