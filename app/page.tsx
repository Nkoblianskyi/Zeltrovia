"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GamePreview from "@/components/game-preview"
import Leaderboard from "@/components/leaderboard"
import DisclaimerModal from "@/components/disclaimer-modal"

export default function Home() {
  const [showAgeVerification, setShowAgeVerification] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Tengeri Kaland</h1>
              <p className="text-xl mb-8">
                Közösségi platform a tengeri kalandok szerelmeseinek. Játssz ingyen, versenyezz barátaiddal és hódítsd
                meg a virtuális tengereket!
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black"
                onClick={() => setShowAgeVerification(true)}
              >
                Játék Indítása
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-70 h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c0c300be77cbce0bf9c9dcfd9f83a9dd.jpg-Xc4UkVUEHA5xJzGa93efXPkpA8BNRs.jpeg"
              alt="Horgász kaland"
              width={700}
              height={500}
              className="object-contain h-full"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Platformunkról</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-4">
                  Üdvözöljük a "Tengeri Kaland" közösségi platformon, ahol izgalmas tengeri kalandokban vehet részt,
                  pénzügyi kockázat nélkül.
                </p>
                <p className="text-lg mb-4">
                  Platformunk kizárólag szórakoztatási és közösségi interakció céljából jött létre. Itt versenyezhetsz
                  barátaiddal, fejlesztheted készségeidet és feljebb léphetsz a játékosok rangsorában.
                </p>
                <p className="text-lg">
                  Minden játék teljesen ingyenes a platformunkon, és nem biztosít lehetőséget valódi pénz nyereményre.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c5b0ea3449515d4c89fee5d9ae3fea9a.jpg-RmiHlD2jYBPjVc6jq5huQGIzCF26CF.jpeg"
                  alt="Öreg horgász"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Game Preview Section */}
        <GamePreview />

        {/* Player Rankings */}
        <Leaderboard />

        {/* Safety Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Biztonságos Játék</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Közösségi Platform</h3>
                  <p>Platformunk kizárólag közösségi interakció és szórakozás céljából jött létre.</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Teljesen Ingyenes</h3>
                  <p>Minden játék teljesen ingyenes a platformunkon. Nem igényelünk pénzügyi befektetést.</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Virtuális Értékek</h3>
                  <p>
                    Minden pont, jutalom és eredmény kizárólag virtuális értékkel bír, és nem váltható valódi pénzre.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Korhatár</h3>
                  <p>
                    Platformunk 18 éven felüli felhasználók számára készült. Ezt a korlátozást a felelősségteljes
                    használat biztosítása érdekében tartjuk fenn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showAgeVerification && (
        <DisclaimerModal
          onClose={() => setShowAgeVerification(false)}
          showAgeVerification={true}
          redirectPath="/game"
        />
      )}
    </div>
  )
}
