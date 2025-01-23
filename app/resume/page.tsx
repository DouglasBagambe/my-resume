// resume/page.tsx
import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden text-gray-800">
      <header className="relative flex flex-col justify-center items-center h-48 text-center space-y-6 z-10">
        <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 animate-fadeIn">
          Resume
        </h1>
      </header>

      <main className="relative z-10 w-full max-w-5xl mx-auto space-y-12 px-6 animate-fadeInScroll">
        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Capability Statement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I am a highly skilled professional with extensive expertise in
            Blockchain and Web3 technologies, specializing in Artificial
            Intelligence (AI), Machine Learning (ML), and decentralized systems.
            As a lead Web3 practitioner in Uganda, I have developed numerous
            decentralized applications (dApps) with a particular focus on the
            Solana ecosystem.
          </p>
          <div className="text-gray-600 leading-relaxed mt-4">
            <strong>Technical Expertise:</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Blockchain Platforms: Ethereum, Polkadot, Solana</li>
              <li>Smart Contract Languages: Solidity, Rust</li>
              <li>
                Programming Languages: Python, Java, C++, C#, JavaScript, PHP,
                Kotlin, React, Dart
              </li>
              <li>Web Technologies: HTML, CSS, Node.js</li>
              <li>Backend Technologies: Node.js, Express</li>
              <li>Embedded Systems Integration</li>
            </ul>
          </div>
          <div className="text-gray-600 leading-relaxed mt-4">
            <strong>Key Strengths:</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Advanced dApp development</li>
              <li>Tokenization and DeFi solutions</li>
              <li>Machine learning model development</li>
              <li>Neural network and automation systems</li>
              <li>Ethical hacking</li>
              <li>High-performance application design</li>
            </ul>
          </div>
          <div className="text-gray-600 leading-relaxed mt-4">
            <strong>Specialized Skills:</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Solana blockchain development</li>
              <li>Rust programming for blockchain and systems</li>
              <li>Cross-platform application development</li>
              <li>Hardware-software integration</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4">
            I am a strong communicator with the ability to work independently or
            collaboratively, consistently delivering high-quality technical
            solutions across web, mobile, and embedded platforms.
          </p>
        </section>

        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Education Background
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="border p-4 text-left">Period</th>
                  <th className="border p-4 text-left">Institution</th>
                  <th className="border p-4 text-left">Award</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border p-4">01/2022 - Present</td>
                  <td className="border p-4">Makerere University</td>
                  <td className="border p-4">
                    Bachelor of Science in Software Engineering
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border p-4">2019–2020</td>
                  <td className="border p-4">Ntare School</td>
                  <td className="border p-4">
                    Uganda Advanced Certificate of Education
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border p-4">2015–2018</td>
                  <td className="border p-4">Namirembe Hillside High School</td>
                  <td className="border p-4">
                    Uganda Certificate of Education
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border p-4">2008–2014</td>
                  <td className="border p-4">St. Aloysius Primary School</td>
                  <td className="border p-4">Primary Leaving Examinations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Competences, Skills, and Abilities
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li>
              <strong>Advanced Computer Skills:</strong> Proficient in MS Word,
              Excel, PowerPoint, and LaTeX. Comfortable with a wide range of
              productivity and data management tools.
            </li>
            <li>
              <strong>Programming Expertise:</strong> Strong skills in web and
              mobile development using programming languages including Python,
              Java, C++, JavaScript, C#, PHP, HTML, CSS, Kotlin, Dart, Solidity,
              Rust, React, and more. Experienced in Blockchain development with
              Solidity, Rust, and Web3 technologies.
            </li>
            <li>
              <strong>Machine Learning and AI:</strong> Proficient in developing
              machine learning models, neural networks, and AI-driven solutions.
              Hands-on experience with both personal and client-oriented
              projects, including advanced systems like language audio
              translation AI and behavioral monitoring systems.
            </li>
            <li>
              <strong>Blockchain and Web3 Development:</strong> Advanced
              expertise in creating decentralized applications (dApps), smart
              contracts, and blockchain development across Ethereum, Polkadot,
              and Solana ecosystems. Developed multiple high-impact projects
              including a Solana-based crowdfunding dApp and an Ethereum/Base
              crowdfunding platform, alongside numerous other blockchain
              solutions with expertise in NFT marketplaces and DeFi
              applications.
            </li>
            <li>
              <strong>Ethical Hacking:</strong> Well-versed in ethical hacking
              practices, demonstrated by success in competitions such as PICO
              CTF, where I ranked third nationally in Uganda in 2023.
            </li>
            <li>
              <strong>Numerical and Analytical Abilities:</strong> Strong
              quantitative skills, capable of analyzing and interpreting complex
              datasets and applying logical problem-solving techniques to
              generate actionable insights.
            </li>
            <li>
              <strong>Communication Skills:</strong> Clear and concise
              communicator, both written and verbal. Skilled at presenting
              technical concepts to non-technical stakeholders.
            </li>
            <li>
              <strong>Interpersonal Skills:</strong> Collaborative team player
              with the ability to build strong working relationships, adapt to
              diverse environments, and contribute to the success of
              cross-functional teams.
            </li>
            <li>
              <strong>Teamwork and Collaboration:</strong> Demonstrated ability
              to work effectively in both independent and team settings,
              contributing to project success through active collaboration and
              shared problem-solving.
            </li>
            <li>
              <strong>Adaptability and Learning:</strong> Eager to learn and
              quickly adapt to emerging technologies, with a proactive approach
              to self-improvement and professional development.
            </li>
          </ul>
        </section>

        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Languages Spoken
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li>Fluent in English</li>
            <li>Fluent in Runyankole-Rukiga</li>
            <li>Fluent in Luganda</li>
            <li>Good at Kiswahili</li>
            <li>Currently learning Japanese</li>
          </ul>
        </section>

        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Interests and Hobbies
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li>
              Passionate about coding and programming, constantly exploring new
              technologies and development techniques.
            </li>
            <li>
              Enjoy playing chess, which enhances my strategic thinking and
              problem-solving abilities.
            </li>
            <li>
              Enthusiastic about learning new skills, ideas, and concepts, with
              a particular interest in emerging technologies like AI,
              Blockchain, and Web3.
            </li>
          </ul>
        </section>

        <section className="glass bg-opacity-90 p-8 rounded-lg shadow-lg bg-white transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">References</h2>
          <ul className="list-none space-y-4 text-gray-600">
            <li>
              <strong>Mr. Tindizirarira Silver:</strong> Principal Inspector |
              Ministry of Local Government | Workers House, Plot 1 Pilkington
              Road Kampala | Email: tindis2013@gmail.com
            </li>
            <li>
              <strong>Mr. Mujulizi Keith:</strong> Retail Supervisor | Airtel
              Service Centre Kiboga | Email: mujulizikth68@gmail.com
            </li>
          </ul>
        </section>
      </main>

      <div className="absolute inset-0 overflow-hidden">
        <div className="w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-20 absolute top-10 left-10"></div>
        <div className="w-96 h-96 bg-gray-300 rounded-full blur-3xl opacity-20 absolute bottom-20 right-10"></div>
      </div>
    </div>
  );
};

export default Resume;
