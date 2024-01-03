import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import btu from '../../assets/images/btu.png'
import vekua from '../../assets/images/vekua.png'
import step from '../../assets/images/step.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 const educations = [
    {
      title: "Student",
      company_name: "I. Vekua Physics-Mathematical School ",
      icon: vekua,
      iconBg: "#ffffff",
      date: "2017 - 2022",
      points: [
        "Patriotism & Civic Awareness: The school nurtures patriotism and civic responsibility, fostering active citizens who contribute positively to society.",
        "Respect for the Individual & Skills: Valuing diversity, the school emphasizes skill development alongside academics, shaping well-rounded individuals.",
        "Market Success: The school equips students for economic achievement, empowering them to excel in the market economy and contribute to national progress.",
      ],
    },
    {
      title: "Student",
      company_name: "IT Academy STEP",
      icon: step,
      iconBg: "#ffffff",
      date: "2019 - 2021",
      points: [
        "IT Education: ItStep specializes in providing IT education and training, covering various aspects of the field, including programming, web development, and more.",
        "Global Reach: ItStep has a global presence, making its educational resources accessible to individuals in different countries.",
        "Quality Variation: The quality of ItStep programs and instruction can vary by location and course, so it's essential to research and assess the specific branch or partner you are interested in for the most accurate information.",
      ],
    },
    {
      title: "Student",
      company_name: "Business and Technology University",
      icon: btu,
      iconBg: "#ffffff",
      date: "2022 - Present",
      points: [
        "BTU's Tech Labs & Innovation Focus: Discuss the impact of BTU's labs like AI, blockchain, and industry 4.0 on fostering innovation and hands-on learning.",
        "Nurturing Entrepreneurs at BTU: Explore how BTU cultivates an entrepreneurial spirit, aids startups, and equips students with business skills for the global market.",
        "Digital Integration in Learning: Highlight BTU's tech-driven approach in labs such as cybersecurity and mobile app development, preparing students for tech-centric careers.",
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

const Education = () => {
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
              strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
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

export default Education
