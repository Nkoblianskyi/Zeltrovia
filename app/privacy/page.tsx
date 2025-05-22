import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Adatvédelmi Irányelvek</h1>

          <div className="prose prose-blue max-w-none bg-white p-8 rounded-lg shadow-md">
            <p className="lead">
              Ez az Adatvédelmi Irányelv leírja, hogyan gyűjti, használja és osztja meg a "Zeltrovia" az Ön információit
              weboldalunk használata során.
            </p>

            <h2>Információgyűjtés és -felhasználás</h2>
            <p>
              Különböző típusú információkat gyűjtünk különböző célokra, hogy szolgáltatásunkat nyújthassuk és
              javíthassuk.
            </p>

            <h3>Az általunk gyűjtött adatok típusai</h3>

            <h4>Személyes adatok</h4>
            <p>
              Szolgáltatásunk használata során kérhetjük, hogy adjon meg bizonyos személyazonosításra alkalmas
              információkat, amelyeket felhasználhatunk az Önnel való kapcsolattartásra vagy az Ön azonosítására
              ("Személyes adatok"). A személyazonosításra alkalmas információk közé tartozhatnak, de nem kizárólagosan:
            </p>
            <ul>
              <li>E-mail cím</li>
              <li>Vezeték- és keresztnév</li>
              <li>Cookie-k és használati adatok</li>
            </ul>

            <h4>Használati adatok</h4>
            <p>
              Gyűjthetünk információkat arról is, hogyan érik el és használják a weboldalt ("Használati adatok"). Ezek a
              Használati adatok tartalmazhatnak olyan információkat, mint a számítógép Internet Protocol címe (pl.
              IP-cím), böngésző típusa, böngésző verziója, weboldalunk meglátogatott oldalai, a látogatás időpontja és
              dátuma, az ezeken az oldalakon töltött idő, egyedi eszközazonosítók és egyéb diagnosztikai adatok.
            </p>

            <h3>Adatfelhasználás</h3>
            <p>A "Zeltrovia" a gyűjtött adatokat különböző célokra használja:</p>
            <ul>
              <li>Szolgáltatásunk nyújtására és fenntartására</li>
              <li>Hogy értesítsük Önt szolgáltatásunk változásairól</li>
              <li>
                Hogy lehetővé tegyük az Ön számára a részvételt szolgáltatásunk interaktív funkcióiban, amikor úgy dönt
              </li>
              <li>Ügyfélszolgálat biztosítására</li>
              <li>Elemzések vagy értékes információk gyűjtésére, hogy szolgáltatásunkat javíthassuk</li>
              <li>Szolgáltatásunk használatának figyelemmel kísérésére</li>
              <li>Technikai problémák észlelésére, megelőzésére és kezelésére</li>
            </ul>

            <h2>Adattovábbítás</h2>
            <p>
              Az Ön információi, beleértve a Személyes adatokat is, továbbíthatók és tárolhatók olyan számítógépeken,
              amelyek az Ön államán, tartományán, országán vagy más kormányzati joghatóságon kívül találhatók, ahol az
              adatvédelmi törvények eltérhetnek az Ön joghatóságától.
            </p>
            <p>
              Ha Ön Magyarországon kívül tartózkodik, és úgy dönt, hogy információkat ad meg nekünk, kérjük, vegye
              figyelembe, hogy az adatokat, beleértve a Személyes adatokat is, Magyarországra továbbítjuk és ott
              dolgozzuk fel.
            </p>
            <p>
              Az Ön hozzájárulása ehhez az Adatvédelmi Irányelvhez, majd az ilyen információk benyújtása az Ön
              beleegyezését jelenti ehhez az adattovábbításhoz.
            </p>
            <p>
              A "Zeltrovia" minden ésszerűen szükséges lépést megtesz annak biztosítása érdekében, hogy adatait
              biztonságosan kezeljék ezen Adatvédelmi Irányelvnek megfelelően, és Személyes adatainak továbbítására nem
              kerül sor olyan szervezethez vagy országba, kivéve, ha megfelelő ellenőrzések vannak érvényben, beleértve
              az adatok és egyéb személyes információk biztonságát.
            </p>

            <h2>Adatközlés</h2>

            <h3>Jogi követelmények</h3>
            <p>
              A "Zeltrovia" jóhiszeműen közzéteheti Személyes adatait, ha úgy véli, hogy egy ilyen intézkedés szükséges:
            </p>
            <ul>
              <li>Jogi kötelezettség teljesítéséhez</li>
              <li>A "Zeltrovia" jogainak vagy tulajdonának védelméhez és védelméhez</li>
              <li>A szolgáltatással kapcsolatos lehetséges visszaélések megelőzéséhez vagy kivizsgálásához</li>
              <li>A szolgáltatás felhasználóinak vagy a nyilvánosság személyes biztonságának védelméhez</li>
              <li>Jogi felelősség elleni védelemhez</li>
            </ul>

            <h2>Adatbiztonság</h2>
            <p>
              Adatainak biztonsága fontos számunkra, de ne feledje, hogy az interneten keresztüli adattovábbítás vagy
              elektronikus tárolás módszerei nem 100%-ban biztonságosak. Bár arra törekszünk, hogy kereskedelmileg
              elfogadható eszközöket használjunk Személyes adatainak védelmére, nem garantálhatjuk azok abszolút
              biztonságát.
            </p>

            <h2>Szolgáltatói</h2>
            <p>
              Harmadik fél vállalatokat és magánszemélyeket alkalmazhatunk szolgáltatásunk elősegítésére, a szolgáltatás
              nevünkben történő nyújtására, szolgáltatással kapcsolatos szolgáltatások elvégzésére vagy annak
              elemzésére, hogyan használják szolgáltatásunkat.
            </p>
            <p>
              Ezeknek a harmadik feleknek csak annyi hozzáférésük van Személyes adataihoz, amennyi ezen feladatok
              elvégzéséhez szükséges. Kötelesek nem közzétenni vagy más célra felhasználni azokat.
            </p>

            <h2>Más oldalakra mutató linkek</h2>
            <p>
              Szolgáltatásunk tartalmazhat más oldalakra mutató linkeket, amelyeket nem mi üzemeltetünk. Ha egy harmadik
              fél linkjére kattint, akkor arra az oldalra irányítjuk. Határozottan javasoljuk, hogy tekintse át minden
              meglátogatott webhely adatvédelmi irányelveit.
            </p>
            <p>
              Nincs ellenőrzésünk és nem vállalunk felelősséget harmadik fél webhelyeinek vagy szolgáltatásainak
              tartalmáért, adatvédelmi irányelveiért vagy gyakorlatáért.
            </p>

            <h2>Gyermekek adatvédelme</h2>
            <p>Szolgáltatásunk nem szól 18 év alatti személyeknek ("Gyermekek").</p>
            <p>
              Nem gyűjtünk tudatosan személyazonosításra alkalmas információkat 18 év alatti személyektől. Ha Ön szülő
              vagy gyám, és tudomására jut, hogy Gyermekei Személyes adatokat adtak meg nekünk, kérjük, lépjen
              kapcsolatba velünk. Ha tudomásunkra jut, hogy Személyes adatokat gyűjtöttünk 18 év alatti gyermekektől
              szülői hozzájárulás ellenőrzése nélkül, lépéseket teszünk ezen információk eltávolítására szervereinkről.
            </p>

            <h2>Ezen adatvédelmi irányelvek változásai</h2>
            <p>
              Időről időre frissíthetjük Adatvédelmi irányelveinket. Értesítjük Önt az esetleges változásokról azáltal,
              hogy az új Adatvédelmi irányelveket ezen az oldalon közzétesszük.
            </p>
            <p>
              Javasoljuk, hogy rendszeresen tekintse át ezt az Adatvédelmi irányelvet a változásokért. Az Adatvédelmi
              irányelvek változásai akkor lépnek hatályba, amikor ezen az oldalon közzétesszük őket.
            </p>

            <h2>Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése van ezzel az Adatvédelmi irányelvvel kapcsolatban, kérjük, lépjen kapcsolatba velünk:
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
