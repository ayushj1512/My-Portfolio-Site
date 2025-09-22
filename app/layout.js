import "./../styles/globals.css";
import ToggleCursor from "././(site)/components/ToggleCursor";

export const metadata = {
  title: "Ayush Juneja | Full Stack Developer & Flutter Enthusiast",
  description:
    "Ayush Juneja – Full Stack Developer, Flutter developer, AI tools explorer, and Gen Z tech innovator. Crafting modern, sleek digital experiences with Next.js, Tailwind, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased selection:bg-accent/30 selection:text-white">
        {/* Client-only ToggleCursor */}
        <ToggleCursor />
        {children}
      </body>
    </html>
  );
}
