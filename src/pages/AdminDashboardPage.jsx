import React, { useEffect } from "react"
import Cell from "../components/Cell"
import LeaderBoard from "../components/LeaderBoard"
import NavBar from "../components/NavBar"
import MkdSDK from "../utils/MkdSDK"

const AdminDashboardPage = () => {
    let sdk = new MkdSDK()
    useEffect(() => {
        sdk.setTable("video")
        console.log(
            sdk.callRestAPI({ payload: {}, page: 1, limit: 10 }, "PAGINATE")
        )
    }, [])

    return (
        <div className="w-full h-screen text-white bg-background px-12 py-6 ">
            <NavBar></NavBar>
            <LeaderBoard></LeaderBoard>
            <Cell></Cell>
        </div>
    )
}

export default AdminDashboardPage
