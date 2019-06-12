import React from 'react';

const Search = ({info,search,state,setstate}) => {

    return(
        
      <>
      {
          
         info.map((e,x)=>
           e.map((result,y)=>
               result.map((characters,i,j) =>        
                           <div key={i} className="card offset-1 mt-5 " style={{ width : "350px",height:"100px"}} >
                           <div className="border-success " style={{ width : "150px",height:"100px"}}>
                           <h5 className="card-title mt-2">{characters.name}</h5>
                          <p 
                           onClick={(e)=>{
                               e.preventDefault();
                               setstate({x:x,y:y,i:i});  
                             
                           }}
                          >Detalles</p>
                          
                           </div>
                           </div>
                           
                       
                       )       
                     )
                   )
                   
    }
    
    {<Search info={info} state={state}/>}
 
    </> 
    )
}
export default Search;