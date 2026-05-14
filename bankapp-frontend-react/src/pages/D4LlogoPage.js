const d4llogo = {
  imageUrl: 'file:///C:/Users/React_apps/bank-frontend-react/src/images/D4LogicLogo.jpg',
  imageSize: 90,
};

export default function D4logo() {
  return (
    <>
      <img
        className="d4llogo"
        src={d4llogo.imageUrl}
        alt={'Design4Logic logo'}
        style={{
          width: visa.imageSize
        }}
      />
    </>
  );
}