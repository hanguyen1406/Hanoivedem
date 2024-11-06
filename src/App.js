import React, { useState } from "react";
import LocationSelect from "./components/LocationSelect";
import TicketDetail from "./components/TicketDetail";
import { Layout, Typography } from "antd";
import "antd/dist/reset.css";
import Register from "./components/Regis";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
    const [location, setLocation] = useState(null);
    const [checkinDate, setCheckinDate] = useState(null);

    const locationDetails = {
      "van-mieu": "VĂN MIẾU QUỐC TỬ GIÁM",
      "hoa-lo": "NHÀ TÙ HỎA LÒ",
      "hoang-thanh": "HOÀNG THÀNH THĂNG LONG",
  };

    return (
        <Layout>
            <Header style={{ backgroundColor: "#001529", padding: "10px" }}>
                <Title style={{ color: "#fff", textAlign: "center" }}>
                    Đặt vé tham quan
                </Title>
            </Header>
            <Content style={{ padding: "30px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <LocationSelect onChange={(value) => setLocation(value)} />
                </div>
                <div style={{ justifyContent:'center', display: 'flex' }}>
                    <TicketDetail
                        location={location}
                        checkinDate={checkinDate}
                        locationDetails={locationDetails}
                    />
                </div>
                <div style={{ justifyContent:'center', display: 'flex' }}>
                    <Register
                        location={location}
                        checkinDate={checkinDate}
                        locationDetails={locationDetails}
                        setCheckinDate={setCheckinDate}
                    />
                </div>
            </Content>
        </Layout>
    );
};

export default App;
