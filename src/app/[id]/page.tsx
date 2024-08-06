import { DetailPage } from "@/features/detail-page"
import { getAllContents } from "@/services/lib/getAllContents"

export const generateStaticParams = () => {
    const overviews = getAllContents()

    return overviews.map((item) => {
        return {
            id: item.id
        }
    })
}

const ContentsPage = ({ params }: { params: { id: string } }) => {
    return <DetailPage id={params.id} />
}

export default ContentsPage
