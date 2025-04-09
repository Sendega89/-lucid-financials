import { FormulaElement } from '../store/formulaStore'

const Operand = ({ element }: { element: FormulaElement }) => {

    return <span className="text-xl mx-1">{element.value}</span>
}

export default Operand
