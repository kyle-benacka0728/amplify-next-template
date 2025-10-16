"use client";

import "../amplify-client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function AuthPage() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello, {user?.username}, you signed in! It works! Wooooo!</h1>
          <button onClick={signOut}>Sign out</button>
            <div>
                <a href="/">
                    Go to Home
                </a>
            </div>
        </main>
      )}
    </Authenticator>
  );
}
