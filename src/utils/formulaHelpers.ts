export const isOperator = (val: string) => /^[+\-*/^()]$/.test(val)
export const isNumber = (val: string) => /^\d+$/.test(val)