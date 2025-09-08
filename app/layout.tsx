// app/layout.tsx
import "./globals.css"; // Tailwind + global styles (create this file if you haven't)
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "RightClikk",
  description: "RightClikk - Smart Cab Booking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  /*
    - We attach the font variables to the <html> element by adding the variable classnames.
    - We set a default font on <body> with Tailwind class "font-poppins" (you can change this).
  */
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
