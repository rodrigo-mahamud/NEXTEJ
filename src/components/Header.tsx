import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
   return (
      <header className='border-b bg-card'>
         <div className='container mx-auto flex h-16 items-center px-4'>
            <nav className='flex items-center space-x-4 lg:space-x-6'>
               <Button variant='link' asChild>
                  <Link href='/'>Inicio</Link>
               </Button>
               <Button variant='link' asChild>
                  <Link href='/blog'>blog</Link>
               </Button>
               <Button variant='link' asChild>
                  <Link href='/dashboard'>dashboard</Link>
               </Button>
            </nav>
            <div className='ml-auto'>
               <ModeToggle />
            </div>
         </div>
      </header>
   );
}
