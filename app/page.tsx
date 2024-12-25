import Link from "next/link";

const Home = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden text-gray-800">
      {/* Hero Section */}
      <header className="relative flex flex-col justify-center items-center h-screen text-center space-y-6 z-10">
        <h1 className="text-5xl font-extrabold tracking-wide text-gray-900 animate-fadeIn">
          Ainamaani Douglas Bagambe
        </h1>
        <p className="text-xl text-gray-600 animate-slideUp">
          Software Engineer | Blockchain & Web3 Developer | Ethical Hacker |
          AI/ML Engineer
        </p>
        <div className="flex flex-wrap justify-center gap-8 animate-slideUpLate">
          <Link
            href="/resume"
            className="inline-block rounded-full bg-gray-900 text-white flex items-center justify-center text-lg shadow-lg hover:scale-110 hover:bg-gray-700 transition-transform duration-300"
            style={{ width: "160px", height: "140px", margin: "10px" }}
          >
            Resume
          </Link>
          <Link
            href="/work"
            className="inline-block rounded-full bg-gray-900 text-white flex items-center justify-center text-lg shadow-lg hover:scale-110 hover:bg-gray-700 transition-transform duration-300"
            style={{ width: "160px", height: "140px", margin: "10px" }}
          >
            Work
          </Link>
        </div>
      </header>

      {/* About Me Section */}
      <main
        className="relative z-10 w-full max-w-5xl mx-auto space-y-12 px-6 animate-fadeInScroll"
        style={{ marginTop: "2rem" }}
      >
        <section
          className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300"
          style={{
            boxShadow:
              "0px 5px 15px rgba(0, 0, 0, 0.1), 0px -1px 5px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I am a highly skilled professional with expertise in Blockchain,
            Web3 technologies, AI, and ethical hacking. My passion lies in
            creating innovative solutions and contributing to the ever-evolving
            tech industry.
          </p>
        </section>

        {/* Highlighted Projects Section */}
        <section
          className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300"
          style={{
            boxShadow:
              "0px 5px 15px rgba(0, 0, 0, 0.1), 0px -1px 5px rgba(0, 0, 0, 0.05)",
            marginBottom: "2rem",
          }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Highlighted Projects
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li className="hover:text-gray-900 transition-colors">
              Driver Behavior Monitoring System
            </li>
            <li className="hover:text-gray-900 transition-colors">
              MotorSphere Marketplace
            </li>
            <li className="hover:text-gray-900 transition-colors">
              Solana NFT Marketplace
            </li>
          </ul>
        </section>
      </main>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-20 absolute top-10 left-10"></div>
        <div className="w-96 h-96 bg-gray-300 rounded-full blur-3xl opacity-20 absolute bottom-20 right-10"></div>
      </div>
    </div>
  );
};

export default Home;
