import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { HoverProvider  } from "@/context/HoverContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HoverProvider>
      <Component {...pageProps} />
    </HoverProvider>);
}
