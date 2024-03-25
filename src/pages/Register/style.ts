import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 50px 0 70px;

  > header,
  img {
    margin-top: 50px;
  }

  > div,
  span {
    font-size: 24px;
    font-weight: bold;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 275px;

    > input {
      width: 100%;
      height: 42px;
      margin-bottom: 25px;
      padding: 0 10px;
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }

  .btnRegister {
    width: 275px;
    height: 41px;
    border-radius: 12px;
    background: #3e62f0;

    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin-top: 32px;
    transition: 0.2s;
  }

  .btnRegister:hover {
    background: #2c4198;
  }

  
`;
