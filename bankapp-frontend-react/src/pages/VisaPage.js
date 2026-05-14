const visa = {
  imageUrl: 'file:///C:/Users/React_apps/bank-frontend-react/src/images/visa-logo-png-transparent.png',
  imageSize: 30,
};

export default function VisaLogo() {
  return (
    <>
      <img
        className="visalogo"
        src={visa.imageUrl}
        alt={'visa logo'}
        style={{
          width: visa.imageSize
        }}
      />
    </>
  );
}