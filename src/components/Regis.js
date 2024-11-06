import React, { useState } from "react";
import { Card, Button, Row, Col, Space, DatePicker } from "antd";
import { ButtonAmt } from "./ButtonAmt";
import CheckinDatePicker from "./DatePicker";

const Register = ({
    location,
    checkinDate,
    locationDetails,
    setCheckinDate,
}) => {
    return (
        <>
            {location && (
                <Card hoverable style={{ width: "90%", marginTop: "15px" }}>
                    <h1>TÙY CHỌN GÓI DỊCH VỤ</h1>
                    <b>
                        Chọn gói dịch vụ cho {locationDetails[location]} (trẻ em
                        dưới 5 tuổi được miễn phí vé)
                    </b>
                    <div style={{ marginBottom: "20px" }}>
                        <CheckinDatePicker
                            onChange={(date) => setCheckinDate(date)}
                        />
                    </div>
                    <Row gutter={16} style={{ marginTop: "16px" }}>
                        <ButtonAmt ct={"Vé người lớn"} />
                        <ButtonAmt
                            ct={
                                "Vé học sinh, sinh viên (giảm 50% vé người lớn)"
                            }
                        />
                    </Row>
                    <div style={{ textAlign: "right" }}>
                        <Button danger type="primary">Tổng tiền : 500.000</Button>
                    </div>
                </Card>
            )}
        </>
    );
};

export default Register;
