// import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { roboto_slab } from "../../public/fonts";

// const roboto_slab = Roboto_Slab({ subsets: ["latin"] });
 
export const metadata = {
  title: "Pablo Martinez",
  description: "Portfolio Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_slab.className} antialiased bg-primary`} >
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
