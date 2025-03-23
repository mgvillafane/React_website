import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
import './App.css'


createRoot(document.getElementById('root')).render(
  <section className='App'>
    <TwitterFollowCard isFollowing={true} userName="blablabla" name="Marcos" />
    <TwitterFollowCard isFollowing={false} userName="blablabla2" name="Miguel" />
  </section>
  

)
