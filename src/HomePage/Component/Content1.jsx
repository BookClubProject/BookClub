import "../HomePage.css";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";


function Content1() {
  let [btnData, setbtnData] = useState([
    { id: 1, name: "소설", active: true },
    { id: 2, name: "사회과학", active: false },
    { id: 3, name: "경제경영", active: false },
    { id: 4, name: "정치", active: false },
    { id: 5, name: "역사와 문화", active: false },
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
        <p className="Maintitle">준희형이 추천하는 독서토론~</p>
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
