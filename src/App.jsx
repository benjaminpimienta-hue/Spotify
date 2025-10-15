import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Api from "./Pages/Api"; 

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.subscription.unsubscribe();
  }, []);

  return (
    <div>
      {session ? (
        <div>
          <div className="user">
            <h3>{session.user.user_metadata.full_name}</h3>
            <img src={session.user.user_metadata.avatar_url} alt="👤" width={40} style={{ borderRadius: "50%" }}/>
            <Logout/>
          </div>
          
          <Api />
        </div>) 
        : (
        
        <Login />
      )}
    </div>
  );

}