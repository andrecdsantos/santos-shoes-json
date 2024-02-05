import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";


const Comprar = () => {
    const [tenisData, setTenisData] = useState();
    const param = useParams();
    useEffect(() => {
      fetch('http://localhost:8080/src/json/shoes.json')
      .then(response => response.json()
      .then(setTenisData))
    }, [])
    if(!tenisData || !tenisData.length) return null;
    
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