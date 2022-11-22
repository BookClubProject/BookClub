import React, { useState } from "react";
import "../../CompoCSS/Record.css";
import DropdownList from "react-widgets/DropdownList";
import RecordCancel from "./RecordCancel.jsx";
import RecordDetail from "./RecordDetail.jsx";

function Record() {
  const selectBarData = [
    { id: 0, name: "토론내역" },
    { id: 1, name: "토론취소" },
  ];
  const [selectValue,setSelectValue] = useState(selectBarData[0]);
  const onChange = (value) => 
  {
    setSelectValue(value);
  }

  console.log(selectValue);
  return (
    <div className="record">
      <div className="record_wrap">
        {/* 타이틀 */}
        <div className="record_title">
          <div className="record_select_bar">
            <DropdownList
              dataKey="id"
              textField="name"
              defaultValue={0}
              data={selectBarData}
              value={selectValue}
              onChange={onChange}
            />
          </div>
        </div>
        
        {/* 본문 */}
        <div className="record_main">
          {selectValue.id === selectBarData[0].id
          ? <RecordDetail/>
        : <RecordCancel/>
        }
        </div>
      </div>
    </div>
  );
}

export default Record;
