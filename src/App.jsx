import "./App.css";
import Bio from "./component/bio";
import firstImage from "./assets/drawers.jpg";
import ShareComponentMobile from "./component/shareMobile";
import { useState } from "react";

function App() {
  const [defaultState, setDefaultState] = useState(false);

  let defaultStateValue = defaultState.valueOf();

  console.log(defaultStateValue);

  return (
    <>
      <main className="main flex flex-col lg:flex-row w-[20rem] lg:w-[40rem] h-[35rem] lg:h-[15rem] rounded-lg overflow-hidden">
        <div className="w-[100%] lg:w-[70%] h-[38%] lg:h-[100%] overflow-clip bg-cover">
          <img className="lg:h-[100%] lg:w-[] " src={firstImage} alt="" />
        </div>
        <div className="flex flex-col justify-between items-center lg:w-[100%] h-[62%] lg:h-[100%] p-7 lg:px- lg:py-3">
          <p className="font-black text-base tracking-[0.02em] text-[#48556a] ">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="text-sm tracking-[0.02em] font-medium text-[#6d7f97] ">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete
          </p>
        </div>
        {/* <Bio /> */}
        {/* <ShareComponentMobile /> */}
        {defaultState ? <Bio /> : <ShareComponentMobile />}
      </main>
      <button
        onClick={() => {
          setDefaultState(true);

          if (defaultState) {
            setDefaultState(false);
          }
        }}
        className="border-8 p-2"
      >
        Press me
      </button>
    </>
  );
}

export default App;
