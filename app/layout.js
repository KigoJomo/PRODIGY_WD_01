import "./globals.css";

export const metadata = {
  title: "PRODIGY_WD_01",
  description: "Task 1: Interactive Navigation Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
