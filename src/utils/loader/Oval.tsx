import { Oval as Loader } from "react-loader-spinner";

const Oval = () => {
  return (
    <Loader
      height={100}
      width={100}
      color="rgb(197, 157, 95)"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="rgb(197, 157, 95,0.4)"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Oval;
