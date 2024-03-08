import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pablo Martinez",
  description: "Portfolio Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64" >
            <Navbar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12" >{children}
          </div>
        </div>
      </body>
    </html>
  );
}
