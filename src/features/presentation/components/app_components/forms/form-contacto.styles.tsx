import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.5rem;
`;

export const Input = styled.input`
    padding: 16px;
    margin-bottom: 20px;
    border: 1px solid #ccc;   
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    color: #7a7a7a;

    &:hover{
      transition: 0.4s;
      border: 1px solid black;
    }

    &:focus{
      border: 1px solid #198eca;
      outline: none;
    }

    &::placeholder {
      color: black;
      font-size: 15px;
      font-family: 'Open Sans', sans-serif;
    }
`;

export const TextArea = styled.textarea`
    padding: 16px;
    margin-bottom: 20px;
    border: 1px solid #ccc;   
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    color: #7a7a7a;
    resize:none;
    height: 180px;

    &:hover{
      transition: 0.3s;
      border: 1px solid black;
    }

    &:focus{
      border: 1px solid #198eca;
      outline: none;
    }

    &::placeholder {
      color: black;
      font-size: 15px;
      font-family: 'Open Sans', sans-serif;
    }

`;

export const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 0;
  color: white;
  background-color: #198eca;
  font-size: 16px;
  cursor: pointer;
  width: 16%;
  &:focus {
    outline: none;
}
`;

export const TextButton = styled.span`
  color: #999999; 
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  margin-top: 1.5rem;
`;

export const TextError = styled.span`
  color: #dc3232;;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 1.8rem;
`;