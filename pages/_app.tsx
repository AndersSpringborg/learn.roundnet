import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
