"use client";

import "../amplify-client";
import "@aws-amplify/ui-react/styles.css";

export default function PlanPage() {
  return (
    <main className="">
        <div className="">
        <h1 className="">The Plan</h1>
        <p className="">
          I plan on making a game tracker app, hopefully using an API that contains game information,
          allowing users to make a list of games they own, have played, or want to play.
          It's not a fully fleshed-out idea yet, but that’s the general gist.
        </p>

        <h2 className="">Requirements</h2>
        <ul className="">
          <li>Use AWS Amplify for hosting and backend integration ☑️</li>
          <li>Be built in NextJs ☑️</li>
          <li>Have code managed on GitHub ☑️</li>
          <li>Have multiple pages with routing ☑️</li>
          <li>Pass props to and have componentized pages</li>
          <li>Use Tailwind CSS for styling</li>
          <li>Use useState</li>
          <li>Use an API to retrieve game information for users to use</li>
          <li>Use Authenticator to make some areas only signin accessible</li>
          <li>Display and manage a list of games</li>
          <li>Allow adding and deleting games</li>
          <li>Navigation between Home, Plan, and Game Tracker pages</li>
        </ul>
      </div>
      
      <div>
        <a
        href="/"
        className=""
        >
            Home
        </a>
      </div>
    </main>
  );
}
