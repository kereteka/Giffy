import '../App.css';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Placeholder from './Placeholder';
import { IoSearch } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';



function Main() {
  const apiKEY = process.env.REACT_APP_API_KEY
  const baseURL = process.env.REACT_APP_API_URL

  const sendRequest = (search) => axios.get(baseURL + apiKEY + '&q=' + search).then((response) => {
    console.log(response, 'response')
    setPost(response.data.data);
  });
  const [post, setPost] = useState([])

  const input = useRef(null)
  const placeHolderInput = useRef(null)

  const location = useLocation()

  const debounceReq = debounce(() => {
    const prompt = input.current.value;
    sendRequest(prompt)
  }, 1000)

  useEffect(() => {
    location.pathname !== '/' && sendRequest(location.pathname)
  }, [location])

  const handleChange = (e) => {
    const prompt = input.current.value;
    prompt ? placeHolderInput.current.style.visibility = "hidden" : placeHolderInput.current.style.visibility = ""
    debounceReq()
  }
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-[#121212] pt-5 ">
      <div className='w-[70%] mx-auto'>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='w-14 h-14 absolute rounded ml-[67%] search-container overflow-hidden z-50 '>
          <IoSearch className=' text-white  rotate-90 w-12 h-12 m-1 p-1 cursor-pointer ' onClick={() => sendRequest(input.current.value)} />
        </div>
        <div className='bg-white w-full h-14 rounded'>
          <input
            className={` absolute focus:outline-none  w-[70%] h-14 spin-slow pl-3 bg-transparent z-40`}
            ref={input}
            type='text'
            name='input'
            onChange={handleChange}
          />
          {/* <div className={` ${searching ? ' invisible': ' visible'}`}> */}
          <div ref={placeHolderInput}>
            <Placeholder />
          </div>
        </div>
        <button className='ml-5'></button>
        <div className='flex flex-wrap mt-10'>
          {post.length !== 0 && post.map((item) => <img src={item.images.fixed_width.url} alt='' key={item.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Main;
