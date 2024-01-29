import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import fetchData from "src/Services/proxies/fetchData";
import UserSvg from "src/assets/UserSvg";

const DB__URL = "http://localhost:3000";

const Navbar = () => {
  const { isLoading, isError, data, error } = useQuery(["user", DB__URL], () =>
    fetchData(`${DB__URL}/user`)
  );

  const navigate = useNavigate();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error: {error.message}</h1>;

  return (
    <nav
      className=" 
      
      flex 
      flex-row
      justify-between
      items-center
      w-screen
      max-w-screen-xl
      h-20
      p-10
      m-5
      cursor-pointer
    "
    >
      <h1
        onClick={() => navigate("/")}
        className="
        text-2xl
        font-semibold
      "
      >
        Natural
      </h1>

      <div
        onClick={() => navigate("/user")}
        className="flex flex-row items-center"
      >
        <UserSvg />

        <p
          className="
        hidden
        md:block
        font-medium
        pl-2
        "
        >
          Hi, {data[0].name}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
