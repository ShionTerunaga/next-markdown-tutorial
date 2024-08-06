import { MDXComponents } from "mdx/types"
import React from "react"

export const markdownComponent: MDXComponents = {
    pre: (props) => <pre style={{ width: "95%", margin: "auto" }} {...props} />,
    table: (props) => (
        <table border={1} style={{ borderCollapse: "collapse" }} {...props} />
    )
}
