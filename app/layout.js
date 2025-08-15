import "./../styles/globals.css";

export const metadata = {
  title: "Premium Portfolio",
  description: "A premium, sleek one-page portfolio built with Next.js, Tailwind, and Framer Motion."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
