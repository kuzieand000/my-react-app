import profilePic from './assets/andrew.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Andrew</h2>
            <p className="card-text">I put pricing on parts and play video games</p>
        </div>
    );

}

export default Card