import "./globals.css";
// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import Provider from "./components/Provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Indrakant - Board",
  description: "Created by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`h-full ${montserrat.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
