import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import {Toaster} from "react-hot-toast";
import { UserProvider } from "@/app/hooks/useUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Good Eats",
  description: "Good Eats is a recipe sharing platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Toaster />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
