import { useNavigate } from "react-router-dom";

import UserSvg from "src/assets/UserSvg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-row justify-between items-center w-screen max-w-screen-xl h-20 p-10 m-5 cursor-pointer">
      <h1 onClick={() => navigate("/")} className="text-2xl font-semibold">
        Natural
      </h1>

      <div
        onClick={() => navigate("/user")}
        className="flex flex-row items-center"
      >
        <UserSvg />

        <p className="hidden md:block font-medium pl-2">Hi, User</p>
      </div>
    </nav>
  );
};

export default Navbar;
