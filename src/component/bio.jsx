import profilePicture from "../assets/avatar-michelle.jpg";
import shareButton from "../assets/icon-share.svg";

const Bio = ({ changeValue }) => {
  // const [defaultState, setDefaultState] = useState(false);
  {
    /* ALgorithm to change the state of a button component, upon onclick function new return compoent gets added */
  }

  // let valueOfDefaultState = defaultState.valueOf();
  // console.log(valueOfDefaultState);

  // if (defaultState) {
  //   console.log("the state is true");
  //   return <>{/* <ShareComponent /> */}</>;
  // }

  return (
    <>
      <section className="flex items-center justify-between w-[100%] lg:w-[100%] px-6 pb-4 text-[#48556a] ">
        <img
          className="w-[3rem] lg:w-[2rem] rounded-[2rem]"
          src={profilePicture}
          alt=""
        />
        <div className="relative right-2 lg:text-sm lg:right-11">
          <p className="font-extrabold">Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
        <button
          className="shareButton flex justify-center items-center rounded-full w-[2.2rem] h-[2.2rem]"
          onClick={() => {
            changeValue();
          }}
        >
          <img
            className="w-[1.2rem] relative bottom-[0.1rem]"
            src={shareButton}
            alt=""
          />
        </button>
      </section>
      {/* <ShareComponent /> */}
    </>
  );
};

export default Bio;
