import update from "immutability-helper"
import React, { useEffect, useState, useCallback } from "react"
import Cell from "../components/Cell"
import LeaderBoard from "../components/LeaderBoard"
import NavBar from "../components/NavBar"
import MkdSDK from "../utils/MkdSDK"
import { useDrag, useDrop } from "react-dnd"
const AdminDashboardPage = () => {
    let [data, setData] = useState([])
    let [page, setPage] = useState(1)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        // drop: (item) => addItem(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))
    const findCard = useCallback(
        (id) => {
            const card = data.filter((c) => `${c.id}` == id)[0]
            //console.log(typeof card)
            return {
                index: data.indexOf(card),
                card,
            }
        },
        [data]
    )

    const moveCard = useCallback(
        (id, atIndex) => {
            const { index, card } = findCard(id)
            //console.log(index, card, "movecard")
            setData(
                update(data, {
                    $splice: [
                        [index, 1],
                        [atIndex, 0, card],
                    ],
                })
            )
        },
        [findCard, data, setData]
    )
    // let addItem = (id) => {
    //     console.log(id)
    // }

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
        <div
            className="w-full  text-white bg-background px-12 py-6 "
            ref={drop}
        >
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
                        findCard={findCard}
                        moveCard={moveCard}
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
const ItemType = {
    CARD: "card",
}

export default AdminDashboardPage
