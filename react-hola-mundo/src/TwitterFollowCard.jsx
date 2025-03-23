import { useState } from "react"

export function TwitterFollowCard({userName,name}){
    const[isFollowing, setIsFollowing] = useState(False)


    const text = isFollowing ? 'Siguiendo':'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button'
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
          <header className='tw-followCard-header'>
            <img alt= "Random Image" className='tw-followCard-avatar' src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b"/>
            <div className='tw-followCard-div'>
              <strong>{name}</strong>
              <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
          </header>
          <aside>
            <button className = {buttonClassName} onClick={handleClick}>
              {text}
            </button>
          </aside>
        </article>
      )
}