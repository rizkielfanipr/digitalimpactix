const Contact = () => {
    return (
      <section className="font-poppins py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Bagian Kiri: Formulir */}
          <div className="max-w-lg w-full p-8 rounded-lg flex flex-col items-start border border-gray-200 mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-left text-[#500073] mb-6">
              Hubungi Kami
            </h2>
            <form className="space-y-4 flex flex-col w-full">
              {/* Nama */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Nama</span>
                </div>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="input input-bordered border-gray-300 text-sm w-full"
                />
              </label>
  
              {/* Email */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="input input-bordered border-gray-300 text-sm w-full"
                />
              </label>
  
              {/* Topik */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Topik</span>
                </div>
                <input
                  type="text"
                  placeholder="Masukkan topik pesan"
                  className="input input-bordered border-gray-300 text-sm w-full"
                />
              </label>
  
              {/* Isi Pesan */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Isi Pesan</span>
                </div>
                <textarea
                  rows="4"
                  placeholder="Tulis pesan Anda di sini"
                  className="input input-bordered border-gray-300 text-sm w-full"
                ></textarea>
              </label>
  
              {/* Tombol Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#500073] text-white font-semibold rounded-lg hover:bg-[#6a1f9c] transition-colors duration-300"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
  
          {/* Bagian Kanan: Gambar */}
          <div className="w-full lg:w-1/2">
            <img
              src="/hubungi-kami.png"
              alt="Hubungi Kami"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  