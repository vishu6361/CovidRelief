import React, { useEffect } from 'react';
// import Login from './components/Form/Login';
import { getData } from './actions/index';
import { useDispatch } from 'react-redux';

import Data from './components/Data';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);

  return (
    <div>
      {/* <Login /> */}
      <Data />
    </div>
  );
}

export default App;
