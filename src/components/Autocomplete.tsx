import { useSuggestions } from '../hooks/useSuggestions'
import {FormulaElement, useFormulaStore} from '../store/formulaStore'


const Autocomplete = ({ input,setIsOpen }: { input: string ,setIsOpen:(b:boolean)=>void}) => {
    const { data: suggestions } = useSuggestions(input)
    const addElement = useFormulaStore((s) => s.addElement)


    const handleItemClick = (s: FormulaElement) => {
        addElement({
            id: s.id,
            type: 'tag',
            name: s.name,
            value: s.value,
            category: s.category,
        })
        setIsOpen(false)
    }

    if (!suggestions || !input) return null

    return (
        <ul className="absolute w-2xs max-h-100 overflow-y-auto bg-white border mt-1 rounded shadow text-sm z-10">
            {suggestions.map((s: FormulaElement) => (
                <li
                    key={s.id}
                    className="px-3 py-1  hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleItemClick(s)}
                >
                    {s.name}{s.value}
                </li>
            ))}
        </ul>
    )
}
export default Autocomplete
