function Top3() {
  return (
    <>
      <div className="flex items-end justify-center pt-10 space-x-1 ">
        <div>
          <div className="flex flex-col items-center justify-center w-40 h-60 bg-[#3B5987] border-y-4 border-slate-50 rounded-tl-3xl rounded-bl-3xl">
            <p className="text-white ">Jackson</p>
            <p className="text-white font-bold">1847</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center w-40 h-80 bg-[#3B5987] border-y-4 border-slate-50 rounded-tl-3xl rounded-tr-3xl">
            <p className="text-white ">Eiden</p>
            <p className="text-white font-bold">2430</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center w-40 h-60 bg-[#3B5987] border-y-4 border-slate-50 rounded-tr-3xl rounded-br-3xl">
            <p className="text-white ">Emma Aria</p>
            <p className="text-white font-bold">1647</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Top3;
