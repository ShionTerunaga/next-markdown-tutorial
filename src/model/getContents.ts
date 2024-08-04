import fs from "fs"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import { contentsPath } from "./getContents.data"
import type { contents, overviewContents } from "./getContents.type"
import "highlight.js/styles/vs2015.min.css"

export const getContents = async () => {
    const pullFolders = fs.readdirSync(contentsPath)

    const subResponse: contents[] = pullFolders.map((item) => {
        const path = `${contentsPath}/${item}`

        const sourceFile = `${item}.mdx`
        const overviewFile = `${item}Overview.json`

        const source = fs.readFileSync(`${path}/${sourceFile}`).toString()
        const overviewStr = fs
            .readFileSync(`${path}/${overviewFile}`)
            .toString()
        const overviewParse = JSON.parse(overviewStr) as overviewContents

        return {
            source: source,
            overview: overviewParse
        }
    })

    const option = {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight]
        }
    }

    const response = { source: subResponse[0].source, options: option }

    return response
}
