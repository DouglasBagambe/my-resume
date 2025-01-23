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
              <h3 className="text-xl font-semibold">
                HCISS (Health Blockchain Security Services)
              </h3>
              <p className="text-gray-500">
                Blockchain Developer | January 2025 - Present
              </p>
              <p>
                Developing advanced blockchain cybersecurity analytics
                solutions, focusing on creating secure, decentralized systems
                for threat detection, data encryption, and comprehensive
                security ecosystems. Leveraging blockchain technology to enhance
                data integrity, privacy, and proactive threat prevention across
                digital platforms.
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
                Catoff Integration Project
              </h3>
              <p className="text-gray-500">
                Freelance Web3 Developer | January 2025 (Short-term Contract)
              </p>
              <p>
                Developed a specialized blockchain(solana) integration project,
                demonstrating expertise in decentralized technologies and custom
                solution design.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">AIBOS Uganda</h3>
              <p className="text-gray-500">
                Software Engineer | October 2024 - January 2025
              </p>
              <p>
                Worked as a Web Developer and AI Engineer, developing WordPress
                projects like GreenLeaf and AI initiatives, including a
                recommendation system for personalized e-commerce experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Freelance Web3 Developer
              </h3>
              <p className="text-gray-500">
                Ukraine Remote Project | March 2024 - May 2024
              </p>
              <p>
                Designed and implemented a Solidity smart contract for a crypto
                payment system, creating a secure USDT payment mechanism for job
                resume template access via GitLab repository.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">New Wave Technologies</h3>
              <p>
                Working on various projects, most recently a motor trading
                marketplace, (MOTORSPHERE). An E-commerce application where
                users can buy and sell motor vehicles and can also be able to
                order for mechanical services on the go or book appointments
                with the best mechanics and mechanical companies in the country.
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
                I have contributed to several machine learning projects, both
                personal and client-oriented. Notable among these is an advanced
                language audio translator AI, which has been highly successful
                in translating audio input across different languages. I have
                also participated in several hackathons, including the Total
                Energies rEvolution Hackathon, and have contributed to the
                development of various AI/ML-driven systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ethical Hacking</h3>
              <p>
                I am proficient in ethical hacking, a skill demonstrated through
                my participation in PICO CTF, where my team and I ranked third
                in Uganda during the April 2023 competition. This experience
                highlights my ability to identify and exploit vulnerabilities in
                systems, ensuring they are secure and resilient to attacks.
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
                I was responsible for collecting primary data from livestock
                owners in Rwampara District, focusing on livestock-related
                information. Using interview guide forms, I gathered and
                processed data, ensuring accurate and timely submission to local
                government offices at the close of each business day.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ministry of Health</h3>
              <p className="text-gray-500">
                Data Clerk | 14/08/2020 – 19/08/2020
              </p>
              <p>
                In this role, I utilized the Electronic Data Management
                Information System (EDMIS) to collect demographic data from
                households. I also assisted in the distribution of mosquito
                nets, ensuring that distribution was based on parameters
                determined by the system for effective targeting.
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
