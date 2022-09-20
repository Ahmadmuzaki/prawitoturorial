import { NextPage } from "next"
import { ReactNode } from "react"
interface Props {
    children: ReactNode
}
const Indomie: NextPage<Props> = ({ children }) => {
    return (
        <>
            <div>Header</div>
            <div>{children}</div>
            <div>footer</div>
        </>
    )
}

export default Indomie