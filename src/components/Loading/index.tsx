import React, { useEffect, useState } from 'react';
import * as S from './styles';

import Image from '../../assets/img/assign.gif'

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <S.Wrapper className="loading" out={!loading}>
      <img src={Image} alt="assign"/>
    </S.Wrapper>
  )
}

export default Loading;
