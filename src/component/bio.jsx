import profilePicture from "../assets/avatar-michelle.jpg";
import shareButton from "../assets/icon-share.svg";

const Bio = () => {
    console.log("Summer")
  return (
    <>
      <section className="flex items-center">
        <img className="w-[3rem] rounded-[2rem]" src={profilePicture} alt="" />
        <div>
          <p>Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
        <button>
          <img src={shareButton} alt="" />
        </button>
      </section>
    </>
  );
};

export default Bio;
