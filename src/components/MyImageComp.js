import React from "react";
import Dhoni from '../Assests/Images/4075428-2-4-5b84249446e0fb005082e7fa.jpg'
const MyImageComp = () => {
    return(
        <div>
            <h2>This is MyImages components</h2>
            <img src={Dhoni} alt="Dhoni" height="200px" width="200px" />
        </div>
    )
}

export default MyImageComp