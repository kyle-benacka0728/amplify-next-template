"use client";

import "../amplify-client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function SecretPage() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ padding: 20 }}>
          <h1>Secret Page</h1>
          <p>Welcome, {user?.username}!</p>
          <p>This page is only visible to logged-in users.</p>
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
