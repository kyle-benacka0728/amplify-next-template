"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../app.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function GameTrackerPage() {
  const [games, setGames] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: (data) => setGames([...data.items]),
    });
    return () => sub.unsubscribe();
  }, []);

  const addGame = () => {
    const title = window.prompt("Enter a game name:");
    if (!title) return;
    client.models.Todo.create({ content: title });
  };

  const deleteGame = (id: string) => {
    client.models.Todo.delete({ id });
  };

  return (
    <main className="">
      <h1>Note: This page is very bare bones. I essentially took the todo code and pasted it here as a
        temporary thing. Enjoy the skeleton!!!
      </h1>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="">
            <h1 className="">
              Welcome, {user?.username || "Player"}!
            </h1>

            <h2 className="text-xl font-semibold mb-4">🎮 Your Game List</h2>

            <button
              onClick={addGame}
              className=""
              id="add-game"
            >
              + Add Game
            </button>

            <ul className="">
              {games.map((game) => (
                <li
                  key={game.id}
                  onClick={() => deleteGame(game.id)}
                  className=""
                >
                  {game.content}
                </li>
              ))}
            </ul>

            <button
              className=""
              id="sign-out"
              onClick={signOut}
            >
              Sign Out
            </button>

            <div>
              <a
              href="/"
              className=""
              >
                  Home
              </a>
            </div>
          </div>
        )}
      </Authenticator>
    </main>
  );
}
