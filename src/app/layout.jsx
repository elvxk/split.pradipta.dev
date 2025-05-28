import { inter, ceraRoundPro } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Split Bill's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Split Bill's" />
      </head>
      <body className={`${inter} ${ceraRoundPro} antialiased bg-bg`}>
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto] mx-10">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
