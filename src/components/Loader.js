import spinny from "../assets/spinny.gif";
import spinnies from "../assets/spinnies.gif";
import wolfy from "../assets/wolfy.gif";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={spinnies}
        alt="cool loader"
        className="w-20 h-20 md:w-96 md:h-80"
      />
    </div>
  );
};

export default Loader;
