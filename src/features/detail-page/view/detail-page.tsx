import { MDXRemote } from "next-mdx-remote/rsc"
import styles from "./style.css"
import { getContents } from "@/services/lib"
import { markdownComponent } from "@/services/markdown"

interface props {
    id: string
}

export const DetailPage = (props: props) => {
    const markdown = getContents(props.id)
    return (
        <main>
            <h1 className={styles.heading}>markdownの内容</h1>
            <section className={styles.section}>
                <MDXRemote
                    source={markdown.source}
                    options={markdown.options}
                    components={markdownComponent}
                />
            </section>
        </main>
    )
}
