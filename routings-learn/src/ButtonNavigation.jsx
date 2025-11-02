import { useNavigate } from "react-router-dom";

function ButtonNavigation(){
    const navigate = useNavigate();
    const handleSubmit = () => {
        // form submission login
        navigate('/success'); //Navigate to the /success page
    };

    return(
        <form onSubmit={handleSubmit}>
        {/* form input */}
        <button type="submit">Submit</button>
        </form>
    )
}
 
export default ButtonNavigation;