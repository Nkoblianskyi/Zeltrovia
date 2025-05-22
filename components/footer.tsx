import Link from "next/link"
import Image from "next/image"
import { Anchor } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Anchor className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Zeltrovia</span>
            </div>
            <p className="text-gray-400 mb-4">
              Közösségi platform a tengeri kalandok szerelmeseinek. Játssz ingyen, versenyezz barátaiddal.
            </p>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Zeltrovia. Minden jog fenntartva.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigáció</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Főoldal
                </Link>
              </li>
              <li>
                <Link href="/game" className="text-gray-400 hover:text-white">
                  Játék
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Jogi információk</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Felhasználási feltételek
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Adatvédelmi irányelvek
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white">
                  Cookie szabályzat
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white">
                  Felelősségkizárás
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: team@zeltrovia.com</li>
              <li className="text-gray-400">Telefon: +36 1 415 7790</li>
              <li className="text-gray-400">Cím: Váci utca 23, Budapest, 1052</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              Ez egy közösségi platform, teljesen ingyenes, nem igényel pénzügyi befektetést, nem biztosít lehetőséget
              valódi pénz nyereményre. Minden virtuális tárgy és pont nem rendelkezik valós értékkel.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-X4V5wJcne4YL8oHfFiNroxLroCKrWe.svg"
                  alt="GamCare"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-orange-hayDTdS4bEg7dXrXPvk8aYUflymYAi.webp"
                  alt="GambleAware"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_c5e56a7f-rxrYSeXEdgkZOKn4VnVmethnXTgikP.svg"
                  alt="GamStop"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-red-600 text-white font-bold text-xl px-4 py-2 rounded-lg mb-3">18+</div>
            <p>
              Ez egy közösségi platform, teljesen ingyenes, nem igényel pénzügyi befektetést, nem biztosít lehetőséget
              valódi pénz nyereményre. Minden virtuális tárgy és pont nem rendelkezik valós értékkel.
            </p>
            <p className="mt-2">A platform 18 éven felüli felhasználók számára készült.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
