import Top from "./Top";
import Top3 from "./Top3";
import Users from "./users";
function App() {
  return (
    <>
      <div className="bg-blue-100 w-screen h-screen">
        <Top></Top>
        <div className="flex justify-center items-center pt-10 ">
          <div className="bg-white w-80 h-12 flex items-center justify-between rounded-md">
            <p className="pl-2 underline underline-offset-8">Organisation</p>
            <p className="pr-2">Department</p>
          </div>
        </div>
        <div className="flex justify-evenly items-end pt-10 ">
          <Top3></Top3>
          <Users></Users>
        </div>
      </div>
    </>
  );
}

export default App;
