import React from 'react';
import '../App.css' ;
import Navigation from './Navigation';
const Character = ({info,position,state,setstate}) => {
return (
    <>
    {
    
      (position!=null)
      ?info.map((e,x)=>
      e.map((result,y)=>
          result.map((characters,i,j) =>  
                  (x===position.x && y===position.y && i===position.i)
                  ?(
                    <>
                    <div className="mt-5 offset-2" >
                     <p className="title display-1 ml-1 " style={{ textAlign : "left",marginTop:"20%"}}>{(characters.name).toUpperCase()}</p>
                      <div className="border border-primary " style={{ textAlign : "left",width : "350px",height:"150px" , padding:"20px"}} >
                      <p className="subtitle" >Peso : {characters.mass}.Kg</p>
                      <p className="subtitle">Año : {characters.birth_year}</p>
                      <p className="subtitle">Género : {characters.gender}</p>
                      <p></p>
                      </div>
                    </div>
                    <Navigation  info={info} state={state} setstate={setstate}/>
                    </>
                    )
                  :''
                  )       
                )
              )
       :console.log('no has seleccionado nada')
             
      
      }
      
     
   </>
)
}
export default Character;