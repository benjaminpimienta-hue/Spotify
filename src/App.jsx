import { Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Api from './Pages/Api'
import './App.css'
import Start from './Pages/Start'

function App() {

    return (
        <>


        <div>
        <Routes>
            <Route path="/" element={<Api/>} />
            <Route path="/Start" element={<Start />} /> 
        </Routes>
        </div>
        </>
    )
}

export default App
