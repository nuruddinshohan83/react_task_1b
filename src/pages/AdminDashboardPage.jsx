import React from "react"
import Cell from "../components/Cell"
import LeaderBoard from "../components/LeaderBoard"
import NavBar from "../components/NavBar"

const AdminDashboardPage = () => {
    return (
        <>
            <div className="w-full h-screen text-white bg-background px-12 py-6 ">
                <NavBar></NavBar>
                <LeaderBoard></LeaderBoard>
                <Cell></Cell>
            </div>
        </>
    )
}

export default AdminDashboardPage
