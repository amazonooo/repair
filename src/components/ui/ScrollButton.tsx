'use client'

import { FC, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const headerHeight = 610
  
  const toggleVisibility = () => {
    if (window.scrollY > headerHeight) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  } 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className='fixed bottom-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 right-2 z-50'>
      {isVisible && (
        <button onClick={scrollToTop} className={`bg-primary text-white cursor-pointer border-none p-3 sm:p-4 md:p-5 rounded-full hover:translate-y-[-5px] transition-transform duration-500 ${
          isVisible ? 'animate-fadeIn' : 'animate-fadeOut'
        }`}>
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default ScrollButton