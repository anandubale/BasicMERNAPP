import './App.css';
import RouterCmp from '../src/Router/router'
import Header from './HeaderBlock/header';
import ProductListBlock from './productListBlock/productListBlock';

function App() {
  return (
    <div className="App">
      {/* <RouterCmp/> */}
      <ProductListBlock/>
    </div>
  );
}

export default App;
