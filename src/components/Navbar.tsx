import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="fixed z-50 grid h-[5.5rem] w-screen place-items-center bg-card py-2">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Mikołaj Zięba
        </h2>
        <div className="flex w-24 place-content-around">
          <a href="https://github.com/ziebamikolaj">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mikolaj-zieba-/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
