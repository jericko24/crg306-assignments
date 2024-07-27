"use client";

import { useUserAuth } from "./_utils/auth-context";
 
export default function Page() {   
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    return(
    <div>
        <h1>Week 9</h1>
        {user ? (
                <>
                    <p>Welcome, {user.displayName}!</p>
                    <button onClick={firebaseSignOut}>Sign out</button>
                    <p><a href="http://localhost:3000/week-9/shopping-list">Go to Shopping List</a></p>
                </>
            ) : (
                <>
                    <p>Welcome, guest!</p>
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                </>
            )}
    </div>
    );
}