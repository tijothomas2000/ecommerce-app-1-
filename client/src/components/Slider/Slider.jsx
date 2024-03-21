import React, { useEffect, useState, useRef } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.css";

export default function Slider() {

    const data = [
        {
            id: 0,
            img: "https://www.calvinklein.com.my/dw/image/v2/BGLQ_PRD/on/demandware.static/-/Library-Sites-calvin-klein-shared-library/default/dw8e114a4c/Jungkook/JK%20banner%20desktop.jpg"
        },
        {
            id: 1,
            img: "https://www.calvinklein.com.my/dw/image/v2/BGLQ_PRD/on/demandware.static/-/Library-Sites-calvin-klein-shared-library/default/dwc1cf9de7/Jungkook/CK%20Jungkook%20fw23%20hero%20tees.jpg"
        },
        {
            id: 2,
            img: "https://www.calvinklein.com.my/dw/image/v2/BGLQ_PRD/on/demandware.static/-/Library-Sites-calvin-klein-shared-library/default/dw79c3534e/Jungkook/JK%20new%20update%20image%20desktop2.jpg"
        },
        {
            id: 3,
            img: "https://www.calvinklein.com.my/dw/image/v2/BGLQ_PRD/on/demandware.static/-/Library-Sites-calvin-klein-shared-library/default/dw6ec01eb8/Jungkook/JK%20new%20update%20image%20desktop.jpg"
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    function prevSlide() {
        setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
    }
    function nextSlide() {
        setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
    }
    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((item) => (
                    <img key={item.id} src={item.img} />
                ))}
            </div>
            <div className='slideDot'>
                {data.map((item) => (
                    <div key={item.id} className={`slideshowDot${currentSlide === item.id ? " active" : ""}`}
                        onClick={() => {
                            setCurrentSlide(item.id);
                        }}>
                    </div>))
                }
            </div>
            <div className="slider-icons">
                <div className="slider-icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="slider-icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}
