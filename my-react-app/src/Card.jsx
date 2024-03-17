import fubaoImage from './images/fubao.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" alt="profile picture" src={fubaoImage} />
            <h2 className='card-title'>Nhung Ne</h2>  
            <p className='card-text'>I am doing projects</p>
        </div>
    );
}

export default Card;