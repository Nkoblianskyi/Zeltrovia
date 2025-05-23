import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Anchor, Crown, Ship, Compass, Map } from "lucide-react"

// Példa adatok a játékosok ranglistájához
const topPlayers = [
  {
    id: 1,
    name: "Fekete Szakáll Kapitány",
    score: 9850,
    avatar: "/pirate-avatar-1.png",
  },
  { id: 2, name: "Tengeri Farkas", score: 8720, avatar: "/pirate-avatar-2.png" },
  { id: 3, name: "Vihar Admirális", score: 7650, avatar: "/pirate-avatar-3.png" },
  { id: 4, name: "Bátor Kalóz", score: 6980, avatar: "/pirate-avatar-4.png" },
  { id: 5, name: "Tengeri Csillag", score: 6540, avatar: "/pirate-avatar-5.png" },
]

export default function Leaderboard() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Játékosok Rangsora</h2>

        <Card className="max-w-3xl mx-auto">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-center">Top Kapitányok</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {topPlayers.map((player, index) => (
                <div key={player.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 text-center font-bold mr-4">
                      {index === 0 ? (
                        <span className="text-amber-500">🏆</span>
                      ) : index === 1 ? (
                        <span className="text-gray-400">🥈</span>
                      ) : index === 2 ? (
                        <span className="text-amber-700">🥉</span>
                      ) : (
                        `#${index + 1}`
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4 bg-blue-100 flex items-center justify-center">
                      {index === 0 ? (
                        <Crown className="h-6 w-6 text-amber-500" />
                      ) : index === 1 ? (
                        <Anchor className="h-6 w-6 text-blue-600" />
                      ) : index === 2 ? (
                        <Ship className="h-6 w-6 text-blue-700" />
                      ) : index === 3 ? (
                        <Compass className="h-6 w-6 text-green-600" />
                      ) : (
                        <Map className="h-6 w-6 text-indigo-600" />
                      )}
                    </div>
                    <div className="font-medium">{player.name}</div>
                  </div>
                  <div className="font-bold text-blue-600">{player.score.toLocaleString()} pont</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
