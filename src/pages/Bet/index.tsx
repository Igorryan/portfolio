import React, { useCallback, useMemo, useState } from 'react';

import * as S from './styles';

import Background from '../../components/Background';

type TipProps = {
  column: number
  coverage: number
  win: number
  winZero: number
  loss: number
}

const Home: React.FC = () => {
  const [balance, setBalance] = useState(0)
  const [tip, setTip] = useState<TipProps>({
    column: 0,
    coverage: 0,
    win: 0,
    winZero: 0,
    loss: 0,
  })
  const [gale, setGale] = useState<TipProps>({
    column: 0,
    coverage: 0,
    win: 0,
    winZero: 0,
    loss: 0,
  })

  const [history, setHistory] = useState<number[]>([])
  const [tips, setTips] = useState<string[]>([])

  useMemo(() => {
    if (balance === 0) {
      setTip({
        column: 0,
        coverage: 0,
        win: 0,
        winZero: 0,
        loss: 0
      })
      return
    }

    const column = balance * 5 / 100
    const coverage = balance * 0.5 / 100
    const win = column - coverage
    const winZero = (coverage * 36) - column - coverage
    const loss = column + column + coverage

    setTip({
      column,
      coverage,
      win,
      winZero,
      loss
    })
  }, [balance])

  useMemo(() => {
    if (balance === 0) {
      setGale({
        column: 0,
        coverage: 0,
        win: 0,
        winZero: 0,
        loss: 0
      })
      return
    }

    const column = balance * 15 / 100
    const coverage = balance * 1.5 / 100
    const win = column - coverage - tip.column - tip.coverage
    const winZero = (coverage * 36) - column - coverage - tip.column - tip.coverage
    const loss = column + column + coverage + tip.column + tip.column + tip.coverage

    setGale({
      column,
      coverage,
      win,
      winZero,
      loss
    })
  }, [balance, tip])

  function handleChangeBalance(value: string) {
    setBalance(value ? Number(value) : 0)
  }

  const handleAddHistory = useCallback((column: number) => {
    setHistory(oldValue => [column, ...oldValue])
  }, [])

  const handleDeleteHistory = useCallback((columnIndex: number) => {
    setHistory(oldValue => oldValue.filter((value, i) => i !== columnIndex))
  }, [])

  function handleClearHistory(){
    setHistory([])
  }

  function handleAddTip(tip: string){
    setTips(oldValue => [...oldValue, tip])
  }

  function handleDeleteTip(tipIndex: number){
    setTips(oldValue => oldValue.filter((value, i) => i !== tipIndex))
  }

  return (
    <S.Container>
      <Background />
      <S.AsideContainer>
        <S.ButtonsContainer>
          <button onClick={() => handleAddTip('✅')}>1ª aposta {"✅"}</button>
          <button onClick={() => handleAddTip('✅ (Gale)')}>Gale {"✅"}</button>
          <button onClick={() => handleAddTip('✅ (2º Gale)')}>2º Gale {"✅"}</button>
          <button onClick={() => handleAddTip('✅ (3º Gale)')}>3º Gale {"✅"}</button>
          <button onClick={() => handleAddTip('🔴')}>RED {"🔴"}</button>
        </S.ButtonsContainer>

        {tips.length !== 0 && (
          <S.TipsContainer>
          <p>Apostas</p>

          <ul>
            {tips.map((tip, i) => (
              <li onClick={() => handleDeleteTip(i)}><span>{i+1}ª </span> <span role="img" arial-label="emoji" key={i}>{tip}</span></li>
            ))}
          </ul>
        </S.TipsContainer>
        )}

      </S.AsideContainer>
      <S.ContentContainer>
        <h3>Playpix Roleta A</h3>

        <S.BalanceQuantity>
          <p>Banca</p>
          <input type="number" placeholder='R$ 0' onChange={(e) => handleChangeBalance(e.target.value)} />
        </S.BalanceQuantity>

        <S.Tip>
          <div className="title">
            <p>Aposta</p>
          </div>

          <div className="content">
            <div className="tip">
              <S.InfoContainer>
                <p>Na coluna</p>
                <div>
                  R$ {tip?.column.toFixed(2)}
                </div>
              </S.InfoContainer>

              <S.InfoContainer>
                <p>Cobrir o zero</p>
                <div>
                  R$ {tip?.coverage.toFixed(2)}
                </div>
              </S.InfoContainer>
            </div>

            <div className="win">
              <S.InfoContainer>
                <p>Win</p>
                <div style={{ background: '#008947' }}>
                  R$ {tip?.win.toFixed(2)}
                </div>
              </S.InfoContainer>

              <S.InfoContainer >
                <p>Win (0)</p>
                <div style={{ background: '#004D28' }}>
                  R$ {tip?.winZero.toFixed(2)}
                </div>
              </S.InfoContainer>
            </div>

            <div className="loss">
              <S.InfoContainer>
                <p>Loss</p>
                <div style={{ background: '#860000' }}>
                  R$ {tip?.loss.toFixed(2)}
                </div>
              </S.InfoContainer>
            </div>

          </div>
        </S.Tip>

        <S.Tip>
          <div className="title" style={{ background: '#613A3A' }}>
            <p>Gale</p>
          </div>

          <div className="content">
            <div className="tip">
              <S.InfoContainer>
                <p>Na coluna</p>
                <div>
                  R$ {gale?.column.toFixed(2)}
                </div>
              </S.InfoContainer>

              <S.InfoContainer>
                <p>Cobrir o zero</p>
                <div>
                  R$ {gale?.coverage.toFixed(2)}
                </div>
              </S.InfoContainer>
            </div>

            <div className="win">
              <S.InfoContainer>
                <p>Win</p>
                <div style={{ background: '#008947' }}>
                  R$ {gale?.win.toFixed(2)}
                </div>
              </S.InfoContainer>

              <S.InfoContainer>
                <p>Win (0)</p>
                <div style={{ background: '#004D28' }}>
                  R$ {gale?.winZero.toFixed(2)}
                </div>
              </S.InfoContainer>
            </div>

            <div className="loss">
              <S.InfoContainer>
                <p>Loss</p>
                <div style={{ background: '#860000' }}>
                  R$ {gale?.loss.toFixed(2)}
                </div>
              </S.InfoContainer>
            </div>

          </div>
        </S.Tip>


        <S.NewColumn>
          <p>Informe a nova saída</p>

          <div>
            <S.ColumnRound column={1} onClick={() => handleAddHistory(1)}>1</S.ColumnRound>
            <S.ColumnRound column={2} onClick={() => handleAddHistory(2)}>2</S.ColumnRound>
            <S.ColumnRound column={3} onClick={() => handleAddHistory(3)}>3</S.ColumnRound>
          </div>
        </S.NewColumn>

        {history.length !== 0 && (
          <>
          <p style={{ fontSize: 12, marginBottom: 8, cursor: 'pointer' }} onClick={handleClearHistory}>clear</p>
            <S.HistoryContainer>
              {history.map((column, i) => (
                <S.ColumnRound key={i} column={column} onClick={() => handleDeleteHistory(i)}>{column}</S.ColumnRound>
              ))}
            </S.HistoryContainer>

          </>
        )}
      </S.ContentContainer>

    </S.Container>
  );
}

export default Home;
