import profilePicture from "../assets/avatar-michelle.jpg";
import shareButton from "../assets/icon-share.svg";

const Bio = () => {
    console.log("Summer")
  return (
    <>
      <section className="flex items-center justify-between w-[100%] lg:w-[90%] ">
        <img className="w-[3rem] rounded-[2rem]" src={profilePicture} alt="" />
        <div className="relative right-2">
          <p className="font-extrabold">Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
        <button className="shareButton flex justify-center items-center rounded-full w-[2rem] h-[2rem]">
          <img className="w-[1.2rem] relative bottom-[0.1rem]" src={shareButton} alt="" />
        </button>
      </section>
    </>
  );
};

export default Bio;
