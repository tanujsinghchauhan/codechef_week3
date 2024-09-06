import Back from "./assets/back";
import Menu from "./assets/menu";
function Top() {
  return (
    <>
      <div className="flex justify-evenly">
        <Back></Back>
        <div className="font-sans font-bold ">Leaderboard</div>
        <Menu></Menu>
      </div>
    </>
  );
}
export default Top;
