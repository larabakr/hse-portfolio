import { FC, useEffect } from "react";
import Head from "next/head";

const Layout: FC<any> = ({ children }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", (): void => {
          navigator.serviceWorker.register("/sw.js").then(
            (registration): void => {
              console.log(
                "Service Worker registration successful with scope: ",
                registration.scope
              );
            },
            (err): void => {
              console.log("Service Worker registration failed: ", err);
            }
          );
        });
    }
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="./favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#3c0043" />
        <meta name="description" content="Hussein Mohammed's portfolio" />
        <title>Hussein Mohammed | Voice Actor</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
