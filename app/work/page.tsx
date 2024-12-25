import React from "react";

const Work: React.FC = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden text-gray-800">
      <header className="relative flex flex-col justify-center items-center h-48 text-center space-y-6 z-10">
        <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 animate-fadeIn">
          Work Experience
        </h1>
      </header>

      <main className="relative z-10 w-full max-w-5xl mx-auto space-y-12 px-6 animate-fadeInScroll">
        {/* Current Role */}
        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Current Position
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="text-xl font-semibold">AIBOS Uganda</h3>
              <p className="text-gray-500">
                Software Engineer | October 2024 - Present
              </p>
              <p>
                Working as a Web Developer and AI Engineer on WordPress projects
                such as GreenLeaf and AI initiatives involving model development
                and training, including creating a recommendation system for
                personalized e-commerce experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Current Projects
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold">
                Driver Behavior Monitoring System
              </h3>
              <p>
                An advanced machine learning and AI-driven project designed to
                monitor and analyze driver behavioral patterns thereby reducing
                road accidents caused by distracted drivers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Solana NFT Marketplace</h3>
              <p>
                Focusing on creating a seamless and efficient platform for users
                to mint, trade, and manage NFTs.
              </p>
            </div>
          </div>
        </section>

        {/* Previous Work Experience */}
        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Previous Experience
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold">
                Freelance Web3 Developer
              </h3>
              <p className="text-gray-500">March 2024 - May 2024</p>
              <p>
                Designed and implemented a smart contract in Solidity to
                facilitate USDT payments for purchasing job resume templates,
                granting users access to a GitLab repository upon successful
                payment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">New Wave Technologies</h3>
              <p>
                Worked on MOTORSPHERE, an E-commerce application for buying and
                selling motor vehicles with features for ordering mechanical
                services and booking appointments with mechanics.
              </p>
            </div>
          </div>
        </section>

        {/* Machine Learning & Security */}
        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Machine Learning & Security Projects
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold">
                Machine Learning Projects
              </h3>
              <p>
                Contributed to several projects including an advanced language
                audio translator AI. Participated in the Total Energies
                rEvolution Hackathon and various AI/ML-driven systems
                development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ethical Hacking</h3>
              <p>
                Ranked third in Uganda during the PICO CTF April 2023
                competition, demonstrating proficiency in identifying and
                exploiting system vulnerabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Data Clerk Experience */}
        <section
          className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300"
          style={{ margin: "20px 0" }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Data Collection Experience
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold">
                Uganda Bureau of Statistics
              </h3>
              <p className="text-gray-500">Data Clerk | May 2021</p>
              <p>
                Collected primary data from livestock owners in Rwampara
                District during the National Livestock Census, ensuring accurate
                and timely submission to local government offices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ministry of Health</h3>
              <p className="text-gray-500">Data Clerk | August 14-19, 2020</p>
              <p>
                Utilized the Electronic Data Management Information System
                (EDMIS) to collect demographic data and assisted in mosquito net
                distribution under the &quot;Under the Net&quot; program.
              </p>
            </div>
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

export default Work;
