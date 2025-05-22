import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiesPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Cookie Szabályzat</h1>

          <div className="prose prose-blue max-w-none bg-white p-8 rounded-lg shadow-md">
            <p className="lead">
              Ez a Cookie Szabályzat elmagyarázza, hogyan használja a "Zeltrovia" a cookie-kat és hasonló technológiákat
              az Ön felismerésére, amikor meglátogatja weboldalunkat. Elmagyarázza, hogy mik ezek a technológiák és
              miért használjuk őket, valamint az Ön jogait ezek használatának ellenőrzésére.
            </p>

            <h2>Mik azok a cookie-k?</h2>
            <p>
              A cookie-k kis szöveges fájlok, amelyeket a számítógépére vagy mobileszközére helyeznek, amikor meglátogat
              egy weboldalt. A cookie-kat széles körben használják a weboldal tulajdonosok a weboldal működtetésére vagy
              hatékonyabb működésre, valamint információk szolgáltatására.
            </p>

            <h2>Hogyan használjuk a cookie-kat?</h2>
            <p>
              Különböző okokból használunk cookie-kat, amelyeket alább részletezünk. Sajnos a legtöbb esetben nincsenek
              szabványos lehetőségek a cookie-k letiltására anélkül, hogy teljesen letiltanánk azokat a funkciókat és
              szolgáltatásokat, amelyeket hozzáadnak ehhez a weboldalhoz. Javasoljuk, hogy hagyja bekapcsolva az összes
              cookie-t, ha nem biztos benne, hogy szüksége van-e rájuk, mivel előfordulhat, hogy szükségesek az Ön által
              használt szolgáltatás nyújtásához.
            </p>

            <h2>Az általunk használt cookie-k típusai</h2>

            <h3>Szükséges cookie-k</h3>
            <p>
              Ezek a cookie-k szükségesek a weboldal funkcionalitásának biztosításához, és nem kapcsolhatók ki a
              rendszereinkben. Ezeket általában csak az Ön által végrehajtott olyan műveletekre válaszul állítjuk be,
              amelyek szolgáltatás kérésnek minősülnek, például az adatvédelmi beállítások beállítása, bejelentkezés
              vagy űrlapok kitöltése. Beállíthatja böngészőjét, hogy blokkolja ezeket a cookie-kat, de a webhely egyes
              részei nem fognak működni.
            </p>

            <h3>Analitikai cookie-k</h3>
            <p>
              Ezek a cookie-k lehetővé teszik számunkra a látogatások és forgalmi források számolását, hogy mérhessük és
              javíthassuk weboldalunk teljesítményét. Segítenek nekünk megtudni, hogy mely oldalak a legnépszerűbbek és
              legkevésbé népszerűek, és látni, hogyan mozognak a látogatók a weboldalon. Az ezek a cookie-k által
              gyűjtött összes információ összesített, és így névtelen.
            </p>

            <h3>Funkcionális cookie-k</h3>
            <p>
              Ezek a cookie-k lehetővé teszik a weboldal számára, hogy bővített funkcionalitást és személyre szabást
              biztosítson. Ezeket mi vagy olyan harmadik fél szolgáltatók állíthatják be, akiknek szolgáltatásait
              hozzáadtuk oldalainkhoz. Ha nem engedélyezi ezeket a cookie-kat, akkor előfordulhat, hogy ezek a
              szolgáltatások nem működnek megfelelően.
            </p>

            <h2>Hogyan kezelheti a cookie-kat</h2>
            <p>
              Beállíthatja böngészőjét, hogy ne fogadjon el cookie-kat, és az alábbi weboldal elmondja, hogyan
              távolíthatja el a cookie-kat a böngészőjéből. Azonban bizonyos esetekben weboldalunk egyes funkciói nem
              működhetnek ennek eredményeként.
            </p>

            <h2>Harmadik féltől származó cookie-k</h2>
            <p>
              Bizonyos speciális esetekben megbízható harmadik felek által biztosított cookie-kat is használunk. A
              következő szakasz részletezi, hogy milyen harmadik féltől származó cookie-kkal találkozhat ezen a
              weboldalon keresztül.
            </p>
            <ul>
              <li>
                Ez a weboldal a Google Analytics-et használja, amely az egyik legszélesebb körben használt és megbízható
                analitikai megoldás az interneten, hogy segítsen megérteni, hogyan használja a weboldalt, és milyen
                módon javíthatjuk az élményét.
              </li>
              <li>
                Szintén használhatunk közösségi média gombokat és/vagy plugineket ezen a weboldalon, amelyek lehetővé
                teszik, hogy különböző módokon kapcsolódjon közösségi hálózatához.
              </li>
            </ul>

            <h2>További információ</h2>
            <p>
              Reméljük, hogy ez tisztázta a dolgokat az Ön számára, és ahogy korábban említettük, ha van valami, ami
              miatt nem biztos benne, hogy szüksége van-e rá vagy sem, általában biztonságosabb a cookie-kat bekapcsolva
              hagyni arra az esetre, ha azok interakcióba lépnek weboldalunk egyik funkciójával, amelyet Ön használ.
            </p>
            <p>
              Ha azonban még mindig további információkat keres, kapcsolatba léphet velünk az egyik preferált
              kapcsolattartási módszerünkön keresztül:
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
