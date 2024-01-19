import UserSvg from "src/assets/UserSvg";

const Navbar = () => {
  return (
    <nav
      className=" 
      
      flex 
      flex-row
      justify-between
      items-center
      w-screen
      max-w-screen-lg
      h-20
      p-10
      m-5
      
    "
    >
      <h1
        className="
        text-2xl
        font-semibold
      "
      >
        Natural
      </h1>

      <div className="flex flex-row items-center">
        <UserSvg />

        <p
          className="
        hidden
        md:block
        font-medium
        pl-2
        "
        >
          Hi, Giammarco
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
