import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import TopNav from './_components/topnav';
import SideNav from './_components/sidenav';

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Stealth",
  description: "Stealth",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {children: React.ReactNode; }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${GeistSans.variable} flex flex-col gap-4`}>
          <TopNav/>
          <div className="flex pt-16">
            <SideNav />
            <main className="ml-64 flex-1 p-8">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
