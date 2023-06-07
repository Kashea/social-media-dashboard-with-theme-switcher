import React from 'react'
import './index.css'
import Header from './components/Header'
import Followers from './components/Followers'
import Overview from './components/Overview'


const App = () => {
    return (
    <main>
        <Header/>
        <Followers/>
        <Overview/>
    </main>
  )
}

export default App;