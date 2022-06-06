import Main from "./Main";
import Footer from "./Footer";
import headshot from './assets/headshot.jpg';

function App() {
  return (
    <div className="container mx-auto bg-[#F5F5F5] rounded-xl">
      <img src={headshot} className="rounded-xl"></img>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
