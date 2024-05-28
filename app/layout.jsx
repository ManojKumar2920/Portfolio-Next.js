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
  description: "A Passionate Software Engineer from Tamilnadu, India",
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
