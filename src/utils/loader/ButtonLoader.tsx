import { Circles } from "react-loader-spinner";

const ButtonLoader = () => {
  return (
    <Circles
      height="35"
      width="35"
      color="#ffffff"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default ButtonLoader;
