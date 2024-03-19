
function ProfilePicture() {

    const imageURL = './src/images/fubao.jpg';

    const handleClick = (e) => {e.target.style.display = 'none';}

    return <img onClick={(e) => handleClick(e)} src={imageURL} alt="Profile picture" width={200} height={200}/>
}

export default ProfilePicture