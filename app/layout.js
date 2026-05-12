import { Afacad } from "next/font/google";
import localFont from "next/font/local";

import "./styles.scss";
import Link from "next/link";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

const ethereal = localFont({
  variable: "--font-ethereal",
  src: [
    {
      path: "../public/fonts/EtherealDemo-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/EtherealDemo-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Enough",
  description: "Enough app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} ${ethereal.variable}`}>
        <div className="main">
          <div className="global-nav">
            <Link href="/">
              <h1>Enough</h1>
            </Link>
            <Link href="/" className="donate-button">
              <h2>Donate</h2>
            </Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
