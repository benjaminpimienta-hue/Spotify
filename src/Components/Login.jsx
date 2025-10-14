import React from 'react';
import { supabase } from '../supabaseClient';

function handleLogin(provider) {
  supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: window.location.origin,
    },
  });
}

function Login() {
  return (
    <div>
      <button className='in' onClick={() => handleLogin('google')}>
        <b>Iniciar Sesión con Google</b>
      </button>

      <button className='in' onClick={() => handleLogin('spotify')} style={{ marginTop: '10px' }}>
        <b>Iniciar Sesión con Spotify</b>
      </button>
    </div>
  );
}

export default Login;
