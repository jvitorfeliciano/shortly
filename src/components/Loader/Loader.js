import { Oval } from "react-loader-spinner";

export default function Loader(size, color) {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={color}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
