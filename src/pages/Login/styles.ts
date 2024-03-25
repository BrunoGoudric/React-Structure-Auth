import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 50px 0 70px;

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

  .forgotPassword {
    width: 100%;
    text-align: right;
    > a {
      font-size: 14px;
      color: #4454a8;
      transition: 0.2s;
    }

    > a:hover {
      color: #2d376d;
    }
  }

  .btnContinue {
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

  .btnContinue:hover {
    background: #2c4198;
  }

  .msgNewUser {
    text-align: center;
    margin-top: 55px;
    > p {
      font-size: 14px;
      font-weight: 500;

      > a {
        font-size: 14px;
        color: #4454a8;
        font-weight: 600;
        transition: 0.2s;
      }
    }
  }
`;
