"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./../app/app.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Page() {
  // Using the todo model as games
  const [games, setGames] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listGames() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setGames([...data.items]),
    });
  }

  useEffect(() => {
    listGames();
  }, []);

  function addGame() {
    const title = window.prompt("Enter game name:");
    if (!title) return;
    client.models.Todo.create({ content: title });
  }

  function deleteGame(id: string) {
    client.models.Todo.delete({ id });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <Authenticator className="w-full max-w-md">
        {({ signOut, user }) => (
          <div className="w-full max-w-md p-6 bg-black text-white rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username || "Guest"}!</h1>

            <h2 className="text-xl font-semibold mb-2">Game Tracker</h2>
            <button
              onClick={addGame}
              className="bg-blue-500 text-white px-4 py-2 rounded self-center mb-4"
              id="add-game"
            >
              Add Game
            </button>

            <ul className="space-y-2">
              {games.map((game) => (
                <li
                  key={game.id}
                  onClick={() => deleteGame(game.id)}
                  className="p-2 border border-gray-700 rounded cursor-pointer hover:bg-gray-800"
                >
                  {game.content}
                </li>
              ))}
            </ul>

            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              id="sign-out"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </Authenticator>
    </main>
  );
}
