import React from "react";
import "../../CompoCSS/Record.css";
import DropdownList from "react-widgets/DropdownList";
function Record() {
  const selectBarData = [
    { id: 0, name: "토론내역" },
    { id: 1, name: "토론취소" },
  ];

  return (
    <div className="record">
      <div className="record_wrap">
        <div className="record_title">
          <div className="record_select_bar">
            <DropdownList
              dataKey="id"
              textField="name"
              defaultValue={["토론내역"]}
              data={selectBarData}
            />
          </div>
        </div>

        <div className="record_main"></div>
      </div>
    </div>
  );
}

export default Record;
