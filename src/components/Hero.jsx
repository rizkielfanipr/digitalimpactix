import { FeatureList } from "./FeatureCard";

const Hero = () => {
  return (
    <>
      <div className="hero bg-gradient-to-r from-[#500073] to-[#9b4d96] min-h-[120vh] relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#500073] opacity-20"></div>

        {/* Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#500073] opacity-30 transform -translate-x-1/2 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#9b4d96] opacity-40 transform translate-x-1/2 animate-pulse"></div>

        {/* Triangles */}
        <div className="absolute top-1/2 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-[#500073] opacity-30"></div>
        <div className="absolute bottom-1/3 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-[#9b4d96] opacity-30"></div>

        {/* Diagonal lines */}
        <div className="absolute top-1/4 left-0 w-64 h-1 bg-[#9b4d96] opacity-25 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-1 bg-[#500073] opacity-25 transform -rotate-45"></div>

        <div className="hero-content text-center relative z-10">
          <div className="max-w-4xl mx-auto w-full px-4">
            <h1 className="text-2xl sm:text-5xl font-bold font-poppins text-white drop-shadow-lg">
              Bangun Bisnis Kuat dengan Website Keren, Harga Terjangkau!
            </h1>
            <p className="py-4 text-sm font-poppins sm:text-base text-white drop-shadow-md">
              Tingkatkan visibilitas dan kepercayaan bisnis Anda dengan website yang dirancang khusus untuk
              kebutuhan Anda. Solusi terjangkau untuk kesuksesan jangka panjang.
            </p>
            <button className="btn btn-primary border-none text-white bg-[#500073] px-6 py-3 text-sm sm:text-base rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:bg-[#9b4d96]">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      {/* Section "Kenapa Memilih Kami?" */}
      <section className="relative -mt-32 font-poppins">
        <div className="max-w-6xl mx-auto bg-white border rounded-lg p-8 relative z-20">
          <h2 className="text-2xl sm:text-4xl font-bold text-center font-poppins text-[#500073] mb-6">
            Kenapa Memilih Kami?
          </h2>
          {/* Gunakan FeatureList */}
          <FeatureList />
        </div>
      </section>
    </>
  );
};

export default Hero;
