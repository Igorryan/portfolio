import React from 'react';

import * as S from './styles'

const Background: React.FC = () => (
  <S.Wrapper>
    <div className="stars">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>
    <div className="comets">
      <div className="comet comet-01"></div>
      <div className="comet comet-02"></div>
      <div className="comet comet-03"></div>
      <div className="comet comet-04"></div>
    </div>
  </S.Wrapper>
)

export default Background;
