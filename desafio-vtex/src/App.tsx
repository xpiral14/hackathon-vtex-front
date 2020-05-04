import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
// import Header from './components/Header';
import Routes from './routes';

// import AuthContext from './context/AuthContext';


const App: React.FC = () => (
  <>
    <BrowserRouter>
      {/* <Header /> criar private route pra manipular o header */}
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
