import React, { useContext } from 'react'
import RenderJson from '../components/RenderJson';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const auth = useContext(AuthContext)
  return(
    <div>
      <h1>Home</h1>
      <p>Where all your calculator needs are met</p>
    </div>
  )
};

export default Home;