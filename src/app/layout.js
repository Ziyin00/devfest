import {  Montserrat_Alternates } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const montserrat_alternates = Montserrat_Alternates({
  variable: "--font-montserrat_alternates",
  subsets: ["latin"],
  weight: ["100", "200","300","400","500","600","700","800","900"],
});

export const metadata = {
  title: "Tech Fest 2025",
  description: "Developed by Ziyin Ab.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat_alternates.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
