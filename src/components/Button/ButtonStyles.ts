// import { CSSProperties } from "react"
import css from 'csstype';

// export default{
//     primary: {
//         backgroundColor: "#578ff7",
//         borderRadius: "3px",
//         color: "white",
//         borderStyle: "none",
//         cursor: "pointer"
//     },
//     secondary: {
//         backgroundColor: "white",
//         borderRadius: "3px",
//         border: "1px solid black",
//         cursor: "pointer"
//     }
// }

interface styles {
    [key: string]: css.Properties
}

const ButtonStyles : styles = {
    primary: {
        backgroundColor: "#578ff7",
        borderRadius: "3px",
        borderStyle: "none",
        color: 'white',
        cursor: "pointer",
    },
    secondary: {
        backgroundColor: "white",
        borderRadius: "3px",
        border: "1px solid black",
        cursor: "pointer"
    }    
}

export default ButtonStyles;

