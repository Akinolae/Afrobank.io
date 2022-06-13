import React from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({ data, datakey, firstLine, secondLine, ...props }) => {
  const trx = data
    .map((data) => {
      const date = new Date(data.transaction_date).toLocaleString()
      const currentDate = date.split(',')
      return {
        ...data,
        transaction_date: currentDate[0],
      }
    })
    .sort()

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={trx}
        margin={{
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="transaction_date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
