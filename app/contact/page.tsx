import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden text-gray-800">
      <header className="relative flex flex-col justify-center items-center h-48 text-center space-y-6 z-10">
        <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 animate-fadeIn">
          Contact
        </h1>
      </header>

      <main className="relative z-10 w-full max-w-5xl mx-auto space-y-12 px-6 animate-fadeInScroll">
        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg shadow-gray-500 bg-white transition-shadow duration-300 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:douglasbagambe4@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                alt="Email"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/douglasbagambe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://twitter.com/realdyson_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
                alt="Twitter"
              />
            </a>
            <a
              href="https://warpcast.com/realdyson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Warpcast-9932CC?style=for-the-badge&logo=warp&logoColor=white"
                alt="Warpcast"
              />
            </a>
          </div>
        </section>
      </main>

      <div className="absolute inset-0 overflow-hidden">
        <div className="w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-20 absolute top-10 left-10"></div>
        <div className="w-96 h-96 bg-gray-300 rounded-full blur-3xl opacity-20 absolute bottom-20 right-10"></div>
      </div>
    </div>
  );
};

export default Contact;
