import { MDXRemote } from "next-mdx-remote/rsc"
import { getContents } from "@/services/lib/getContents"
import { markdownComponent } from "@/services/markdown/markdown"

interface props {
    id: string
}

export const DetailPage = (props: props) => {
    const markdown = getContents(props.id)
    return (
        <main>
            <h1>markdownの内容</h1>
            <MDXRemote
                source={markdown.source}
                options={markdown.options}
                components={markdownComponent}
            />
        </main>
    )
}
