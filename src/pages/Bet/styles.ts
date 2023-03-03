import styled, { css } from 'styled-components';

type ColumnProps = {
  column: number
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  text-align: center;
  margin-top: 70px;
  position: relative;

  h3 {
    font-weight: 800;
  }
`

export const BalanceQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 55px;

  p {
    margin-bottom: 8px;
  }

  input {
    background: #333333;
    outline: none;
    border: none;
    width: 80px;
    padding: 10px 14px;
    font-size: 14px;
    text-align: center;

    border-radius: 4px;

    font-weight: 800;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`

export const Tip = styled.div`
  display: flex;
  margin-bottom: 20px;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 20px 0 0 20px;
    font-size: 14px;
    background: #3A614E;
    width: 100px;
  }

  .content {
    display: flex;
    gap: 30px;
    padding: 20px;
    border-radius: 0 20px 20px 0;
    background-color: #1B1B1B;

    .tip {
      display: flex;
      gap: 12px;
    }
    .win {
      display: flex;
      gap: 12px;
    }
    .loss {
      display: flex;
      gap: 12px;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 14px;
  }

  div {
    margin-top: 8px;
    font-size: 14px;
    background: #333333;
    font-weight: 700;
    width: 80px;
    padding: 16px 0;
    border-radius: 10px;
  }
`

export const HistoryContainer = styled.div`
  background: #1B1B1B;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  max-width: 625px;
`

export const ColumnRound = styled.div<ColumnProps>`
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50%;

  ${props => props.column === 1 && css`
    background: #0030AC;
  `}

  ${props => props.column === 2 && css`
    background: #9400AC;
  `}

  ${props => props.column === 3 && css`
    background: #AC9100;
  `}
`

export const NewColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 40px;

  p {
    margin-bottom: 32px;
  }
  >div {
    display: flex;
    gap: 30px;
    cursor: pointer;

    >div {
      transform: scale(1.8);
    }
  }

`
