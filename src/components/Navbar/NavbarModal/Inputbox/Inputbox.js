import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  border: ${(props) => (props.isFocused ? `solid 1px #000` : ``)};
  background: #fff;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 0px rgba(122, 122, 122, 0.6);
  border-radius: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 17px 0 0;
  border: none;
  outline: 0;
`;

const Label = styled.label`
  height: 10px;
  margin: 0 10px;
  position: absolute;
  font-size: 12px;
`;

const Inputbox = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer isFocused={isFocused}>
      <Label>Location</Label>
      <Input
        type="text"
        readOnly
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
};

export default Inputbox;
