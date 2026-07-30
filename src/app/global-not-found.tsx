// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4 md:px-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "2s" }}></div>
          </div>
      
          <div className="relative z-10 text-center max-w-2xl">
            <div className="mb-8 inline-block">
              <div className="relative">
                <h1 className="text-9xl md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 leading-none">
                  404
                </h1>
                <div className="absolute inset-0 text-9xl md:text-[180px] font-black text-purple-600 opacity-20 blur-3xl">
                  404
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 mt-8">
              Página não encontrada
            </h2>

            {/* <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
              Parece que você seguiu um link quebrado ou digitou uma URL
              inválida. A página que você está procurando não existe no
              repositório.
            </p> */}
        
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 mb-8 text-left font-mono text-sm max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="text-gray-300">
                <p>
                  <span className="text-purple-400">cd</span>{" "}
                  <span className="text-orange-400">/home</span>
                </p>
                <p className="mt-1">
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-gray-400">git log</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/login"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 ease-out border border-purple-500 hover:border-purple-400">
                ← Voltar para Home
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-[#30363d]">
              <p className="text-gray-500 text-sm">
                Código de erro:{" "}
                <span className="text-purple-400 font-mono">404</span> • Recurso
                não disponível
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
