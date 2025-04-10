import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-black flex flex-col ">
        <Header/>
        <Body />
        <Footer />
    </div>
  );
}

export default App;
