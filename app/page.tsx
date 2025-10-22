"use client";

import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "./app.css";

Amplify.configure(outputs);

export default function App() {
  useEffect(() => {
    console.log("Amplify configured for Game Tracker Home");
  }, []);

  return (
    <main className="">
      <h1 className="">🎮 Game Tracker</h1>

      <p className="">
        Welcome to my Game Tracker app. A app for keeping track of all the
        games you’re currently playing, have finished, or plan to start next.
      </p>

      <div>
        <a
          href="/list"
          className=""
        >
          View Game List (Sign in required)
        </a>
      </div>

      <div>
        <a
          href="/plan"
          className=""
        >
          View Project Plan
        </a>
      </div>
    </main>
  );
}
