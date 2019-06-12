import React from 'react';
import Result from './Result';
import Character from './Character';
import Search from './Search';
import Navigation from './Navigation';
import axios from 'axios';
import {useEffect,useState} from 'react';
import '../App.css';
 import {Link} from 'react-router-dom';


const Home = () => {
    const [info, setInfo]= useState([]);
    const [search, setSearch]=useState('');
    const [state, setstate] = useState({x:100,y:100,i:100});
    const allData = [];

    useEffect(() => {
        for(let i =1 ; i<10;i++){
        axios(`https://swapi.co/api/people/?page=${i}`)
        .then(result => {
            allData.push(result.data.results);
            setInfo([...info,allData])
        });
        }
    },[]);

   return (
       <>
       {
           
        (state.x !== 100 && state.y!==100 && state.i!==100)
        ?
       ''
        :( 
        <>
        <p className="title display-2 mt-5">STAR WARS</p>
       <p className="subtitle display-2">PERSONAJES</p>
        <input type="text" className="text-box search border border-primary subtitle" placeholder="  BUSCAR" value={search} onChange={e=> setSearch(e.target.value)}/>
        <p className="subtitle mt-5 mb-0">RESULTADOS</p>
        <div className="square"></div>
        <div className="card-columns">
            {
                (search)
                ? <Search info={info} search={search} state={state} setstate={setstate}/>
                : <Result info={info} search={search}  state={state} setstate={setstate}/>
            }
        </div>
        
        <Navigation  info={info} state={state} setstate={setstate}/>
        </>
        )
       }
       {  <Character  info={info} position={state} state={state} setstate={setstate}/>}
       </>
   )

 }

 export default Home ;