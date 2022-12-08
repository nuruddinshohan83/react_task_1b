import React from "react"

export default function Cell(props) {
    return (
        <div className="flex justify-between items-center w-full h-24 my-8 border-2 rounded-2xl border-gray-500 text-textCustom font-thin p-2 px-16 ">
            <div className="flex justify-start items-center w-2/3 h-full gap-4">
                <p className="text-sm">{props.id}</p>
                <div
                    className={`w-32  h-full bg-gray-400 rounded-lg 
                   `}
                    style={{
                        backgroundImage: `url(${props.photo})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>
                <h3 className=" text-xl">{props.title}</h3>
                <p className="text-secondaryColor">{props.username}</p>
            </div>
            <p>{props.like}</p>
        </div>
    )
}
