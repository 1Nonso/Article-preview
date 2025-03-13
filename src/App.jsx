import "./App.css";
import Bio from "./component/bio";
import firstImage from "./assets/drawers.jpg";
import ShareComponentMobile from "./component/shareMobile";

function App() {
  return (
    <>
      <main className="main flex flex-col lg:flex-row w-[20rem] lg:w-[40rem] h-[35rem] lg:h-[15rem] rounded-lg overflow-hidden">
        <div className="w-[100%] lg:w-[70%] h-[38%] lg:h-[100%] overflow-clip bg-cover">
          <img className="lg:h-[100%] lg:w-[] " src={firstImage} alt="" />
        </div>
        <div className="flex flex-col justify-between items-center lg:w-[100%] h-[62%] lg:h-[100%] p-7 lg:px- lg:py-3">
          <p className="font-bold text-base tracking-[0.02em]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="text-sm tracking-[0.02em] font-normal  ">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete
          </p>
        </div>
        <Bio />
        <ShareComponentMobile />
      </main>
    </>
  );
}

export default App;
