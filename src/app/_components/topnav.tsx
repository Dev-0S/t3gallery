import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { UploadButton } from '@uploadthing/react'


export default function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b border-slate-950 p-4 text-xl font-semibold fixed top-0 bg-transparent backdrop-blur-md z-50">

        <div>
          Stealth
        </div>
  
        <div className="flex flex-row gap-4">

            <SignedOut>

                <SignInButton/>
                
            </SignedOut>
            
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    );
  }
  