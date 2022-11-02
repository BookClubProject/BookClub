import "../HomePage.css";
import { useState, useEffect } from "react";
import Button from "../Basic/Button";
function Content1() {
  let btnData = ["버튼1", "버튼2", "버튼3", "버튼4", "버튼5"];
  let [btnActive, setBtnActive] = useState(0);
  const buttonActive = (event) => {
    event.preventDefault();
    setBtnActive(event.target.value);
  };

  return (
    <article className="Content1">
      <section className="Content1-session">
        <p className="Maintitle">조준희가 추천하는 독서토론~</p>
        <p className="Subtitle">
          책을 즐기는 다양한 방법, 준희에게 물어보세요!
        </p>
        <div className="Content-btn">
          <ul>
            {btnData.map((item, idx) => {
              return (
                <Button
    
                    size = {idx === btnActive ? "large" : "small"}
                    onClick={buttonActive}
                >
                  {item}
                </Button>
              );
            })}
          </ul>
        </div>
        <div className=""></div>
      </section>
    </article>
  );
}

export default Content1;
