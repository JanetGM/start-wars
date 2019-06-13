import React from 'react';
import Character from './Character';

const Search = ({info,search,showDetails,setShowDetails}) => {

    return(
        
         <>
           {
               
              info.map(e=>
                e.map(result=>
                    result.map((characters,i) => 
                       (characters.name===search)
                       ?
                        (
                            <>
                              <p className="title display-1 ml-1 " style={{ textAlign : "left",marginTop:"20%"}}>{(characters.name).toUpperCase()}</p>
                              <div className="border border-primary " style={{ textAlign : "left",width : "350px",height:"150px" , padding:"20px"}} >
                                <p className="subtitle" >Peso : {characters.mass}.Kg</p>
                                <p className="subtitle">Año : {characters.birth_year}</p>
                                <p className="subtitle">Género : {characters.gender}</p>
                              </div>
                                <p onClick={()=>
                                {
                                    (showDetails==='on')?setShowDetails('off'):setShowDetails('on')
                                }}>{

                                (showDetails==='on')?<Character info={characters} key={i}/>:null
                                } </p>
                              
                           </>    
                          ):null                    
                    )
                 
                  )
                        
                )
           }
        </>
    )
}
export default Search;