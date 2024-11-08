import React, { useState } from "react";
import LocationSelect from "../components/LocationSelect";
import TicketDetail from "../components/TicketDetail";
import { Layout, Typography } from "antd";
import "antd/dist/reset.css";
import Register from "../components/Regis";
import Navbar from "./Navbar";

const { Content } = Layout;

const Main = () => {
    const [location, setLocation] = useState(null);
    const [checkinDate, setCheckinDate] = useState(null);

    const locationDetails = {
        "van-mieu": "VĂN MIẾU QUỐC TỬ GIÁM",
        "hoa-lo": "NHÀ TÙ HỎA LÒ",
        "hoang-thanh": "HOÀNG THÀNH THĂNG LONG",
    };

    function generateRandomUppercaseString(length = 5) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Các ký tự viết hoa
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length); // Chọn ngẫu nhiên chỉ số
            result += characters.charAt(randomIndex); // Thêm ký tự vào chuỗi kết quả
        }
        return result;
    }

    return (
        <Layout>
            <Navbar />

            <Content style={{ padding: "30px", paddingTop: "70px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <LocationSelect onChange={(value) => setLocation(value)} />
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                    <TicketDetail
                        location={location}
                        locationDetails={locationDetails}
                    />
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                    <Register
                        location={location}
                        checkinDate={checkinDate}
                        locationDetails={locationDetails}
                        setCheckinDate={setCheckinDate}
                        codedh={generateRandomUppercaseString()}
                    />
                </div>
            </Content>
        </Layout>
    );
};

export default Main;
