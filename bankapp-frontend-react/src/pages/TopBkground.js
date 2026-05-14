const bkground = {
    imageUrl: 'file:///C:/Users/React_apps/bank-frontend-react/src/images/bkgrounds/D4LogicLogo.jpg',
    imageSize: 90,
  };
  
  export default function Topbkground() {
    return (
      <>
        <img
          className="d4llogo"
          src={bkground.imageUrl}
          alt={'Top Page background'}
          style={{
            width: visa.imageSize
          }}
        />
      </>
    );
  }