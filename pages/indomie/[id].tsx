import { useRouter } from "next/router"

const IndomieGoreng = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>IndomieGoreng {id}</div>
    )
}

export default IndomieGoreng