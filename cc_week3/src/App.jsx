import Top from "./Top";
import Top3 from "./Top3";
import Users from "./users";
function App() {
  return (
    <>
      <div className="bg-blue-100 w-screen h-screen overflow-auto">
        <Top />

        <div className="flex justify-center items-center pt-5 pb-24">
          <div className="bg-white w-72 md:w-80 h-12 flex items-center justify-between rounded-md">
            <p className="pl-2 text-sm md:text-base underline underline-offset-8">
              Organisation
            </p>
            <p className="pr-2 text-sm md:text-base">Department</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center pt-5 pb-5 gap-4">
          <div className="w-full md:w-auto flex justify-center">
            <Top3 />
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <Users />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
