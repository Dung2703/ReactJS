import { useRoutes } from "react-router-dom"
import { Routes } from "./index"

function AllRouter() {
    const element = useRoutes(Routes)

    return (
        <>
            {element}
        </>
    )
}

export default AllRouter