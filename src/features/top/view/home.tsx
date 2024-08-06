import Link from "next/link"
import { getAllContents } from "@/services/lib/getAllContents"

export const Top = async () => {
    const contents = getAllContents()

    return (
        <main>
            <h1>Next.js with markdown</h1>
            <ul>
                {contents.map((item) => (
                    <li key={item.id}>
                        <Link href={`/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}
