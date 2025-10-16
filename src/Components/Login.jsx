import React from 'react';
import { supabase } from '../supabaseClient';

function handleLogin(provider) {
  supabase.auth.signInWithOAuth({
    provider,
    options: {
      // 👉 Usa tu dominio en producción
      redirectTo: 
        import.meta.env.MODE === "development"
          ? "http://localhost:3000" // cuando estás desarrollando localmente
          : "https://tu-proyecto.vercel.app", // ⚠️ reemplaza con tu dominio real en Vercel
    },
  });
}

function Login() {
  return (
    <div className='starloguin'>
      <div className='star'>
        <img src="/start_spotify.png" alt="" />
        <div className='logo'><img src="/logo.png" alt="" /></div>
        <b className='textlogo'>Millions of Songs. <br/> Free on Spotify.</b>
        <button className='sign'><b>Sign up free</b></button>

        <button className='google' onClick={() => handleLogin('google')}>
          <img src="/G.png" alt="" />
          <b>Continue con Google</b>
        </button>
      </div>
    </div>
  );
}

export default Login;
