
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Header";
import { NotificationProvider } from "./components/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReelsPro",
  description: "All reels at one place a reelspro application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NotificationProvider>
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </NotificationProvider>
        </Providers>
      </body>
    </html>
  );
}
