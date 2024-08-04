import { MDXRemote } from "next-mdx-remote/rsc"
import { markdownComponent } from "@/markdown/markdown"
import { getContents } from "@/model/getContents"

export default async function Home() {
    const data = await getContents()
    return (
        <MDXRemote
            source={data.source}
            options={data.options}
            components={markdownComponent}
        />
    )
}
