import React, { useEffect, useRef } from 'react'
import { IoSearch } from 'react-icons/io5'

const Placeholder = () => {

  const textRef = useRef(null);
  // const txts = document.querySelector(".animate-text").children,
  //   txtsLen = txts.length;
  let index = 0;
  const textInTimer = 2000,
    textOutTimer = 1900;

  useEffect(() => {
    const txts = textRef.current.children;
    const txtsLen = txts.length;
    function animateText() {
      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
      }
      txts[index].classList.add("text-in");

      setTimeout(function () {
        txts[index].classList.add("text-out");
      }, textOutTimer)

      setTimeout(function () {

        if (index === txtsLen - 1) {
          index = 0;
        }
        else {
          index++;
        }
        animateText();
      }, textInTimer);
    }
    animateText();
  }, []);


  //window.onload = animateText;
  return (
    <div className=' absolute'>
      <div className="animate-text overflow-hidden" ref={textRef}>
        <span>Gif and sticker search</span>
        <span>Amazing Gifs are here!</span>
        <span>Amazing Gifs are here!</span>
        <span>Gif and sticker search</span>
      </div>
    </div>
  )
}

export default Placeholder