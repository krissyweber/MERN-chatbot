import './App.css'
import Header from './components/Header';
import {Routes, Route, Router} from "react-router-dom"
import Home from './pages/Home'
import Chat from './pages/Chat';
import Login from './pages/Login'
import Signup from './pages/Signup';

function App() {

 return <main>
<Header />
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/login" element={<Login />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/chat" element={<Chat />}/>
</Routes>

 </main>;
}


export default App;
