import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import { data } from "../../data/data";

const Buscar = () => {
    const param = useParams();
    const navigateTo = useNavigate();
    const [tenisData, setTenisData] = useState(data);

/* 
    useEffect(() => {
        fetch('http://localhost:5173/src/json/shoes.json')
        .then(response => response.json()
        .then(setTenisData))
    }, [])
    if(!tenisData?.length) return null;  if(!tenisData || !tenisData.length) 
 */


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
            <div className="container text-center">
                <h2>Buscar</h2>
                <section className="d-flex flex-wrap justify-content-center">
                    {
                        filtraTenis().map(tenis => 
                                <div key={tenis.id} className="p-3">
                                    <img 
                                        src={tenis.image} 
                                        alt={tenis.name}
                                        onClick={()=> navigateTo(`/comprar/${tenis.id}`)}
                                        />
                                </div>
                            )
                    }
                </section>
            </div>
    )
}

export default Buscar;