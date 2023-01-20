import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main'

const App = () => {
  return (
  <div className='flex flex-col bg-[#121212] pt-5'>
    <Header />
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Reactions" element={<Main />} />
        <Route path="/Entertainment" element={<Main />} />
        <Route path="/Sports" element={<Main />} />
        <Route path="/Sticker" element={<Main />} />
        <Route path="/Artists" element={<Main />} />
      </Routes>
    </Suspense>
    </Router>
  </div>
  
    // <div className='flex flex-col bg-[#121212] pt-5'>
    //   <Header />
    //   <Main />
    // </div>
  )
}

export default App