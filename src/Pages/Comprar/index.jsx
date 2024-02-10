import { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";

const Comprar = () => {
    const [tenisData, setTenisData] = useState(data);
    const param = useParams();

/* 
    useEffect(() => {
      fetch('http://localhost:5173/src/json/shoes.json')
      .then(response => response.json()
      .then(setTenisData))
    }, [])
    if(!tenisData || !tenisData.length) return null;
 */

    
    const buscaTenis = () => tenisData.find(tenis => tenis.id === param.id);

    return (   
            <div className="container text-center">
                <h2>{buscaTenis().name}</h2>
                <div>
                    <img src={buscaTenis().image} alt={buscaTenis().name} className="img-fluid"/>
                </div>
                <p className="text-decoration-line-through">De: R${buscaTenis().oldPrice}</p>
                <p className="fw-bold">Por: R${buscaTenis().price}</p>
            </div>
    )
}

export default Comprar;