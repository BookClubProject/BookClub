import "../HomePage.css";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

// const styles = {
//   wrapper: {
//     height: "100%",
//     width: "100%",
//   },
//   messageText: {
//     color: "black",
//     fontSize: 16,
//   },
// };

const SIZES = {
  small: css`
    --button-font-size: 0.875rem;
    --button-padding: 8px 12px;
    --button-radius: 4px;
  `,
  large: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 50px;
    --button-radius: 12px;
  `,
};

const VARIANTS = {
  button1: css`
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  button2: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  button3: css`
    --button-color: #ffffff;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
  button4: css`
    --button-color: #ffffff;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
  button5: css`
    --button-color: #ffffff;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `,
};

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }
`;

const btnStyle = {
  button: {
    margin: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: '"Noto Sans KR", sansSerif',
    fontSize: "1rem",
    padding: "12px 16px",
    borderRadius: "8px",
    color: "#ffffff",
    background: "#0d6efd",
    // &:active,
    // &:hover,
    // &:focus {
    //   background: "#025ce2",
    // }
  },

  button1: {
    margin: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: '"Noto Sans KR", sansSerif',
    fontSize: "1.25rem",
    padding: "16px 50px",
    borderRadius: "12px",
    color: "#ffffff",
    background: "#28a745",
  },
  button1: {
    margin: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: '"Noto Sans KR", sansSerif',
    fontSize: "1.25rem",
    padding: "16px 50px",
    borderRadius: "12px",
    color: "#ffffff",
    background: "#28a745",
  },
  button1: {
    margin: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: '"Noto Sans KR", sansSerif',
    fontSize: "1.25rem",
    padding: "16px 50px",
    borderRadius: "12px",
    color: "#ffffff",
    background: "#28a745",
  },
  button1: {
    margin: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: '"Noto Sans KR", sansSerif',
    fontSize: "1.25rem",
    padding: "16px 50px",
    borderRadius: "12px",
    color: "#ffffff",
    background: "#28a745",
  },
  button1: {
    margin: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: '"Noto Sans KR", sansSerif',
    fontSize: "1.25rem",
    padding: "16px 50px",
    borderRadius: "12px",
    color: "#ffffff",
    background: "#28a745",
  },
};

function Content1() {
  let [btnData, setbtnData] = useState([
    { id: 1, name: "버튼1", active: true },
    { id: 2, name: "버튼2", active: false },
    { id: 3, name: "버튼3", active: false },
    { id: 4, name: "버튼4", active: false },
    { id: 5, name: "버튼5", active: false },
  ]);

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
