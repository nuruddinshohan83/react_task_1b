import React from "react"

export default function Cell() {
    return (
        <div className="flex justify-between items-center w-full h-24 my-8 border-2 rounded-2xl border-gray-500 text-textCustom font-thin p-2 px-32 ">
            <div className="text-sm">01</div>
            <div className="w-32  h-full bg-gray-400 rounded-lg"></div>
            <p className=" text-xl">
                Rune raises $100,000 for marketing through NFT butterflies sale
            </p>
            <p className="text-secondaryColor">user</p>
            <p>Like</p>
        </div>
    )
}
