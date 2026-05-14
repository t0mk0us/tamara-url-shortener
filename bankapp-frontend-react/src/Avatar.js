const user = {
    name: 'Hi! I am Tamara',
    imageUrl: 'https://i.pngimg.me/thumb/f/720/comdlpng6948109.jpg',
    //imageUrl: 'file:///C:/Users/React_apps/bank-frontend-react/src/pages/images/Avatar1.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <h3>{user.name}</h3>
      </>
    );
  }