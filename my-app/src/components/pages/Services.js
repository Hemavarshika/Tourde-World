import React, {useState,useEffect} from 'react';
import'../../App.css';
import axios from 'axios';

function Services(){
    const[data,setData] = useState(null);
    //const [myArray, datas] = useState([]);
    const [datas, setDatas] = useState(null); 
    async function fetchData(xid){
        try{
            const res = await axios.get('https://api.opentripmap.com/0.1/en/places/xid/'+xid+'?apikey=5ae2e3f221c38a28845f05b61cf9ff614d3e7ce7d8c01eb2ff7f49b6');
            setDatas(datas => [datas,res.data]);
            setData(res.data);
            console.log(datas);
            console.log(res)
            console.log(data.xid);
        }catch(err){
            console.log(err);
        }

    }
    useEffect(()=>{
        const Variables=['N3309149440','R4872552','R3721155','W35107548'];
       // const n= Variable.length;
        for (const [i, Variable] of Variables.entries()) {
            fetchData(Variable);
          }
      
    }, []);
    return(
        <>
           
               {d && <img src={d.preview.source} alt='Test'/>} 
             
        </>
    );

}

export default Services;

