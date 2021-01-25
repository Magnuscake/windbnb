import React, { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  height: inherit;
  border: ${({ isFocused }) => (isFocused ? `1px solid #000` : ``)};
  background: #fff;
  position: relative;
  padding: 0.3rem 1rem;
  box-sizing: border-box;
  border-radius: ${({ isFocused }) => (isFocused ? '14px' : '14px 0 0 14px')};
  border-right: 1px solid
    ${({ isFocused }) => (!isFocused ? 'rgba(0, 0, 0, 0.1)' : '#000')};
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 17px 0 0;
  border: none;
  font-size: 1rem;
  box-shadow: none;
`;

const Label = styled.label`
  height: 17px;
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
`;

const Inputbox = ({ label, focused, placeholder, value }, ref) => {
  return (
    <>
      <InputContainer ref={ref} isFocused={focused}>
        <Label>{label}</Label>
        <Input
          type="text"
          placeholder={placeholder}
          value={value ? value : ''}
          readOnly
        />
      </InputContainer>
    </>
  );
};

const forwardInputbox = forwardRef(Inputbox);

export default forwardInputbox;
