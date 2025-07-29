import Image from "next/image";

const Loader = () => {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 rounded-full border-t-4 border-orange-500 animate-spin"></div>
      <div className="absolute inset-2 flex items-center justify-center">
        <Image
          src="/images/cslogoloader.png"
          width={100}
          height={100}
          alt="loadericon"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Loader;
