import { useNavigate } from "react-router-dom";

function GoBackButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <>
            <button onClick={handleClick}>Go Back</button>
        </>
    )
}

export default GoBackButton;