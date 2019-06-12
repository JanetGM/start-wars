import React from 'react';
import { NavLink } from 'react-router-dom';
import Character from './Character';
import Result from './Result';

const Navigation = ({info,state,setstate}) => {
  return (
    <div>
      <NavLink  onClick={()=>setstate({x:100,y:100,i:100})}>Home</NavLink>
      <Character info={info}  position={state}/>
      
    </div>
  );
};
export default Navigation;
