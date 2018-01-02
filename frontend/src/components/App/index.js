// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { Header, Footer } from '../../components';

// Containers
import { Register, Round, Winner, Ranking } from '../../containers';

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
`;

const App = () => {
    return (
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/round" component={Round} />
            <Route exact path="/winner" component={Winner} />
            <Route exact path="/ranking" component={Ranking} />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
};

export default App;
