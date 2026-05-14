import { useNavigate } from 'react-router-dom';

const Buttons = () => {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }
  
    const navigateToAbout = () => {
  
        navigate('/about');
    }
  
    const navigateToElementList = () => {
  
        navigate('/elementList');
    }
  
    const navigateToElement = () => {
  
        navigate('/elements');
    }
  
    const navigateToText = () => {
  
        navigate('/text');
    }

    return (
        <buttons>
            {/* <div id="buttons"> */}
                <button onClick={navigateHome}>Home</button>
                <button onClick={navigateToAbout}>About</button>  
                <button onClick={navigateToElementList}>Elements</button>
                <button onClick={navigateToElement}>Element</button>
                <button onClick={navigateToText}>Text</button>
            {/* </div> */}
        </buttons>
    );
}

export default Buttons;