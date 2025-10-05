import Image from "next/image";

const CSReach = () => {
  return (
    <section className="w-full h-screen relative bg-[url('/images/csreach/hero.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        <Image
          src="/images/cslogoloader.png"
          alt="CS Project Series Logo"
          width={180}
          height={180}
          className="mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          CS Reach: Igniting Young Minds
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
          An initiative to introduce students to the exciting world of Computer
          Science through interactive learning, hands-on activities, and
          real-world applications.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300">
            Know More
          </button>
          <button className="px-6 py-2 bg-white hover:bg-gray-200 text-orange-600 font-semibold rounded-lg transition duration-300">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default CSReach;
