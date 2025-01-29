import { Fira_Code, Fredoka, Koulen } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

const firacode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SCCO.P",
  description: "Fake online shop for sci-fi products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firacode.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Separator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
