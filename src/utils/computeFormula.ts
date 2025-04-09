import { FormulaElement } from '../store/formulaStore'
import { evaluate } from 'mathjs'

const dummyVars: Record<string, number> = {
    Revenue: 1000,
    Costs: 500,
    Profit: 800,
}

export const computeFormula = (formula: FormulaElement[]): string => {
    try {
        const expression = formula
            .map((el) => {
                if (el.type === 'tag') return dummyVars[el.value] ?? 0
                return el.value
            })
            .join(' ')

        const result = evaluate(expression)
        return result ? `= ${result}` : ""
    } catch (e) {
        return 'Invalid formula'
    }
}
