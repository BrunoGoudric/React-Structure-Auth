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

  .btnBox{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .btnReset{
    width: 100%;
    height: 41px;
    border-radius: 12px;
    background: #3e62f0;

    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    transition: 0.2s;
  }

  .btnReset:hover{
    background: #2c4198;
  }

  .btnCancel{
    width: 100%;
    height: 41px;
    border-radius: 12px;
    background: #eee;
    text-align: center;
    padding: 10px 0px;

    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    transition: 0.2s;
  }
  
  .btnCancel:hover{
    background: #838383;
  }
`;
