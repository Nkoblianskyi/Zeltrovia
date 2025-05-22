import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Felhasználási Feltételek</h1>

          <div className="prose prose-blue max-w-none bg-white p-8 rounded-lg shadow-md">
            <p className="lead">
              Üdvözöljük a Zeltrovia közösségi platformon. Kérjük, figyelmesen olvassa el az alábbi felhasználási
              feltételeket, mielőtt használná weboldalunkat.
            </p>

            <h2>1. Elfogadás</h2>
            <p>
              A weboldal használatával Ön elfogadja, hogy betartja ezeket a feltételeket, valamint a vonatkozó
              jogszabályokat és előírásokat. Ha nem ért egyet ezekkel a feltételekkel, kérjük, ne használja
              weboldalunkat.
            </p>

            <h2>2. Módosítások</h2>
            <p>
              Fenntartjuk a jogot, hogy bármikor módosítsuk ezeket a feltételeket. A módosításokat a weboldalon való
              közzététellel léptetjük hatályba. Az Ön felelőssége, hogy rendszeresen ellenőrizze a feltételeket. A
              weboldal folyamatos használata a módosítások elfogadását jelenti.
            </p>

            <h2>3. Korhatár</h2>
            <p>
              A Zeltrovia platform használata kizárólag 18 éven felüli személyek számára engedélyezett. A weboldal
              használatával Ön megerősíti, hogy elmúlt 18 éves.
            </p>

            <h2>4. Közösségi Platform</h2>
            <p>
              A Zeltrovia egy közösségi platform, amely kizárólag szórakoztatási célokat szolgál. Minden játék és
              tevékenység a platformon teljesen ingyenes, és nem biztosít lehetőséget valódi pénz nyereményre. Minden
              virtuális tárgy, pont és eredmény kizárólag a platformon belül használható, és nem rendelkezik valós
              értékkel.
            </p>

            <h2>5. Felhasználói Fiókok</h2>
            <p>
              Egyes szolgáltatásaink használatához regisztrációra lehet szükség. Ön felelős a fiókjához kapcsolódó
              jelszó titkosságának megőrzéséért, valamint a fiókjában történő minden tevékenységért. Fenntartjuk a
              jogot, hogy bármikor, bármilyen okból letiltsunk fiókokat.
            </p>

            <h2>6. Felhasználói Magatartás</h2>
            <p>A weboldal használata során Ön vállalja, hogy nem fog:</p>
            <ul>
              <li>Jogszabályokat vagy ezeket a feltételeket megsérteni</li>
              <li>Más felhasználókat zaklatni vagy bántalmazni</li>
              <li>Hamis vagy félrevezető információkat terjeszteni</li>
              <li>A weboldal működését akadályozni vagy megzavarni</li>
              <li>Jogosulatlan hozzáférést szerezni a weboldal bármely részéhez</li>
            </ul>

            <h2>7. Szellemi Tulajdon</h2>
            <p>
              A weboldalon található összes tartalom, beleértve a szövegeket, grafikákat, logókat, ikonokat, képeket,
              hangklipeket, letöltéseket és szoftvereket, a Zeltrovia vagy licencadóinak tulajdona, és szerzői jogi,
              védjegy és egyéb szellemi tulajdonjogi törvények védelme alatt áll.
            </p>

            <h2>8. Felelősség Korlátozása</h2>
            <p>
              A Zeltrovia nem vállal felelősséget semmilyen közvetlen, közvetett, véletlen, következményes vagy büntető
              kárért, amely a weboldal használatából vagy használatának lehetetlenségéből ered.
            </p>

            <h2>9. Irányadó Jog</h2>
            <p>
              Ezekre a feltételekre és azok értelmezésére a magyar jog az irányadó, és a magyar bíróságok kizárólagos
              joghatósággal rendelkeznek minden olyan vitában, amely ezekből a feltételekből ered.
            </p>

            <h2>10. Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése van ezekkel a feltételekkel kapcsolatban, kérjük, lépjen kapcsolatba velünk az alábbi
              elérhetőségeken:
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
