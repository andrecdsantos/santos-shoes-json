import { useNavigate, useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useEffect, useState } from "react";

const Buscar = () => {
    const param = useParams();
    const navigateTo = useNavigate();
    const [tenisData, setTenisData] = useState();
    useEffect(() => {
        fetch('http://localhost:8080/src/json/shoes.json')
        .then(response => response.json()
        .then(setTenisData))
    }, [])
    if(!tenisData || !tenisData.length) return null;

    const filtraTenis = () => {
        if(param.termo === 'all') return tenisData;

        const keywords = param.termo.trim().split(' ');
        return tenisData.filter(tenis =>
            keywords.every(keyword => 
                tenis.name.toUpperCase().includes(keyword.toUpperCase())
            )
        )
    }

    return (
        <div className="page">
            <Header/>
            <div className="container text-center">
                <h2>Buscar</h2>
                <section className="d-flex flex-wrap justify-content-center">
                    {
                        filtraTenis().map(tenis => 
                                <div key={tenis.id} className="p-3">
                                    <img 
                                        src={tenis.image} 
                                        alt={tenis.name}
                                        onClick={e=> navigateTo(`/comprar/${tenis.id}`)}
                                        />
                                </div>
                            )
                    }
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Buscar;