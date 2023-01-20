import React, { useEffect, useRef, useState } from 'react'
import { sendRequest } from '../App';

const Header = () => {
  const tags = ['Reactions', 'Entertainment', 'Sports', 'Sticker', 'Artists']
  const [distance, setDistance] = useState(0);
  const [initialX, setInitialX] = useState(0);

  const elRef = useRef(null);

  const handleMouseEnter = (event) => {
    setInitialX(event.clientX);
  };
  const handleMouseMove = (event) => {
    const currentX = event.clientX;
    const calculatedDistance = (currentX - initialX);
    setDistance(calculatedDistance);
  };

  useEffect(() => {
    elRef.current.style.setProperty('--x', distance + "px");
  }, [initialX, distance]);

  const onHandleClick = (tag) => {
    // sendRequest(tag)
    console.log(tag)
  }
  return (
    <div className='flex h-auto text-white  w-[70%] mx-auto' >
      <p className='text-4xl font-extrabold cursor-pointer pt-1' >
        <a href='/'>
          PYPIHG
        </a>
      </p>
      <div className='ml-4'>
        <ul className='lltPqq ' ref={elRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove}>
          {tags.map((tag) => <li className='list-none eiCihZ ' key={tag}><a className=' hNCazl' href={tag} onClick={() => onHandleClick(tag)}>{tag}</a></li>)}
        </ul>
      </div>
    </div >
  )
}

export default Header
