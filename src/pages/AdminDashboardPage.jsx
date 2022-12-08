import React, { useEffect, useState } from "react"
import Cell from "../components/Cell"
import LeaderBoard from "../components/LeaderBoard"
import NavBar from "../components/NavBar"
import MkdSDK from "../utils/MkdSDK"

const AdminDashboardPage = () => {
    let [data, setData] = useState([])
    let [page, setPage] = useState(1)

    let sdk = new MkdSDK()
    useEffect(() => {
        console.log("useEffect")
        sdk.setTable("video")
        console.log(
            sdk
                .callRestAPI({ payload: {}, page: page, limit: 10 }, "PAGINATE")
                .then((res) => {
                    //console.log(res, "Res")
                    setData(res.list)
                })
        )
    }, [page])
    useEffect(() => {
        console.log(page, "page")
    }, [page])

    return (
        <div className="w-full  text-white bg-background px-12 py-6 ">
            <NavBar></NavBar>
            <LeaderBoard></LeaderBoard>

            {data.map((value) => {
                return (
                    <Cell
                        key={value.id}
                        id={value.id}
                        title={value.title}
                        photo={value.photo}
                        username={value.username}
                        like={value.like}
                    ></Cell>
                )
            })}
            <div className="flex justify-between items-center">
                <button
                    className="flex justify-center items-center gap-2 bg-baseColor text-gray-900 px-6 py-3 rounded-full"
                    onClick={() => {
                        setPage((value) => {
                            if (value !== 1) {
                                return value - 1
                            }
                        })
                    }}
                >
                    Previous
                </button>
                <button
                    className="flex justify-center items-center gap-2 bg-baseColor text-gray-900 px-6 py-3 rounded-full"
                    onClick={() => {
                        console.log("clicked")
                        setPage((value) => {
                            return value + 1
                        })
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default AdminDashboardPage
