import './App.css';
import MainBar from './components/MainBar/MainBar';
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='breadcrumbs'>Home /&nbsp;<p className='products'>Products</p></div>
      </header>
      <div className='contents'>
        <SideBar/>
        <MainBar/>
      </div>
    </div>
  );
}

export default App;
