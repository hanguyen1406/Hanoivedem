import React, { useState } from "react";
import { Layout, Typography } from "antd";
import "antd/dist/reset.css";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
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
                    <h2 style={{margin:'50px'}}>
                        Khám phá vẻ đẹp thủ đô Hà Nội – Mỗi chuyến đi là một
                        hành trình đáng nhớ, mỗi vé là cơ hội trải nghiệm văn
                        hóa, lịch sử và những cảnh quan tuyệt vời.<br></br>
                        Nhanh tay đặt vé nào !!!
                    </h2>
                </h2>
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a onClick={()=> navigate('/Hanoivedem/dat-ve')}>

                    <button className="btn-book-tour">ĐẶT VÉ NGAY!</button>
                    </a>
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
                        <i class="fas fa-map-marker-alt"></i> Địa chỉ: 171 Phan
                        Đăng Lưu, Trần Thành Ngọ, Kiến An, Hải Phòng
                    </p>
                    <p>
                        <i class="fas fa-phone-alt"></i> Điện thoại: 0862541340
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
