import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Link} from "react-router-dom";

/*
const Products = () => {
  return (
    <div>
      <h3>Products</h3>
      <Link to="/resume" >Go to product</Link>
    </div>
  );
};
export default Products;
*/

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
<App />,
document.getElementById('root')
);
