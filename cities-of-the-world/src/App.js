import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div className="flex-col justify-center items-center ">
    <div className="bg-primary w-full overflow-hidden mb-14">
    <div className={`sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1280px] w-full`}>
       <Navbar/>
      </div>
    </div>
  </div>
  <Home/>
  </div>
  );
}

export default App;
