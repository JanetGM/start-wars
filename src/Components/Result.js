import React from 'react';
import Character from './Character';



const Result = ({info,state,setstate}) => {
    //states
    
    return (
            <>
           {
               
              info.map((e,x)=>
                e.map((result,y)=>
                    result.map((characters,i,j) =>        
                    <div className="mt-5 offset-2" >
                    <p className="title display-1 ml-1 " style={{ textAlign : "left",marginTop:"20%"}}>{(characters.name).toUpperCase()}</p>
                     <div className="border border-primary " style={{ textAlign : "left",width : "350px",height:"150px" , padding:"20px"}} >
                     <p className="subtitle" >Peso : {characters.mass}.Kg</p>
                     <p className="subtitle">Año : {characters.birth_year}</p>
                     <p className="subtitle">Género : {characters.gender}</p>
                     </div>
                  
                               <p 
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setstate({x:x,y:y,i:i});  
                                  
                                }}
                               >Detalles</p>
                               
                               
                            </div>
                                
                            
                            )       
                          )
                        )
                        
         }
         
         {<Character info={info} position={state}/>}
      
         </>     
    )
}
export default Result;