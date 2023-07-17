import React from "react";

const Car = ({children, color}) => {

    let colorInfo="";
    if (color) {
        colorInfo = color;
    } else {
        colorInfo = "Néant";
    }

    return children && (
        <div style={ {backgroundColor: 'pink', width:'400px', padding: '10px', margin: '5px auto'} }>
          <p>Marque: { children } </p>
          <p>Couleu: { colorInfo }</p>
        </div>

    )

}

export default Car;
