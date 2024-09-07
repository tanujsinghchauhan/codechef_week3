import Green from "./assets/Green";
import Red from "./assets/Red";
function Users() {
  return (
    <>
      <div className="w-80 h-96 bg-[#3B5987] rounded-3xl flex flex-col justify-evenly">
        <div className=" text-white flex flex-row justify-evenly pt-4">
          <div className="rounded-full border-white border-4 h-10 w-10 flex items-center justify-center">
            #4
          </div>
          <p>Sebastian</p>
          <div className="flex flex-col">
            <p>1124</p>
            <div className="flex justify-end items-end">
              <Green className=""></Green>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-t-2 border-white my-4 w-4/5"></div>
        </div>

        <div className=" text-white flex flex-row justify-evenly">
          <div className="rounded-full border-white border-4 h-10 w-10 flex items-center justify-center">
            #5
          </div>
          <p>Jason</p>
          <div className="flex flex-col">
            <p>875</p>
            <div className="flex justify-end items-end">
              <Red></Red>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-t-2 border-white my-4 w-4/5"></div>
        </div>

        <div className=" text-white flex flex-row justify-evenly">
          <div className="rounded-full border-white border-4 h-10 w-10 flex items-center justify-center">
            #6
          </div>
          <p>Natalie</p>
          <div className="flex flex-col">
            <p>774</p>
            <div className="flex justify-end items-end">
              <Green></Green>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-t-2 border-white my-4 w-4/5"></div>
        </div>

        <div className=" text-white flex flex-row justify-evenly">
          <div className="rounded-full border-white border-4 h-10 w-10 flex items-center justify-center">
            #7
          </div>
          <p>Hannah</p>
          <div className="flex flex-col">
            <p>559</p>
            <div className="flex justify-end items-end">
              <Green></Green>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-t-2 border-white my-4 w-4/5"></div>
        </div>

        <div className=" text-white flex flex-row justify-evenly pb-3">
          <div className="rounded-full border-white border-4 h-10 w-10 flex items-center justify-center">
            #8
          </div>
          <p>Hannah</p>
          <div className="flex flex-col">
            <p>559</p>
            <div className="flex justify-end items-end">
              <Red></Red>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Users;
