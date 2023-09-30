
import React from 'react'
import { TAchievement } from '@/components/section/AchievementsSection'
import { Button } from '../ui/button'

const AchievementCard = ({
  title,
  description,
  event,
  venue,
  link,
  date,
  skills
}: TAchievement) => {
  return (
    <div className="bg-[#1F1F1F] rounded-xl p-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-white text-sm">{description}</p>
      <div className="flex flex-row justify-start items-center mt-4">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="text-white text-xs mr-2 bg-[#33353F] px-2 py-1 rounded-md"
          >
            {skill}
          </p>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-col">
          {/* font bold classname  */}
          <p className="text-sm text-pink-500 font-bold">{event}</p>
          <p className="text-violet-300 text-sm">{venue}</p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
        <Button variant={"outline"} className='bg-[#1F1F1F] hover:bg-purple-600'>
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm"
          >
            View Certificate
          </a>
        </Button>
      </div>
    </div>
  )
}

export default AchievementCard