import { FormulaElement as Element } from '../store/formulaStore'
import Tag from './Tag'
import Operand from './Operand'

type Props = {
    element: Element
}

const FormulaElement = ({ element }: Props) => {
    switch (element.type) {
        case 'tag':
            return <Tag element={element} />
        case 'operand':
            return <Operand element={element} />
        case 'number':
            return <span>{element.value}</span>
        default:
            return null
    }
}

export default FormulaElement
