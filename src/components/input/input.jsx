import styled from "@emotion/styled";

//#region
const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: ${(props)=>props.width ? props.width : "100%"};
  height: ${(props)=>props.height ? props.height : "100%"};
  padding: 0 10px;
  font-size: 17px;
`;

const StyledLabel = styled.label`
  align-self: flex-start;
  width: auto;
  color: #aaa1a1;
  font-weight: bold;
`;

const BodyInput = styled.input`
  background-color: red;
  font-size: 1rem;
  border: none;
  background: none;
  outline: none;
  width: 100%;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
//#endregion

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  width,
  onKeyUp,
  height,
  label
}) {
  return (
    <DivInput width={width} height={height}>
      <StyledLabel>{label}</StyledLabel>
      <BodyInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        required
      />
    </DivInput>
  );
}

export default Input;