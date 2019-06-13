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
                            
                                <div key={i} className="card offset-1 mt-5 animated bounce delay-5s" style={{ width : "150px",height:"100px"}} >
                                <h5 className="card-title">{characters.name}</h5>
                                <p>Peso : {characters.mass}.Kg</p>
                                <p>Año :{characters.birthay_year}</p>
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