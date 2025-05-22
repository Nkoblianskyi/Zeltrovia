import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Felelősségkizárás</h1>

          <div className="prose prose-blue max-w-none bg-white p-8 rounded-lg shadow-md">
            <p className="lead">
              Ez a felelősségkizárási nyilatkozat a Zeltrovia közösségi platform használatára vonatkozik. A weboldal
              használatával Ön elfogadja ezt a nyilatkozatot teljes egészében.
            </p>

            <h2>Közösségi Platform</h2>
            <p>
              A Zeltrovia egy közösségi platform, amely kizárólag szórakoztatási célokat szolgál. Szeretnénk
              egyértelműen hangsúlyozni a következőket:
            </p>
            <ul>
              <li>Ez egy közösségi platform, nem szerencsejáték oldal</li>
              <li>Minden játék és tevékenység a platformon teljesen ingyenes</li>
              <li>A platform nem igényel pénzügyi befektetést a felhasználóktól</li>
              <li>A platform nem biztosít lehetőséget valódi pénz nyereményre</li>
              <li>Minden virtuális tárgy, pont és eredmény nem rendelkezik valós értékkel</li>
            </ul>

            <h2>Korhatár</h2>
            <p>
              A Zeltrovia platform használata kizárólag 18 éven felüli személyek számára engedélyezett. Ez a korhatár a
              felelősségteljes használat biztosítása érdekében került meghatározásra. A weboldal használatával Ön
              megerősíti, hogy elmúlt 18 éves.
            </p>

            <h2>Információk Pontossága</h2>
            <p>
              Bár minden erőfeszítést megteszünk annak érdekében, hogy a weboldalunkon található információk pontosak
              legyenek, nem garantáljuk annak teljességét vagy pontosságát. A weboldalon található információkat
              általános tájékoztatás céljából biztosítjuk, és nem tekinthetők tanácsadásnak.
            </p>

            <h2>Külső Hivatkozások</h2>
            <p>
              Weboldalunk tartalmazhat olyan hivatkozásokat, amelyek harmadik felek weboldalaira mutatnak. Ezeknek a
              hivatkozásoknak a biztosítása kizárólag az Ön kényelme érdekében történik. Nem ellenőrizzük ezeket a
              weboldalakat, és nem vállalunk felelősséget azok tartalmáért vagy adatvédelmi gyakorlatáért.
            </p>

            <h2>Felelősség Korlátozása</h2>
            <p>
              A Zeltrovia és munkatársai nem vállalnak felelősséget semmilyen közvetlen, közvetett, véletlen,
              következményes vagy büntető kárért, amely a weboldal használatából, a weboldal használatának
              lehetetlenségéből, vagy a weboldalon található információk pontosságából vagy teljességéből ered.
            </p>

            <h2>Módosítások</h2>
            <p>
              Fenntartjuk a jogot, hogy bármikor módosítsuk ezt a felelősségkizárási nyilatkozatot. A módosításokat a
              weboldalon való közzététellel léptetjük hatályba. Az Ön felelőssége, hogy rendszeresen ellenőrizze a
              nyilatkozatot.
            </p>

            <h2>Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése van ezzel a felelősségkizárási nyilatkozattal kapcsolatban, kérjük, lépjen
              kapcsolatba velünk az alábbi elérhetőségeken:
            </p>
            <ul>
              <li>Email: team@zeltrovia.com</li>
              <li>Telefon: +36 1 415 7790</li>
              <li>Cím: Váci utca 23, Budapest, 1052</li>
            </ul>

            <p className="text-sm text-gray-600 mt-8">Utolsó frissítés: 2025. május 22.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
