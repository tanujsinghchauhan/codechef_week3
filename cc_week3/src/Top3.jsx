import Num1 from "./assets/num1";
import Img from "./assets/image-removebg-preview.png";
import Img3 from "./assets/second.png";
import Img2 from "./assets/oi.png";
function Top3() {
  return (
    <>
      <div className="relative flex flex-row items-end justify-center pt-1 space-x-2">
        <div className="relative flex flex-col items-center justify-center w-40 h-60 bg-[#3B5987] border-y-4 border-slate-50 rounded-tl-3xl rounded-bl-3xl">
          <img
            src={Img2}
            className="absolute top-[-30%] left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-auto"
          />
          <p className="text-white text-sm md:text-base">Jackson</p>
          <p className="text-white font-bold text-sm md:text-base">1847</p>
        </div>

        <div className="relative flex flex-col items-center justify-center w-36 h-72 bg-[#3B5987] border-y-4 border-slate-50 rounded-tl-3xl rounded-tr-3xl">
          <div className="absolute top-[-7rem] z-10">
            <Num1 />
          </div>
          <img
            src={Img}
            className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-auto"
          />
          <p className="text-white text-sm md:text-base">Eiden</p>
          <p className="text-white font-bold text-sm md:text-base">2430</p>
        </div>

        <div className="relative flex flex-col items-center justify-center w-40 h-60 bg-[#3B5987] border-y-4 border-slate-50 rounded-tr-3xl rounded-br-3xl">
          <img
            src={Img3}
            className="absolute top-[-30%] left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-auto"
          />
          <p className="text-white text-sm md:text-base">Emma Aria</p>
          <p className="text-white font-bold text-sm md:text-base">1647</p>
        </div>
      </div>
    </>
  );
}
export default Top3;
