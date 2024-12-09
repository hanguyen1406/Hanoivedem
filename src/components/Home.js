import React, { useState } from "react";
import { Layout, Typography } from "antd";
import "antd/dist/reset.css";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import hoGuomImg from "../assets/ho-guom/ho-guom.jpg";
import hoGuomImg1 from "../assets/ho-guom/ho-guom-1.jpg";
import hoGuomImg2 from "../assets/ho-guom/ho-guom-2.jpg";
import hoGuomImg3 from "../assets/ho-guom/ho-guom-3.jpg";
import bunChar from "../assets/bun-cha/bun-cha.jpg";
import bunChar1 from "../assets/bun-cha/bun-cha-1.jpeg";
import bunChar2 from "../assets/bun-cha/bun-cha-2.jpeg";
import bunChar3 from "../assets/bun-cha/bun-cha-3.jpg";
import home from "../assets/home.jpg";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

const Home = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Navbar />

            <ImageSlider />
            <div>
                <h2 style={{ textAlign: "center" }}>
                    Khám Phá Thủ Đô Hà Nội – Trái Tim Văn Hóa Nghìn Năm Văn Hiến
                </h2>
                <br></br>
                <div class="content">
                    <div>
                        <h2 class="section-title">
                            Hồ Gươm - Biểu Tượng Thủ Đô
                        </h2>
                        <i class="text-content">
                            Hồ Gươm, một trong những danh lam thắng cảnh nổi
                            tiếng nhất của Hà Nội, mang đậm dấu ấn văn hóa và
                            lịch sử. Dạo bước quanh hồ, bạn sẽ cảm nhận được
                            không khí bình yên và tĩnh lặng giữa lòng thủ đô
                            nhộn nhịp. Hồ Gươm, hay Hồ Hoàn Kiếm, là một trong
                            những biểu tượng nổi bật của Hà Nội. Nằm giữa lòng
                            thành phố, hồ nổi tiếng với vẻ đẹp tự nhiên và những
                            câu chuyện lịch sử, đặc biệt là truyền thuyết về
                            Thanh Gươm và vua Lê Lợi. Xung quanh hồ là những con
                            phố cổ và các công trình kiến trúc Pháp, tạo nên
                            không gian hòa quyện giữa thiên nhiên và đô thị.
                            Tháp Rùa nằm giữa hồ là một điểm nhấn, thu hút nhiều
                            du khách. Đây cũng là nơi người dân Hà Nội thường
                            xuyên đến dạo chơi, thư giãn, tạo nên một không gian
                            thanh bình giữa sự nhộn nhịp của thành phố.
                        </i>
                        <div class="image-container">
                            <img src={hoGuomImg} alt="Hồ Gươm" />
                            <img src={hoGuomImg1} alt="Hồ Gươm" />
                            <img src={hoGuomImg2} alt="Hồ Gươm" />
                            <img src={hoGuomImg3} alt="Hồ Gươm" />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "20px",
                        }}
                    >
                        <button
                            onClick={() => navigate("/Hanoivedem/dat-ve")}
                            className="btn-book-tour"
                        >
                            ĐẶT VÉ NGAY!
                        </button>
                    </div>
                    <div>
                        <h2 class="section-title">
                            Ẩm Thực Hà Nội - Hương Vị Đặc Trưng
                        </h2>
                        <p class="text-content">
                            Khi đến Hà Nội, bạn không thể bỏ qua các món ăn đặc
                            sản như phở, bún chả, và cà phê trứng. Mỗi món ăn
                            đều mang một hương vị độc đáo, là sự kết hợp hoàn
                            hảo của nguyên liệu tươi ngon và bí quyết chế biến
                            lâu đời.
                        </p>
                        <div class="image-container">
                            <img src={bunChar} alt="Phở Hà Nội" />
                            <img src={bunChar1} alt="Bún Chả" />
                            <img src={bunChar2} alt="Cà Phê Trứng" />
                            <img src={bunChar3} alt="Bún Riêu" />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "20px",
                        }}
                    >
                        <button
                            onClick={() => navigate("/Hanoivedem/dat-ve")}
                            className="btn-book-tour"
                        >
                            ĐẶT VÉ NGAY!
                        </button>
                    </div>
                    <h1>
                        Khám phá vẻ đẹp thủ đô Hà Nội – Mỗi chuyến đi là một
                        hành trình đáng nhớ, mỗi vé là cơ hội trải nghiệm văn
                        hóa, lịch sử và những cảnh quan tuyệt vời.<br></br>
                        Nhanh tay đặt vé nào !!!
                    </h1>
                </div>
            </div>
            <hr class="bold-hr"></hr>
            <section class="office-info">
                <h2>Thông tin văn phòng</h2>
                <div class="contact-info">
                    <p>
                        <strong>Công ty Du lịch Hà nội về đêm</strong>
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> Địa chỉ: 144 Xuân
                        Thủy, Cầu Giấy, Hà Nội, Việt Nam
                    </p>
                    <p>
                        <i class="fas fa-phone-alt"></i> Điện thoại: +84 123 456
                        789
                    </p>
                    <p>
                        <i class="fas fa-envelope"></i> Email:
                        support@hanoivedem.com
                    </p>
                    <p>
                        <i class="fas fa-globe"></i> Website:{" "}
                        <a href="https://www.hanoivedem.com" target="_blank">
                            www.hanoivedem.com
                        </a>
                    </p>
                </div>
                <div class="office-hours">
                    <h3>Giờ làm việc</h3>
                    <p>
                        <strong>Thứ Hai - Thứ Sáu:</strong> 8:00 AM - 6:00 PM
                    </p>
                    <p>
                        <strong>Thứ Bảy:</strong> 9:00 AM - 3:00 PM
                    </p>
                    <p>
                        <strong>Chủ Nhật:</strong> Nghỉ
                    </p>
                </div>
                <div class="social-media">
                    <h3>Theo dõi chúng tôi</h3>
                    <a
                        href="https://www.facebook.com/abc.travel"
                        target="_blank"
                    >
                        <i class="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/abc.travel"
                        target="_blank"
                    >
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/company/abc-travel"
                        target="_blank"
                    >
                        <i class="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
