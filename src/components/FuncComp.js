const FuncComp=(props)=>{
    return <div>
        <h1>function  props</h1>
        <p>My Name is <strong>{props.fname}</strong>,</p>
        <p>my lname is <strong>{props.lname} </strong> </p> 
        <p>my salary is <strong>{props.salary} </strong></p>
         <p>  {props.gender}</p>
        <p>{props.address}</p>
    </div>
}
export default FuncComp;