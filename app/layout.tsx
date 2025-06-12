import type React from "react"
'use client';

import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/layout/LoadingScreen'
import { metadata } from "@/components/layout/Metadata"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if it's the user's first visit using sessionStorage
    const isFirstTime = sessionStorage.getItem('hasVisitedBefore') === null;
    setIsFirstVisit(isFirstTime);
    
    if (isFirstTime) {
      // Set flag in sessionStorage to indicate user has visited
      sessionStorage.setItem('hasVisitedBefore', 'true');
    } else {
      // If not first visit, skip loading screen
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Show loading screen only on first visit
  const showLoadingScreen = isFirstVisit && isLoading;

  return (
    <html lang="en">
      <body className={inter.className}>
        {showLoadingScreen && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <div style={{ visibility: showLoadingScreen ? 'hidden' : 'visible' }}>
        <Analytics/> 
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
