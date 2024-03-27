import "./globals.css";
import Navbar from "./components/navbar";
import { roboto_slab } from "../../public/fonts";
import ThreeDFondo from "./components/ThreeDFondo";

export const metadata = {
  title: "Pablo Martinez",
  description: "Portfolio Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${roboto_slab.className} antialiased bg-primary  `}>
          {/* <ThreeDFondo /> */}

          <div className="flex h-screen flex-col md:max-w-[80%] md:justify-center md:mx-auto md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <Navbar />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
