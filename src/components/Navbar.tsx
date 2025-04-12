"use client";
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4 font-pixelated">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Save the Chrome Dino</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/funding" className="hover:underline">Funding</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

