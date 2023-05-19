import Avatar from "../Avatar/avatarlink.png";
import pointer from "../Avatar/pointer.png";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <div className="p-16 flex flex-col grow gap-5 justify-center items-center">
      <img
        className="w-24 h-24 rounded-full shadow-md shadow-slate-400"
        src={Avatar}
        alt=""
      />
      <h1 className="text-center flex flex-col gap-1">
        <span className="font-semibold text-lg">Yash Pandey</span>
        <span className="flex items-center justify-center gap-1 md:gap-2 lg:gap-3 text-lg md:text-xl w-screen ">
          {
            <Typewriter
              options={{
                strings: [" I am a MERN Stack developer. Know me more"],
                delay: 85,
                autoStart: true,
                loop: true,
              }}
            />
          }{" "}
          <span>
            <img className="w-8 h-8 animate-bounce" src={pointer} alt="" />
          </span>
        </span>
      </h1>
    </div>
  );
};

export default Header;
