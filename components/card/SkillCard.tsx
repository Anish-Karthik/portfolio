import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type SkillCardProps = {
  name: string,
  level: number,
  imgUrl: string
}

const SkillCard = ({ name, level, imgUrl }: SkillCardProps) => {
  return (
    <div className='flex '>
      <Image 
        src={imgUrl}
        width={100}
        height={100}
        alt={name}
      />
      <div className='pl-5 2xl:pl-2 pt-5 flex flex-col gap-2 2xl:gap-3'>
        <h1 className='text-2xl font-bold text-white'>{name}</h1>
        <div className='w-40 h-2 bg-gray-700 rounded-full 2xl:max-w-[90%]'>
          <div className={cn('h-full rounded-full', level >= 6 ? 'bg-green-500' : level >= 3 ? 'bg-yellow-500' : 'bg-red-500')} style={{ width: `${level * 10}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard