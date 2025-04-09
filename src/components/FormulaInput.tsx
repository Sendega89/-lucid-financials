import { useFormulaStore } from '../store/formulaStore'
import FormulaElement from './FormulaElement'
import Autocomplete from './Autocomplete'
import { useState } from 'react'
import {isOperator} from "../utils/formulaHelpers.ts";
import {isNumber} from "mathjs";
import {computeFormula} from "../utils/computeFormula.ts";
import * as React from "react";

const FormulaInput = () => {
    const { formula, removeLastElement } = useFormulaStore()
    const addElement = useFormulaStore((s) => s.addElement)
    const [inputValue, setInputValue] = useState('')
    const result = computeFormula(formula)
    const [isOpen, setIsOpen] = useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        setIsOpen(true)
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && inputValue === '') {
            e.preventDefault()
            removeLastElement()
            return
        }
        if (e.key === 'Enter' && inputValue.trim()) {
            const trimmed = inputValue.trim()
            const id = crypto.randomUUID()

            if (isOperator(trimmed)) {
                addElement({ id, type: 'operand', value: trimmed,name:trimmed,category:"category" })
            } else if (isNumber(trimmed)) {
                addElement({ id, type: 'number', value: trimmed,name:trimmed,category:"category" })
            } else {
                addElement({ id, type: 'tag', value: trimmed,name:trimmed,category:"category" })
            }

            setInputValue('')
        }
    }

    return (
        <>
        <div className="flex flex-wrap items-center gap-2 border p-4 rounded">
            {formula.map((el) => (
                <FormulaElement key={el.id} element={el} />
            ))}
            <input
                className="outline-none px-2 py-1 min-w-[80px]"
                placeholder="Type to add..."
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}

            />
            {isOpen && (
                <Autocomplete input={inputValue} setIsOpen={setIsOpen} />
            )}


        </div>
    <div className="text-sm text-green-600 mt-2">{result}</div> </>
    )
}

export default FormulaInput
