import "../HomePage.css";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";


const style = {
  backGround1 : {

  },
  backGround2 : {

  },
  backGround3 : {

  },
  backGround4 : {

  },
  backGround5 : {

  },
}
function Content1() {
  let [btnData, setbtnData] = useState([
    { id: 1, name: "버튼1", active: true },
    { id: 2, name: "버튼2", active: false },
    { id: 3, name: "버튼3", active: false },
    { id: 4, name: "버튼4", active: false },
    { id: 5, name: "버튼5", active: false },
  ]);

  let [image, setImage] = useState(1);

  const onClick = (item) => {
    let result = btnData.map((k) => {
      if (k.id === item.id) {
        return {
          ...k,
          active: true,
        };
      } else {
        return {
          ...k,
          active: false,
        };
      }
    });
    setbtnData(result);
    setImage((prev) => item.id);
  };

  return (
    <article className={"Content1 backGround"+image}>
      <section className="Content1-session">
        <p className="Maintitle">조준희가 추천하는 독서토론~</p>
        <p className="Subtitle">
          책을 즐기는 다양한 방법, 준희에게 물어보세요!
        </p>
        <div className="Content-btn">
          <ul>
            {btnData.map((item, idx) => {
              return (
                <button
                  key={item.id}
                  onClick={() => onClick(item)}
                  className ={(item.active === true
                         ? "category_btn " + "active on" +item.id
                         :"category_btn " + item.id)}
                  // style={
                  //   (item.active === true
                  //     ? { backgroundColor: "yellow" }
                  //     : btnStyle.button)
                  // }
                >
                  {item.name}
                </button>
              );
            })}
          </ul>
        </div>
      </section>
    </article>
  );
}

export default Content1;
