import React, { useEffect } from 'react';
import { getData } from './actions/index';
import { useDispatch } from 'react-redux';

// import Data from './components/Data';
// import Login from './components/Form/Login';
import SignUp from './components/Form/SignUp';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);

  return (
    <div>
      {/* <Login /> */}
      {/* <Data /> */}
      <SignUp />
    </div>
  );
}

export default App;
