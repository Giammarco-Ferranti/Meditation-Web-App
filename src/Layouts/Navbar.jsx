import UserSvg from "src/assets/UserSvg";

const Navbar = () => {
  return (
    <nav
      className=" 
      container
      flex 
      flex-row
      justify-between
      items-center
      w-screen
      h-20
      p-2
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

      <div className="flex flex-row">
        <UserSvg />

        <p
          className="
        hidden
        md:block
        "
        >
          Hi, Giammarco
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
