import { FiGithub, FiLinkedin } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <div className="fixed z-50 grid h-[6.5rem] w-screen place-items-center bg-card py-2">
        <h1 className="mb-1 text-4xl font-bold">Mikołaj Zięba</h1>
        <div className="flex space-x-8">
          <a
            href="https://github.com/ziebamikolaj"
            className="flex items-center space-x-2"
          >
            <FiGithub className="h-6 w-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mikolaj-zieba-/"
            className="flex items-center space-x-2"
          >
            <FiLinkedin className="h-6 w-6" /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
