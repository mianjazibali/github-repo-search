import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate(); 

    return (
        <div className="justify-content-center position-fixed top-50 left-50 start-50 translate-middle">
            <h1>Not Found</h1>
            <h2 style={{textAlign: 'center'}}>404</h2>
            <button className="w-100" onClick={() => navigate('/')}>Home Page</button>
        </div>
    );
};

export default NotFound;
