const TwitterFollowCard = ({ userName, name, isFollowing }) => {
    return (
        <article>
            <header>
                <img src={`https://ui-avatars.com/api/?name=${userName}`} alt="avatar" />
                <div>
                    <strong>{name}</strong>
                <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button>{isFollowing ? 'Unfollow' : 'Follow'}</button>
            </aside>
        </article>
    )   
}
export default TwitterFollowCard