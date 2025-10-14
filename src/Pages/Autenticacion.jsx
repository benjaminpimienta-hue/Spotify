import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import Login from '../Components/Login.jsx'
import Logout from '../Components/Logout'
import '../App.css'
import Botapi from '../Components/Botapi.jsx'

function Home() {
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) {
        const name = currentUser.user_metadata?.full_name || currentUser.email
        setUserName(name)
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) {
        const name = currentUser.user_metadata?.full_name || currentUser.email
        setUserName(name)
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])


  if (!user) return <Login />

  return (
    <div className='data'>
      <img src={user.user_metadata?.avatar_url} alt="Foto de perfil" />
      <p><b>Nombre:</b> {userName}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Acceso:</b> {new Date(user.identities?.[0]?.created_at).toLocaleString()}</p>

      <Logout />
      <Botapi />
    </div>
  )
}

export default Home