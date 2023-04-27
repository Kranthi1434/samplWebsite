
import './App.css';
import HeaderOne from './HeaderOne';
import HeaderThree from './HeaderThree';
import HeaderTwo from './HeaderTwo';
import Sample from './Sample';
import { Route } from './route';

function App() {
  return (
    <>
      <HeaderOne/>
      <HeaderTwo/>
      <HeaderThree/>
      {/* <Sample/> */}
      <Route/>
    </>
  );
}

export default App;
