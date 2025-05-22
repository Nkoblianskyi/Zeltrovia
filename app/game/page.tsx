"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DisclaimerModal from "@/components/disclaimer-modal"
import { Fish, Waves, BirdIcon as Seagull, SnailIcon as Crab, Shell, Loader2 } from "lucide-react"

// A mezőn található elemek típusai
type ItemType = "hal" | "nagyhal" | "rák" | "hullám" | "sirály" | "kagyló"

// Játékmező cellájának interfésze
interface Cell {
  id: number
  revealed: boolean
  type: ItemType
  points: number
  row: number
  col: number
  animationDelay: number
}

// Játék konfigurációs interfésze
interface GameConfig {
  rows: number
  cols: number
  itemDistribution: Record<ItemType, number>
  pointsMap: Record<ItemType, number>
  linePoints: Record<string, number>
}

// Nyerő vonal interfésze
interface WinningLine {
  type: "row" | "col" | "diag"
  index: number
  points: number
  cells: number[]
}

export default function GamePage() {
  // Játék konfiguráció
  const gameConfig: GameConfig = {
    rows: 5,
    cols: 5,
    itemDistribution: {
      hal: 5,
      nagyhal: 3,
      rák: 2,
      hullám: 2,
      sirály: 3,
      kagyló: 10,
    },
    pointsMap: {
      hal: 50,
      nagyhal: 100,
      rák: 25,
      hullám: -50,
      sirály: -25,
      kagyló: 10,
    },
    linePoints: {
      "hal-3": 150, // 3 hal egy sorban
      "hal-4": 300, // 4 hal egy sorban
      "hal-5": 1000, // 5 hal egy sorban
      "nagyhal-3": 300, // 3 nagyhal egy sorban
      "nagyhal-4": 600, // 4 nagyhal egy sorban
      "nagyhal-5": 2000, // 5 nagyhal egy sorban
      "rák-3": 75, // 3 rák egy sorban
      "rák-4": 150, // 4 rák egy sorban
      "rák-5": 500, // 5 rák egy sorban
      "kagyló-3": 30, // 3 kagyló egy sorban
      "kagyló-4": 60, // 4 kagyló egy sorban
      "kagyló-5": 200, // 5 kagyló egy sorban
    },
  }

  const [score, setScore] = useState(0)
  const [cells, setCells] = useState<Cell[]>([])
  const [gameOver, setGameOver] = useState(false)
  const [remainingMoves, setRemainingMoves] = useState(10)
  const [isAnimating, setIsAnimating] = useState(false)
  const [lastPointsChange, setLastPointsChange] = useState(0)
  const [winningLines, setWinningLines] = useState<WinningLine[]>([])
  const [showWinningLines, setShowWinningLines] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<"idle" | "revealing" | "revealed" | "resetting" | "awarding">(
    "idle",
  )
  const [buttonText, setButtonText] = useState("Horgászat!")

  // Játék inicializálása
  useEffect(() => {
    initializeGame()
  }, [])

  // Új játékkör előkészítése
  const prepareNewRound = () => {
    // Új cellák generálása, de a pontszám és a hátralévő lépések megtartása
    const totalCells = gameConfig.rows * gameConfig.cols

    // Létrehozunk egy tömböt az összes elem típussal a megadott eloszlás szerint
    let items: ItemType[] = []
    Object.entries(gameConfig.itemDistribution).forEach(([type, count]) => {
      for (let i = 0; i < count; i++) {
        items.push(type as ItemType)
      }
    })

    // Ha kevesebb elem van, mint cella, üres cellákat adunk hozzá
    while (items.length < totalCells) {
      items.push("kagyló")
    }

    // Ha több elem van, mint cella, levágjuk a tömböt
    if (items.length > totalCells) {
      items = items.slice(0, totalCells)
    }

    // Megkeverjük az elemek tömbjét
    items = shuffleArray(items)

    // Létrehozzuk a cellákat
    const newCells: Cell[] = []
    for (let row = 0; row < gameConfig.rows; row++) {
      for (let col = 0; col < gameConfig.cols; col++) {
        const index = row * gameConfig.cols + col
        // Véletlenszerű késleltetés az animációhoz
        const animationDelay = Math.random() * 0.5 // 0-0.5 másodperc közötti késleltetés
        newCells.push({
          id: index,
          revealed: false,
          type: items[index],
          points: gameConfig.pointsMap[items[index]],
          row,
          col,
          animationDelay,
        })
      }
    }

    setCells(newCells)
    setWinningLines([])
    setShowWinningLines(false)
    setLastPointsChange(0)
    setAnimationPhase("idle")
    setButtonText("Horgászat!")
  }

  // Játék inicializáló függvény
  const initializeGame = () => {
    prepareNewRound()
    setScore(0)
    setGameOver(false)
    setRemainingMoves(10)
  }

  // Új játék indítása animációval
  const startNewGame = () => {
    setIsResetting(true)
    setAnimationPhase("resetting")

    // Először minden cellát elrejtünk animációval
    const resetCells = cells.map((cell) => ({
      ...cell,
      revealed: false,
    }))
    setCells(resetCells)

    // Várunk az animáció befejezésére, majd inicializáljuk az új játékot
    setTimeout(() => {
      initializeGame()
      setIsResetting(false)
    }, 1000)
  }

  // Tömb keverő függvény
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Nyerő vonalak ellenőrzése
  const checkWinningLines = (revealedCells: Cell[]): WinningLine[] => {
    const lines: WinningLine[] = []
    const { rows, cols } = gameConfig

    // Sorok ellenőrzése
    for (let row = 0; row < rows; row++) {
      const rowCells = revealedCells.filter((cell) => cell.row === row)
      if (rowCells.length === cols) {
        // Teljes sor felfedve
        const typeCounts: Record<ItemType, number> = {
          hal: 0,
          nagyhal: 0,
          rák: 0,
          hullám: 0,
          sirály: 0,
          kagyló: 0,
        }

        rowCells.forEach((cell) => {
          typeCounts[cell.type]++
        })

        // Ellenőrizzük, hogy van-e nyerő kombináció
        Object.entries(typeCounts).forEach(([type, count]) => {
          if (count >= 3) {
            const lineKey = `${type}-${count}` as keyof typeof gameConfig.linePoints
            const linePoints = gameConfig.linePoints[lineKey] || 0
            if (linePoints > 0) {
              lines.push({
                type: "row",
                index: row,
                points: linePoints,
                cells: rowCells.map((cell) => cell.id),
              })
            }
          }
        })
      }
    }

    // Oszlopok ellenőrzése
    for (let col = 0; col < cols; col++) {
      const colCells = revealedCells.filter((cell) => cell.col === col)
      if (colCells.length === rows) {
        // Teljes oszlop felfedve
        const typeCounts: Record<ItemType, number> = {
          hal: 0,
          nagyhal: 0,
          rák: 0,
          hullám: 0,
          sirály: 0,
          kagyló: 0,
        }

        colCells.forEach((cell) => {
          typeCounts[cell.type]++
        })

        // Ellenőrizzük, hogy van-e nyerő kombináció
        Object.entries(typeCounts).forEach(([type, count]) => {
          if (count >= 3) {
            const lineKey = `${type}-${count}` as keyof typeof gameConfig.linePoints
            const linePoints = gameConfig.linePoints[lineKey] || 0
            if (linePoints > 0) {
              lines.push({
                type: "col",
                index: col,
                points: linePoints,
                cells: colCells.map((cell) => cell.id),
              })
            }
          }
        })
      }
    }

    // Átlók ellenőrzése (csak ha négyzet alakú a játéktér)
    if (rows === cols) {
      // Fő átló (balról jobbra)
      const mainDiagCells = revealedCells.filter((cell) => cell.row === cell.col)
      if (mainDiagCells.length === rows) {
        const typeCounts: Record<ItemType, number> = {
          hal: 0,
          nagyhal: 0,
          rák: 0,
          hullám: 0,
          sirály: 0,
          kagyló: 0,
        }

        mainDiagCells.forEach((cell) => {
          typeCounts[cell.type]++
        })

        Object.entries(typeCounts).forEach(([type, count]) => {
          if (count >= 3) {
            const lineKey = `${type}-${count}` as keyof typeof gameConfig.linePoints
            const linePoints = gameConfig.linePoints[lineKey] || 0
            if (linePoints > 0) {
              lines.push({
                type: "diag",
                index: 0, // Fő átló
                points: linePoints,
                cells: mainDiagCells.map((cell) => cell.id),
              })
            }
          }
        })
      }

      // Mellék átló (jobbról balra)
      const antiDiagCells = revealedCells.filter((cell) => cell.row + cell.col === rows - 1)
      if (antiDiagCells.length === rows) {
        const typeCounts: Record<ItemType, number> = {
          hal: 0,
          nagyhal: 0,
          rák: 0,
          hullám: 0,
          sirály: 0,
          kagyló: 0,
        }

        antiDiagCells.forEach((cell) => {
          typeCounts[cell.type]++
        })

        Object.entries(typeCounts).forEach(([type, count]) => {
          if (count >= 3) {
            const lineKey = `${type}-${count}` as keyof typeof gameConfig.linePoints
            const linePoints = gameConfig.linePoints[lineKey] || 0
            if (linePoints > 0) {
              lines.push({
                type: "diag",
                index: 1, // Mellék átló
                points: linePoints,
                cells: antiDiagCells.map((cell) => cell.id),
              })
            }
          }
        })
      }
    }

    return lines
  }

  // Automatikus reset a kör végén
  const autoResetAfterRound = () => {
    setAnimationPhase("resetting")
    setIsResetting(true)
    setButtonText("Új kör előkészítése...")

    // Minden cellát elrejtünk animációval
    const resetCells = cells.map((cell) => ({
      ...cell,
      revealed: false,
    }))
    setCells(resetCells)

    // Várunk az animáció befejezésére, majd előkészítjük az új kört
    setTimeout(() => {
      prepareNewRound()
      setIsResetting(false)
    }, 1000)
  }

  // Játék gomb kezelése - az összes cella felfedése
  const handlePlayClick = () => {
    if (gameOver || isAnimating || animationPhase !== "idle") return

    setIsAnimating(true)
    setShowWinningLines(false)
    setIsRevealing(true)
    setAnimationPhase("revealing")
    setButtonText("Horgászat folyamatban...")

    // Az összes cella felfedése animációval
    const updatedCells = cells.map((cell) => ({
      ...cell,
      revealed: true,
    }))

    setCells(updatedCells)

    // Várunk az animáció befejezésére
    setTimeout(() => {
      setIsRevealing(false)
      setAnimationPhase("awarding")
      setButtonText("Eredmények kiértékelése...")

      // Nyerő vonalak ellenőrzése
      const lines = checkWinningLines(updatedCells)
      setWinningLines(lines)

      // Pontszám kiszámítása
      const linePoints = lines.reduce((total, line) => total + line.points, 0)

      // Frissítjük a pontszámot
      setScore((prevScore) => prevScore + linePoints)
      setLastPointsChange(linePoints)

      // Csökkentjük a hátralévő lépések számát
      setRemainingMoves((prevMoves) => {
        const newMoves = prevMoves - 1
        if (newMoves <= 0) {
          setGameOver(true)
        }
        return newMoves
      })

      // Megjelenítjük a nyerő vonalakat
      setShowWinningLines(true)

      // Várunk, hogy a játékos láthassa az eredményt
      setTimeout(() => {
        // Ha a játék véget ért, nem resetelünk automatikusan
        if (remainingMoves <= 1) {
          setIsAnimating(false)
          setButtonText("Játék vége")
        } else {
          // Automatikus reset az új körre
          autoResetAfterRound()
          setIsAnimating(false)
        }
      }, 3000) // 3 másodpercig mutatjuk az eredményt
    }, 1500) // Várunk 1.5 másodpercet a felfedés animációra
  }

  // Ikon lekérése az elem típusához
  const getItemIcon = (type: ItemType, size = 24) => {
    const iconProps = { size, className: "mx-auto" }

    switch (type) {
      case "hal":
        return <Fish {...iconProps} className="text-blue-500 mx-auto" />
      case "nagyhal":
        return <Fish {...iconProps} className="text-blue-700 mx-auto" strokeWidth={3} />
      case "rák":
        return <Crab {...iconProps} className="text-red-500 mx-auto" />
      case "hullám":
        return <Waves {...iconProps} className="text-blue-400 mx-auto" />
      case "sirály":
        return <Seagull {...iconProps} className="text-gray-600 mx-auto" />
      case "kagyló":
        return <Shell {...iconProps} className="text-amber-300 mx-auto" />
    }
  }

  // Ellenőrizzük, hogy egy cella része-e egy nyerő vonalnak
  const isPartOfWinningLine = (cellId: number) => {
    if (!showWinningLines) return false
    return winningLines.some((line) => line.cells.includes(cellId))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Horgász Kaland</h1>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h2 className="text-xl font-semibold mb-4">Segíts a horgásznak halat találni!</h2>
              <p className="text-lg mb-2">
                A horgász a tó különböző pontjain próbál halat fogni. Segíts neki megtalálni a legjobb helyeket!
              </p>
              <p className="text-lg">
                Kattints a "Horgászat" gombra, hogy felfedd a tavat. Találj halakat és rákokat egy sorban vagy oszlopban
                a pontokért!
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold mb-2">Pontszámod</h2>
                      <p className="text-3xl font-bold text-blue-600">{score}</p>

                      {lastPointsChange !== 0 && showWinningLines && (
                        <p
                          className={`text-lg font-semibold mt-2 ${lastPointsChange > 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {lastPointsChange > 0 ? `+${lastPointsChange}` : lastPointsChange}
                        </p>
                      )}
                    </div>

                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold mb-2">Hátralévő Dobások</h2>
                      <p className="text-3xl font-bold text-amber-500">{remainingMoves}</p>
                    </div>

                    <div className="text-center mb-6">
                      <Button
                        onClick={handlePlayClick}
                        disabled={gameOver || isAnimating || animationPhase !== "idle"}
                        className="bg-blue-600 hover:bg-blue-700 w-full py-6 text-lg relative"
                      >
                        {isAnimating ? (
                          <span className="flex items-center justify-center">
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            {buttonText}
                          </span>
                        ) : (
                          buttonText
                        )}
                      </Button>
                    </div>

                    {gameOver && (
                      <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Játék Vége!</h3>
                        <p className="mb-4">
                          Végső pontszámod: <span className="font-bold">{score}</span>
                        </p>
                        <Button onClick={startNewGame} className="bg-blue-600 hover:bg-blue-700">
                          Új Játék
                        </Button>
                      </div>
                    )}

                    {winningLines.length > 0 && showWinningLines && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2 text-green-700">Nyerő Vonalak!</h3>
                        <ul className="space-y-2">
                          {winningLines.map((line, index) => {
                            const lineType = line.type === "row" ? "Sor" : line.type === "col" ? "Oszlop" : "Átló"
                            const lineIndex =
                              line.type === "diag" ? (line.index === 0 ? "Fő" : "Mellék") : line.index + 1
                            return (
                              <li key={index} className="text-sm text-green-800">
                                {lineType} {lineIndex}: +{line.points} pont
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="md:w-2/3">
                <Card>
                  <CardContent className="p-6">
                    <div
                      className={`grid gap-2 ${isRevealing ? "game-board-revealing" : ""} ${isResetting ? "game-board-resetting" : ""}`}
                      style={{
                        gridTemplateColumns: `repeat(${gameConfig.cols}, 1fr)`,
                        gridTemplateRows: `repeat(${gameConfig.rows}, 1fr)`,
                      }}
                    >
                      {cells.map((cell) => (
                        <div
                          key={cell.id}
                          className={`aspect-square border-2 rounded-md flex items-center justify-center transition-all ${
                            cell.revealed
                              ? isPartOfWinningLine(cell.id)
                                ? "border-green-500 bg-green-100 animate-pulse"
                                : "border-gray-200 bg-gray-50"
                              : "border-blue-300 bg-blue-100"
                          }`}
                          style={{
                            transitionDelay: `${cell.animationDelay}s`,
                            animationDelay: `${cell.animationDelay}s`,
                          }}
                          aria-label={cell.revealed ? `Felfedett mező: ${cell.type}` : "Felfedetlen mező"}
                        >
                          {cell.revealed ? (
                            <div
                              className={`relative w-full h-full p-2 flex flex-col items-center justify-center transition-opacity duration-500 ${
                                isRevealing ? "animate-reveal" : ""
                              }`}
                              style={{ animationDelay: `${cell.animationDelay + 0.2}s` }}
                            >
                              {getItemIcon(cell.type, 36)}
                              <span
                                className={`mt-1 text-xs font-bold px-1 rounded ${
                                  cell.points > 0
                                    ? "bg-green-100 text-green-700"
                                    : cell.points < 0
                                      ? "bg-red-100 text-red-700"
                                      : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {cell.points > 0 ? `+${cell.points}` : cell.points}
                              </span>
                            </div>
                          ) : (
                            <div className="w-full h-full bg-blue-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-2xl">?</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-800 font-medium">
                Emlékeztetjük: ez egy közösségi platform, teljesen ingyenes, nem igényel pénzügyi befektetést, nem
                biztosít lehetőséget valódi pénz nyereményre. Minden virtuális tárgy és pont nem rendelkezik valós
                értékkel.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <DisclaimerModal />

      <style jsx global>{`
        @keyframes reveal {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes hide {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.5);
            opacity: 0;
          }
        }
        
        .animate-reveal {
          animation: reveal 0.5s ease-out forwards;
        }
        
        .game-board-revealing > div {
          transition: all 0.5s ease-out;
        }
        
        .game-board-resetting > div {
          transition: all 0.5s ease-in;
          transform: scale(0.5);
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
