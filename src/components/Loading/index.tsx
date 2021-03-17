import React, { useState } from 'react';
import * as S from './styles';

import Video from '../../assets/videos/assign.mp4'

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true)

  return (
    <S.Wrapper className="loading" out={!loading}>
      <video onEnded={() => setLoading(false)} playsInline autoPlay muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </S.Wrapper>
  )
}

export default Loading;
