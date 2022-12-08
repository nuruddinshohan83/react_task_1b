import React, { useContext } from "react"
import User from "../../public/User"
import { AuthContext } from "../authContext"
export default function NavBar() {
    //let { dispatch } = useContext(AuthProvider)
    const { dispatch: dispatchAuth } = React.useContext(AuthContext)
    return (
        <div className="w-full flex justify-between items-center ">
            <div className="text-5xl font-black text-white ">App</div>
            <button
                className="flex justify-center items-center gap-2 bg-baseColor text-gray-900 px-6 py-3 rounded-full"
                onClick={() => {
                    dispatchAuth({ type: "LOGOUT" })
                    window.location.href = "/" + "admin" + "/login"
                }}
            >
                <User></User>
                Logout
            </button>
        </div>
    )
}
