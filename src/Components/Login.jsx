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
