import { useState } from "react";
import "./Carrossel.scss";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { data } from "../../data/data";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";


export const marcas = [
    'Nike',
    'Asics',
    'adidas',
]

const Carrossel = () => {
    const [tenisData, setTenisData] = useState(data);
    const navigateTo = useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: false, 
                     prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
/* 
    useEffect(() => {
        fetch('http://localhost:5173/src/json/shoes.json')
        .then(response => response.json())
        .then(setTenisData);
    }, []);

    if (!tenisData?.length) return null;
     */

    const filterMarca = marca => tenisData.filter(tenis => tenis.name.toUpperCase().includes(marca.toUpperCase()))

    return (
        <div className="carrossel">
            <div className="container">
            <ScrollTopButton/>
                <h2>Compre agora mesmo</h2>
                    {
                        marcas.map((marca, index) => (
                            <section key={index}>
                                <h3>{marca}</h3>
                                <Slider {...settings}>
                                {
                                    filterMarca(marca).map(modelo => 
                                            <img 
                                                src={modelo.image} 
                                                alt={modelo.name} 
                                                className="img-fluid" 
                                                key={modelo.id}
                                                onClick={()=> navigateTo(`comprar/${modelo.id}`)}
                                            />
                                    )
                                }
                                </Slider>
                            </section>
                        ))
                    }
            </div>
        </div>
    );
}

export default Carrossel;