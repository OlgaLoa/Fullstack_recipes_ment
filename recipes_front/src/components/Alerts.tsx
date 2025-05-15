import * as React from "react";


function Alerts(props) {
    let children = props.children;

    return(
        <>
            {
                React.Children.map(children, (child, index) =>{
                    if (index < 1) {
                        return child
                        }
                })
            }
        </>

//         < > количество children посчитать
//        { React.Children.count(props.children) }
//         </>
    )
}
export default Alerts;
