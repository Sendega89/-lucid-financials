import { create } from 'zustand'

export type FormulaElementType = 'tag' | 'operand' | 'number'

export type FormulaElement = {
    id: string
    type: FormulaElementType
    value: string
    name: string
    category: string
}

type FormulaState = {
    formula: FormulaElement[]
    addElement: (el: FormulaElement) => void
    removeElementById: (id: string) => void
    updateElement: (id: string, value: string) => void
    clearFormula: () => void
    removeLastElement: () => void
}

export const useFormulaStore = create<FormulaState>((set) => ({
    formula: [],
    addElement: (el) => set((state) => ({ formula: [...state.formula, el] })),
    removeElementById: (id) =>
        set((state) => ({ formula: state.formula.filter((el) => el.id !== id) })),
    updateElement: (id, value) =>
        set((state) => ({
            formula: state.formula.map((el) =>
                el.id === id ? { ...el, value } : el
            ),
        })),
    removeLastElement: () =>
        set((state) => ({
            formula: state.formula.slice(0, -1),
        })),
    clearFormula: () => set({ formula: [] }),
}))
