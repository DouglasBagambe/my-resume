import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        {/* Animated nav background */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 animate-pulseSlow"></div>

        <nav className="backdrop-blur-md bg-white/80 border-b border-gray-200 py-6 px-6 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0 text-gray-800">
              Ainamaani Douglas Bagambe | RESUME
            </div>
            <div className="space-x-8">
              <Link
                href="/"
                className="relative group text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                <span>Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/resume"
                className="relative group text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                <span>Resume</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/work"
                className="relative group text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                <span>Work</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </nav>

        <main className="relative max-w-7xl mx-auto p-6 min-h-[calc(100vh-200px)]">
          <div className="animate-fadeInUp">{children}</div>
        </main>

        <footer className="relative bg-white border-t border-gray-200 py-8 mt-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-4 animate-fadeInUp">
              <a
                href="https://github.com/DouglasBagambe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                  alt="GitHub"
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
              <a href="tel:+256770919175">
                <img
                  src="https://img.shields.io/badge/Call-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                  alt="Call"
                />
              </a>
            </div>
            <p className="text-gray-500 animate-fadeInUp">
              &copy; 2026 Ainamaani Douglas Bagambe
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
