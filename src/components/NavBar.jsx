import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdChatBubbleOutline } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <div className="h-6"></div>

      <div className="container flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-15" />
          </Link>
        </div>

        <ul className="flex gap-12 items-center">
          <li>
            <Link className="link font-semibold text-[15px]" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link font-semibold text-[15px]" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link font-semibold text-[15px]" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="link font-semibold text-[15px]" to="/clients">
              Clients
            </Link>
          </li>
        </ul>

        <Button
          className="!rounded-4xl !bg-white !text-black w-36 h-11 !text-[13px] !capitalize"
          variant="outlined"
          startIcon={<MdChatBubbleOutline />}
          component={Link}
          to="/contact"
        >
          Contact me
        </Button>
      </div>
    </>
  );
};

export default NavBar;
