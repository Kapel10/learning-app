import { ICard } from './model.ts'
import { FC } from 'react'

interface CardProps {
  title: string
  metric: ICard
}

const Card: FC<CardProps> = ({ title, metric }) => {
  return (
    <div
      className='border-[1px] border-black'
      style={{ width: metric.width, height: metric.height }}
    >
      {title}
    </div>
  )
}

export default Card
