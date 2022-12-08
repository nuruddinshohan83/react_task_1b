import React from "react"

export default function LeaderBoard() {
    return (
        <div>
            <div className="w-full my-5 flex justify-between items-center ">
                <div className="text-4xl font-thin text-white ">
                    Today's Leader board
                </div>
                <div className="flex justify-center items-center gap-4 px-4 py-2 rounded-2xl bg-backgroundLite text-base font-thin text-white">
                    <span className="text-white">9th December 2022</span>
                    <span>
                        <button className="bg-baseColor rounded-md text-black px-2 py-1">
                            Submissions Open
                        </button>
                    </span>
                    <span className="text-white">12:01Am</span>
                </div>
            </div>
        </div>
    )
}
