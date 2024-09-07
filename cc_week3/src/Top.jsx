import Back from "./assets/back";
import Menu from "./assets/menu";
function Top() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <Back />
        <div className="font-sans font-bold text-xl md:text-2xl px-4">
          Leaderboard
        </div>
        <Menu />
      </div>
    </>
  );
}
export default Top;
