import './App.css';
import MyTest from './components/MyTest';

function App() {

  return (
    <div>

      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container">

          <a href="/" className="d-flex align-items-center  me-auto me-lg-0">
            <span className='fs-4'>ToaiNguyennn</span>
          </a>

        </div>
      </header >

      <main>
        <div className='container'>
          <MyTest />
        </div>
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          {/* <div className="copyright">
            &copy; Copyright <strong><span>PhotoFolio</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="/">ToaiNguyen</a>
          </div> */}
        </div>
      </footer>
    </div >
  );

}

export default App;