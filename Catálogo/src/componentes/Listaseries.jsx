import axios from "axios";
import React, {useState, useEffect} from "react";
import { Cardseries } from "./Cardseries";
import { Modalseries } from "./Modalseries";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Listaseries(){
    const[series, setSeries] = useState([]);
    const[SelectedSerie, setSelectdSerie] = useState(null)
    //()parametros {}script de programação , []dependencias
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
        .then(response=>{
            console.log(response.data.results);
            setSeries(response.data.results);
        })
        .catch(error=> {
            console.log('erro'. error);
        })
    },[])

    const handleOpenModal= (series) =>{
        setSelectdSerie(series);
    }

    const handleCloseModal=()=>{
        setSelectdSerie(null);
    }

    return(
        <div>
            <figure>
                {series.map(serie=>(
                    <Cardseries key={serie.id}
                    serie={serie}
                    onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedSerie &&(<Modalseries serie={SelectedSerie} onClose={handleCloseModal}/>)}
        </div>
    )
}