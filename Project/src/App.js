import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import YearBoard from './Test/YearBoard';
import Information from './Test/Information';
import Information2 from './Test/Information2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<YearBoard/>}></Route>
            <Route path="/information" element={<Information2/>}></Route>
            {/* <Route path="/information" element={<Information/>}></Route> */}ואותו רינדרתיInformation2 -זה ההתחלה ולאחר מכן עשיתי את הבונוס בדף נפרד
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
