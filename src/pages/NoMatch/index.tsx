import React, { ReactElement } from 'react';
import { Container } from './styles';

const NoMatch: React.FC = (props: any): ReactElement => {
  const { location } = props;
  const { pathname } = location;
  return (
    <Container>
      <div className="notfound">
        <div className="notfound-404">
          <h3>
            Oooooops! Page
            {' '}
            <span className="pagetitle">{pathname}</span>
            {' '}
            not found
          </h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default NoMatch;
