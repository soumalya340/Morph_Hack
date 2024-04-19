"use client";

import "./globals.css";

import {
  ThirdwebProvider,
 
  phantomWallet,

} from "@thirdweb-dev/react";
import Nav from "@/components/common/Nav";
import { ProposalProvider } from "@/ContextProviders/ProposalProvider";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { IoClose } from "react-icons/io5";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Dream Starter</title>
      <ProposalProvider>
        <ThirdwebProvider
          activeChain="mumbai"
          clientId="5be238b6d90aced04e9db46730f231da"
          supportedWallets={[
           
            phantomWallet(),
          ]}
        >
          <SnackbarProvider
            action={(snackbarId) => (
              <button onClick={() => closeSnackbar(snackbarId)}>
                <IoClose className="h-6 w-6 pr-2 text-xl" />
              </button>
            )}
          >
            <body className="font-raleway text-sm text-gray-800">
              <div>{children}</div>
            </body>
          </SnackbarProvider>
        </ThirdwebProvider>
      </ProposalProvider>
    </html>
  );
}
