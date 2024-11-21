import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard userName="User1" name="Usuario 1"/>
            <TwitterFollowCard userName="User2" name="Usuario 2"/>
            <TwitterFollowCard userName="User3" name="Usuario 3"/>
            <TwitterFollowCard userName="User4" name="Usuario 4"/>
        </section>
    )
}