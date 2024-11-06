import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const LocationSelect = ({ onChange }) => {
  return (<>
    <h1>Chọn địa điểm muốn du lịch</h1>
    <Select placeholder="Chọn địa điểm" style={{ width: 200 }} onChange={onChange}>
      <Option value="van-mieu">Văn Miếu Quốc Tử Giám</Option>
      <Option value="hoa-lo">Nhà Tù Hỏa Lò</Option>
      <Option value="hoang-thanh">Hoàng Thành Thăng Long</Option>
    </Select></>
  );
};

export default LocationSelect;
