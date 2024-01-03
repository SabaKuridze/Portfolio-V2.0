import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import pyme from '../../assets/images/pyme.png'
import dorado from '../../assets/images/dorado.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 const educations = [
    {
      title: "Frond-End Developer",
      company_name: "Dorado / Start-Up",
      icon: dorado,
      iconBg: "#ffffff",
      date: "2020 Nov - 2021 Nov",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer / Intern",
      company_name: "Pyme",
      icon: pyme,
      iconBg: "#ffffff",
      date: "2022 Nov - 2023 Jan",
      points: [
        "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      className='style'
      contentStyle={{
        background: "#115173",
        color: "#ffffff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #115173" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={education.icon}
            alt={education.company_name}
            className='logostyle'
          />
        </div>
      }
    >
      <div>
        <h3 className='h3style text-white text-[24px] font-bold'>{education.company_name}</h3>
        <p
          
          className='pstyle text-secondary text-[16px] font-semibold'
        >
          {education.title}
        </p>
      </div>
        <ul>
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='listyle text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
        </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>

      <div className='divstyle mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>
         
      </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience