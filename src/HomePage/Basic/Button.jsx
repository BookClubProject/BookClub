import styled, { css } from "styled-components";
import { useState } from "react";

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

function Button({ size, variant, children  }) {

  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  
    return (
    <StyledButton
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  );
}

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

export default Button;
