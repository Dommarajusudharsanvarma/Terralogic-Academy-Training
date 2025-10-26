import ChildComponent from "./ChildComponent";

function ParentComponent(){
    const handleChildClick=()=>{
        alert('Alert from the child!');
    };
    return(
        <ChildComponent onButtonClick={handleChildClick}/>
    )
}
  

export default ParentComponent