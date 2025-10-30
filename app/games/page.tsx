"use client";

import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
}

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const key = process.env.NEXT_PUBLIC_RAWG_KEY;
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${key}&ordering=-rating&page_size=15`
        );
        const data = await response.json();
        setGames(data.results);
      } catch (e) {
        setError("Failed to load games");
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  if (loading) return <p>Loading game data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Top Rated Games</h1>

      <ul className="space-y-4 w-full max-w-lg">
        {games.map((game) => (
          <li
            key={game.id}
            className="bg-gray-900 p-4 rounded-lg transition-transform"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{game.name}</h2>
            <p className="text-gray-400">Released: {game.released}</p>
          </li>
        ))}
      </ul>

      <a href="/" className="mt-8 text-blue-400 hover:underline">
        ← Back to Home
      </a>
    </main>
  );
}
