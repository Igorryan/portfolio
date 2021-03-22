import React, { useEffect, useState } from 'react';
import * as S from './styles';

import Video from '../../assets/videos/assign.mp4'
import Image from '../../assets/img/assign.png'

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5600)
  }, [])

  return (
    <S.Wrapper className="loading" out={!loading}>
      <img src={Image} alt="assign"/>
      <video onEnded={() => setLoading(false)} playsInline autoPlay muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </S.Wrapper>
  )
}

export default Loading;
