const formatMoney = (amount = 0) => {
  const newAmount = typeof amount === 'string' ? +amount : amount
  const money = newAmount.toFixed(2)
  return `₦ ${money}`
}
const sumAmount = (transactions) => {
  return transactions.reduce((a, b) => +a + +b.amount || 0, 0)
}

const calculateAllDebit = (transactions = []) => {
  const allDebits = transactions.filter(
    (res) => res.transaction_type === 'debit'
  )
  const totalDebit = sumAmount(allDebits)
  return totalDebit
}

const calculateAllCredit = (transactions = []) => {
  const allCredits = transactions.filter(
    (res) => res.transaction_type === 'credit'
  )
  const totalCredits = sumAmount(allCredits)
  return totalCredits
}
export { formatMoney, calculateAllDebit, calculateAllCredit }
