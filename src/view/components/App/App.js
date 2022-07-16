import * as React from 'react';
import MainMenu from '../MainMenu/MainMenu.tsx';
import '../../assets/stlyes/theme.scss';
import { HomePage } from '../HomePage/HomePage.tsx';

function App() {
  return (
    <>
      <MainMenu></MainMenu>
      <HomePage/>
    </>
  );
}

export default App;
