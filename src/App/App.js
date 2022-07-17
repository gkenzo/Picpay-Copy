import * as React from 'react';
// import { MenuHeader } from '../widgets/MenuHeader/MenuHeader.tsx';
import { MenuHeader } from '../components/widgets/MenuHeader/MenuHeader.tsx';
import '../assets/stlyes/theme.scss'
import { HomePage } from '../components/temp_pages/HomePage/HomePage.tsx'

function App() {
  return (
    <>
      <MenuHeader></MenuHeader>
      <HomePage />
    </>
  );
}

export default App;
