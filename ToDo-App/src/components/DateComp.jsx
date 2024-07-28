import React from "react"

const getDate = (date) =>{
    const day = date.getDate();
    const month = date.toLocaleString('default',{month: 'long'});
    const year = date.getFullYear();
    return `${day},${month},${year}`;
};

const DateComp = () =>{
    const currentDate = new Date();
    const DateGot = getDate(currentDate);
   
    return(
        <div className="text-sm font-medium">
            {DateGot}
        </div>
    );
};

export default DateComp;