import "./App.css";
import Bio from "./component/bio";
import firstImage from "./assets/drawers.jpg";
import ShareComponentMobile from "./component/shareMobile";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BioLarge from "./component/bioL";
import ShareComponentDesktop from "./component/shareDesktop";

function App() {
  const [defaultState, setDefaultState] = useState(true);

  let defaultStateValue = defaultState.valueOf();
  console.log(defaultStateValue);

  const IsScreenSizeMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  const changeValue = () => {
    setDefaultState(!defaultState);
    /* 
      if (defaultState) {
         setDefaultState(false);
      } else {
         setDefaultState(true);
      } 
    */
  };

  function renderComponent() {
    return defaultState ? (
      <Bio changeValue={changeValue} />
    ) : (
      <ShareComponentMobile changeValue={changeValue} />
    );
  }

  return (
    <>
      <main className="main flex flex-col lg:flex-row w-[20rem] lg:w-[40rem] lg:h-[15rem] rounded-lg overflow-hidden">
        <div className="w-[100%] lg:w-[70%] h-[38%] lg:h-[100%] overflow-clip bg-cover">
          <img className="lg:h-[100%] lg:w-[] " src={firstImage} alt="" />
        </div>
        <div className="flex flex-col items-center lg:w-[100%] h-[62%] lg:h-[100%] pb-0 lg:py-3">
          <p className="font-black text-base tracking-[0.02em] text-[#48556a] mx-5 mb-3 mt-5 lg:mt-0 ">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="text-sm tracking-[0.02em] font-medium text-[#6d7f97] mb-4 mx-5 ">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete
          </p>
          {IsScreenSizeMobile ? renderComponent() : <BioLarge />}
        </div>
      </main>
    </>
  );
}

export default App;
