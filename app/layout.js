import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export const metadata = {
  title: "Abdul Rehman | Full Stack Developer Portfolio",
  description: "Professional Full Stack Web Developer specializing in React, Next.js, Tailwind CSS, Node.js, and MongoDB. Creating stunning, high-performance web experiences with modern technologies.",
  keywords: "Full Stack Developer, Web Developer, React, Next.js, Tailwind CSS, Node.js, MongoDB, Portfolio, Abdul Rehman",
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Abdul Rehman | Full Stack Developer Portfolio",
    description: "Professional Full Stack Web Developer specializing in React, Next.js, Tailwind CSS, Node.js, and MongoDB.",
    siteName: "Abdul Rehman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman | Full Stack Developer Portfolio",
    description: "Professional Full Stack Web Developer specializing in React, Next.js, Tailwind CSS, Node.js, and MongoDB.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
