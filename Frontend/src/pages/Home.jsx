import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <div>Home</div>
      <div>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export default Home;
