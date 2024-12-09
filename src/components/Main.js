import React, { useState } from "react";
import LocationSelect from "../components/LocationSelect";
import TicketDetail from "../components/TicketDetail";
import { Layout, Typography } from "antd";
import "antd/dist/reset.css";
import Register from "../components/Regis";
import Navbar from "./Navbar";
import { Lienhe } from "./Lienhe";

const { Content } = Layout;

const Main = () => {
    const [location, setLocation] = useState(null);
    const [checkinDate, setCheckinDate] = useState(null);

    const locationDetails = {
        "van-mieu": "VĂN MIẾU QUỐC TỬ GIÁM",
        "hoa-lo": "NHÀ TÙ HỎA LÒ",
        "hoang-thanh": "HOÀNG THÀNH THĂNG LONG",
        "bao-tang": "BẢO TÀNG LỊCH SỬ QUÂN SỰ VIỆT NAM",
    };

    const address = {
        "van-mieu": "58 P. Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội",
        "hoa-lo": "1 P. Hoả Lò, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
        "hoang-thanh": "19c Hoàng Diệu, Điện Biên, Ba Đình, Hà Nội",
        "bao-tang": "Km6+500 Đại lộ Thăng Long, phường Tây Mỗ - Đại Mỗ, quận Nam Từ Liêm, Hà Nội",
    };
    const chitiet = {
        "van-mieu":
            'Văn Miếu – Quốc Tử Giám là quần thể di tích đa dạng, phong phú hàng đầu của thành phố Hà Nội, nằm ở phía Nam kinh thành Thăng Long. Quần thể kiến trúc Văn Miếu – Quốc Tử Giám bao gồm: hồ Văn, khu Văn Miếu – Quốc Tử Giám và vườn Giám, mà kiến trúc chủ thể là Văn miếu (chữ Hán: 文廟) - nơi thờ Khổng Tử, và Quốc tử giám (chữ Hán: 國子監) - trường đại học đầu tiên của Việt Nam. Khu Văn Miếu – Quốc Tử Giám có tường gạch vồ bao quanh, phía trong chia thành 5 lớp không gian với các kiến trúc khác nhau. Mỗi lớp không gian đó được giới hạn bởi các tường gạch có 3 cửa để thông với nhau (gồm cửa chính giữa và hai cửa phụ hai bên). Từ ngoài vào trong có các cổng lần lượt là: cổng Văn Miếu, Đại Trung, Khuê Văn các, Đại Thành và cổng Thái Học.[1] Với hơn 700 năm hoạt động đã đào tạo hàng nghìn nhân tài cho đất nước. Ngày nay, Văn Miếu – Quốc Tử Giám là nơi tham quan của du khách trong và ngoài nước đồng thời cũng là nơi khen tặng cho học sinh xuất sắc và còn là nơi tổ chức hội thơ hàng năm vào ngày rằm tháng giêng. Đặc biệt, đây còn là nơi các sĩ tử ngày nay đến "cầu may" trước mỗi kỳ thi quan trọng.',
        "hoa-lo":
            "Nhà tù Hỏa Lò hay nhà pha Hỏa Lò là một nhà tù do thực dân Pháp xây dựng trên khu đất xưa thuộc làng Hỏa Lò, nay có địa chỉ: số 1 phố Hỏa Lò, phường Trần Hưng Đạo, quận Hoàn Kiếm, Hà Nội, Việt Nam. Nhà tù Hỏa Lò là một địa danh nổi tiếng bởi từng là nơi giam giữ rất nhiều nhà cách mạng lớn của Việt Nam trong Chiến tranh Đông Dương và phi công Mỹ trong Chiến tranh Việt Nam. Địa danh này được Bộ Văn hoá Thể thao và Du lịch của Việt Nam ra quyết định số 1543-QĐ/VH ngày 18/6/1997 công nhận là di tích lịch sử.",
        "hoang-thanh":
            "Hoàng thành Thăng Long (chữ Hán: 昇龍皇城; Hán-Việt: Thăng Long Hoàng thành) là quần thể di tích gắn với lịch sử kinh thành Thăng Long - Đông Kinh và tỉnh thành Hà Nội bắt đầu từ thời kì tiền Thăng Long (An Nam đô hộ phủ thế kỷ VII) qua thời Đinh - Tiền Lê, phát triển mạnh dưới thời Lý, Trần, Lê và thành Hà Nội dưới triều Nguyễn. Đây là công trình kiến trúc các triều vua xây dựng trong nhiều giai đoạn lịch sử và trở thành một trong những di tích quan trọng bậc nhất trong hệ thống các di tích Việt Nam.",
        "bao-tang": "Bảo tàng Lịch sử Quân sự Việt Nam là một trong những bảo tàng quân sự lớn và lâu đời nhất tại Việt Nam, lưu giữ, phát huy các giá trị lịch sử quân sự của dân tộc, thành lập năm 1956, có vị trí ở bên Cột cờ Hà Nội, là địa chỉ quen thuộc đối với du khách trong nước và quốc tế khi đến Thủ đô; từ năm 2020, Quân ủy Trung ương, Bộ Quốc phòng và Tổng cục Chính trị đã triển khai xây dựng Bảo tàng mới tại Km6+500 Đại lộ Thăng Long, phường Tây Mỗ - Đại Mỗ, quận Nam Từ Liêm, Hà Nội, trên diện tích 386.600m², với quy mô 4 tầng nổi, 1 tầng hầm, thiết kế hiện đại, điểm nhấn là Tháp Chiến thắng cao 45m mang ý nghĩa Việt Nam giành độc lập năm 1945, hiện lưu giữ hơn 150.000 hiện vật, gồm 4 bảo vật quốc gia và nhiều hiện vật quý giá."
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
            <Lienhe />
            <Content style={{ padding: "30px", paddingTop: "70px" }}>
                <div style={{ marginBottom: "20px" }}>
                    <LocationSelect
                        locationDetails={locationDetails}
                        onChange={(value) => setLocation(value)}
                    />
                </div>
                <div style={{ justifyContent: "center", display: "flex" }}>
                    <TicketDetail
                        location={location}
                        locationDetails={locationDetails}
                        address={address}
                        chitiet={chitiet}
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
