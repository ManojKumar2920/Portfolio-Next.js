import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "@/components/NavBar/Nav";
import TopNav from "@/components/NavBar/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s - Manoj',
    default: 'Manoj Kumar',
  },
  description: "I'm a Software Engineer and Data Enthusiast based in Tamilnadu, India. I'm passionate about building impactful and innovative tech solutions and leveraging data to drive impactful solutions and making a difference through innovative tech.",
  keywords: ["manoj kumar", "manojkumar", "software engineer", "manoj kumar software engineer", "manojkumar software engineer", "swe", "frontend developer", "gdsc lead", "coderscave", "full stack developer"],
  url: "/",
  image: "/meta.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Nav />
          <TopNav />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
