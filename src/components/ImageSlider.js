import React, { useState, useEffect } from "react";

import img1 from "../assets/hoang-thanh/5.jpg";
import img2 from "../assets/hoang-thanh/1.jpg";
import img3 from "../assets/van-mieu/1.jpg";
import img4 from "../assets/home.jpg";
import img5 from "../assets/van-mieu/2.jpg";
import img6 from "../assets/van-mieu/3.jpg";
import { useNavigate } from "react-router-dom";

const ImageSlider = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    const handleThumbnailClick = (index) => setCurrentIndex(index);
    const handlePrevClick = () =>
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    const handleNextClick = () =>
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    return (
        <div className="slider-container">
            {/* Slider bên trái */}
            
            <div className="slider-wrapper">
                <div className="slider">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            style={{
                                display:
                                    index === currentIndex ? "block" : "none",
                                width: "100%",
                                maxWidth: "600px",
                                height: "auto",
                                maxHeight: "300px",
                                borderRadius: "10px",
                            }}
                        />
                    ))}
                </div>
                {/* Nút chuyển ảnh */}
                <button
                    className="navigation prev-btn"
                    onClick={handlePrevClick}
                >
                    &#8249;
                </button>
                <button
                    className="navigation next-btn"
                    onClick={handleNextClick}
                >
                    &#8250;
                </button>
                {/* Thumbnail */}
                <div className="thumbnails">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            onClick={() => handleThumbnailClick(index)}
                            style={{
                                width: "60px",
                                height: "40px",
                                cursor: "pointer",
                                border:
                                    currentIndex === index
                                        ? "2px solid blue"
                                        : "1px solid gray",
                                opacity: currentIndex === index ? 1 : 0.6,
                                borderRadius: "5px",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Mô tả bên phải */}
            <div className="description">
                <h2 class="tour-title">HÀ NỘI VỀ ĐÊM</h2>
                <p class="tour-destinations">
                   Khám phá các địa điểm như: Hoàng Thành Thăng Long, nhà tù Hỏa Lò, Văn Miếu Quốc Tử Giám,...
                </p>
                <p class="tour-price">
                    <strong>Giá chỉ từ:</strong>
                    <br></br>
                    <span class="price-old">200.00 VND</span>
                    <br></br>
                    <span class="price-new">300.000 VND</span>
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a onClick={()=> navigate('/Hanoivedem/dat-ve')}>

                    <button className="btn-book-tour">ĐẶT VÉ NGAY!</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
