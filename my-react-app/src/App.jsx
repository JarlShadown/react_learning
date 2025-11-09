import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

const listOfUser = [
    {
        userName: "hulk1",
        name: "Hulk1",
        isFollowing: false
    },
    {
        userName: "hulk2",
        name: "Hulk2",
        isFollowing: false
    }
]

const App = () => {
    return (
        <div className='follow-container'>
            {listOfUser.map((user) => (
                <TwitterFollowCard 
                    key={user.userName} 
                    userName={user.userName} 
                    name={user.name} 
                    isFollowing={user.isFollowing} 
                />
            ))}
        </div>
    )
}
export default App
