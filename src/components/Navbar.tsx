import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed grid h-20 w-screen place-items-center border-b">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Mikołaj Zięba
      </h2>
      <div className="flex w-24 place-content-around">
        <Link to="https://github.com/ziebamikolaj">
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/mikolaj-zieba-/">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
