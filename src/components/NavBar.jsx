import React from "react"
import User from "../../public/User"
export default function NavBar() {
    return (
        <div className="w-full flex justify-between items-center ">
            <div className="text-5xl font-black text-white ">App</div>
            <button className="flex justify-center items-center gap-2 bg-baseColor text-gray-900 px-6 py-3 rounded-full">
                <User></User>
                Logout
            </button>
        </div>
    )
}
