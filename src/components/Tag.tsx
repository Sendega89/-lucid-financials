import { useState} from 'react'
import {FormulaElement, useFormulaStore} from '../store/formulaStore'

type Props = {
    element: FormulaElement
}

const Tag = ({element}: Props) => {
    const removeElement = useFormulaStore((s) => s.removeElementById)
    const [open, setOpen] = useState(false)


    const handleDelete = (e: any, id: string) => {
        e.stopPropagation()
        removeElement(id)
    }

    return (
        <div className="relative">
            <div
                className="bg-blue-100 px-2 py-1 rounded cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            >
                {element.value}
                <button
                    onClick={(e) => {
                        handleDelete(e, element.id)
                    }}
                    className="ml-2 text-red-500 text-xs"
                >
                    ×
                </button>
            </div>

            {open && (
                <div className="absolute z-10 mt-1 bg-white border shadow rounded w-40 p-2 text-sm">
                    <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                        Edit tag
                    </div>
                    <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                        Change variable
                    </div>
                    <div className="hover:bg-gray-100 px-2 py-1 cursor-pointer text-red-500">
                        <button onClick={(e) => {
                            handleDelete(e, element.id)
                        }}>
                            Delete
                        </button>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Tag
