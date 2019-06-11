import React from 'react';
import { NavLink } from 'react-router-dom';
import Character from './Character';

const Navigation = ({info,state}) => {
  return (
    <div>
    
      <NavLink to="/Home" >Home</NavLink>
      <Character info={info}  position={state}/>
    </div>
  );
};
export default Navigation;
