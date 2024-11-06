import React, { useState } from "react";
import { Card, Button, Row, Col, Space } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

export const ButtonAmt = ({ ct }) => {
    const [count1, setCount1] = useState(0);

    return (
        <>
            <Col style={{ display: "flex" }} xs={24} sm={12}>
                <div>
                    <div
                        style={{
                            padding: "0 5px",
                            width: "170px",
                        }}
                    >
                        {ct}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid #d9d9d9",
                            borderRadius: "15px",
                            padding: "0 10px",
                            width: "fit-content",
                        }}
                    >
                        <Button
                            onClick={() =>
                                setCount1(count1 > 0 ? count1 - 1 : 0)
                            }
                            icon={<MinusOutlined />}
                            shape="circle"
                            style={{ border: "none" }}
                        />
                        <span style={{ margin: "0 10px" }}>{count1}</span>
                        <Button
                            onClick={() => setCount1(count1 + 1)}
                            icon={<PlusOutlined />}
                            shape="circle"
                            style={{ border: "none" }}
                        />
                    </div>
                </div>
                <div style={{ margin: "5px" }}>
                    <s>200.000 đ</s>
                    <br />
                    <b style={{ color: "red" }}>150.000 đ</b>
                </div>
            </Col>
        </>
    );
};
