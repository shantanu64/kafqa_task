import { React, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Counter() {
  let [num, setNum] = useState(0);
  //   const styles = {
  //     inc:{
  //       color
  //     },
  //     dec:{
  //         display:"none",
  //       },
  //   };

  let incStyle = () => {
    if (num < 5) {
    }
  };

  let incNum = () => {
    if (num < 1000) {
      setNum(Number(num) + 1);
    }
  };

  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className="w-1/2 mx-auto my-24 border shadow-md rounded-md h-80 bg-blue-100 mx-auto">
        <div className=" flex flex-col md:flex-row gap-10 md:mt-28 xl:ml-40 lg:ml-20 mx-auto">
          <div className="h-24 w-24">
            <button
              type="button"
              onClick={decNum}
              className="h-full w-full text-blue-300 pl-20 md:pl-16 "
            >
              <FaMinus />
            </button>
          </div>
          <input
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
            className={`border-blue-500 bg-blue-500 outline-none text-center rounded-md w-32 text-white font-bold text-5xl ml-6 md:ml-0 + ${num < 5 ? 'text-red-600' : 'bg-blue-500'} + ${num > 100 ? 'text-green-700' : 'bg-blue-500'}`}
          />
          <div className="h-24 w-24">
            <button
              type="button"
              onClick={incNum}
              className="h-full w-full text-blue-300 pl-20 md:pl-0"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
