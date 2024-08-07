import { style } from "@vanilla-extract/css"

const styles = {
    heading: style({
        textAlign: "center"
    }),
    section: style({
        width: "85%",
        margin: "20px auto",
        border: "1px solid black",
        padding: 10,
        borderRadius: 10
    })
}

export default styles
