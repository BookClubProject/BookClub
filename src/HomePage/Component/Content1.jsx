import "../HomePage.css";
import { useState, useEffect } from "react";
// import styled, { css } from "styled-components";

// const SIZES = {
//   small: css`
//     --button-font-size: 0.875rem;
//     --button-padding: 8px 12px;
//     --button-radius: 4px;
//   `,
//   large: css`
//     --button-font-size: 1.25rem;
//     --button-padding: 16px 50px;
//     --button-radius: 12px;
//   `,
// };

// const VARIANTS = {
//   button1: css`
//     --button-color: #ffffff;
//     --button-bg-color: #28a745;
//     --button-hover-bg-color: #218838;
//   `,
//   button2: css`
//     --button-color: #ffffff;
//     --button-bg-color: #dc3545;
//     --button-hover-bg-color: #c82333;
//   `,
//   button3: css`
//     --button-color: #ffffff;
//     --button-bg-color: #ffc107;
//     --button-hover-bg-color: #e0a800;
//   `,
//   button4: css`
//     --button-color: #ffffff;
//     --button-bg-color: #ffc107;
//     --button-hover-bg-color: #e0a800;
//   `,
//   button5: css`
//     --button-color: #ffffff;
//     --button-bg-color: #ffc107;
//     --button-hover-bg-color: #e0a800;
//   `,
// };

// const StyledButton = styled.button`
//   ${(p) => p.sizeStyle}
//   ${(p) => p.variantStyle}

//   margin: 0;
//   border: none;
//   cursor: pointer;
//   font-family: "Noto Sans KR", sans-serif;
//   font-size: var(--button-font-size, 1rem);
//   padding: var(--button-padding, 12px 16px);
//   border-radius: var(--button-radius, 8px);
//   color: var(--button-color, #ffffff);
//   background: var(--button-bg-color, #0d6efd);

//   &:active,
//   &:hover,
//   &:focus {
//     background: var(--button-hover-bg-color, #025ce2);
//   }
// `;

// function Button({ size, variant, value,btnActive,onClick, children }) {
//     const sizeStyle = SIZES[size];
//     const variantStyle = VARIANTS[variant];

//     console.log("다시실행됨");
//     return (
//       <StyledButton
//         sizeStyle={sizeStyle}
//         variantStyle={variantStyle}
//         value = {value}
//         onClick = {onClick}
//         className={"btn" + value + (value === btnActive ? " active" : "")}
//       >
//         {children}
//       </StyledButton>
//     );
//   }

function Content1() {

  let [btnData, setbtnData] = useState([
    { id: 1, name: "버튼1", active: true },
    { id: 2, name: "버튼2", active: false },
    { id: 3, name: "버튼3", active: false },
    { id: 4, name: "버튼4", active: false },
    { id: 5, name: "버튼5", active: false },
  ]);

  const onClick = (item) => {

    let result = btnData.map(k => {
      console.log("k의 id값 " + k.id + "event" + item.id);
      if(k.id ===item.id) {
        return {
          ...k,
          active : true,
        };
      }
      else {
        return {
          ...k,
          active : false,
        };
      }
    });
    setbtnData(result);
  }

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
              return <button key={item.id} onClick={ () => onClick(item)} style = { item.active === true ? {backgroundColor : "yellow"} :{backgroundColor : "blue"}}>{item.name} </button>;
            })}
          </ul>
        </div>
      </section>
    </article>
  );
}

export default Content1;
