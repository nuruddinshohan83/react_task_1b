import React from "react"
import { useDrag, useDrop } from "react-dnd"
export default function Cell(props) {
    const { index: originalIndex, card } = props.findCard(props.id)
    //console.log(originalIndex, card)
    let [{ isDragging }, drag] = useDrag(
        () => ({
            type: "card",
            item: { id: props.id, originalIndex: originalIndex },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
            end: (item, monitor) => {
                const { id: droppedId, originalIndex } = item
                console.log(droppedId, originalIndex, "bothId")
                const didDrop = monitor.didDrop()
                if (!didDrop) {
                    props.moveCard(droppedId, originalIndex)
                }
            },
        }),
        [props.id, originalIndex, props.moveCard]
    )
    const [, drop] = useDrop(
        () => ({
            accept: "card",
            hover({ id: draggedId }) {
                if (draggedId !== props.id) {
                    const { index: overIndex } = props.findCard(props.id)
                    props.moveCard(draggedId, overIndex)
                }
            },
        }),
        [props.findCard, props.moveCard]
    )
    let addItem = (id) => {
        console.log(id)
    }
    return (
        <div
            ref={(node) => drag(drop(node))}
            className=" flex justify-between items-center w-full h-24 my-8 border-2 rounded-2xl border-gray-500 text-textCustom font-thin p-2 px-16 "
        >
            <div className=" flex justify-start items-center w-2/3 h-full gap-4">
                <p className=" select-none  text-sm">{props.id}</p>
                <div
                    className={`w-32 select-none h-full bg-gray-400 rounded-lg`}
                    style={{
                        backgroundImage: `url(${props.photo})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>
                <h3 className=" select-none   text-xl">{props.title}</h3>
                <p className="select-none   text-secondaryColor">
                    {props.username}
                </p>
            </div>
            <p>{props.like}</p>
        </div>
    )
}
