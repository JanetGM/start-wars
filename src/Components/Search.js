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
                            
                                <div key={i} className="card offset-1 mt-5 animated bounce delay-5s mt-5 offset-2" style={{ width : "150px",height:"100px"}} >
                                <h5 className=" title display-1 ml-1">{characters.name}</h5>
                                <div className="border border-primary">
                                <p className="subtitle" >Peso : {characters.mass}.Kg</p>
                                <p className="subtitle">Año : {characters.birth_year}</p>
                                <p className="subtitle">Género : {characters.gender}</p>
                                </div>
                                
                                <div className="card-footer bg-transparent border-success" style={{ width : "150px",height:"20px"}}>
                                <p onClick={()=>
                                {
                                    (showDetails==='on')?setShowDetails('off'):setShowDetails('on')
                                }}>{

                                (showDetails==='on')?<Character info={characters} key={i}/>:null
                                } </p>
                                </div>
                                </div>
                          ):null                    
                    )
                 
                  )
                        
                )
           }
        </>
    )
}
export default Search;