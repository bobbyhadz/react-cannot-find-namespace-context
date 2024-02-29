import React from 'react';

interface UserCtx {
  first: string;
  last: string;
  age: number;
}

const AuthContext = React.createContext<UserCtx | null>(null);

const authContext: UserCtx = {
  first: 'James',
  last: 'Doe',
  age: 30,
};

const App = () => {
  return (
    <AuthContext.Provider value={authContext}>
      <h2>Your app here</h2>
    </AuthContext.Provider>
  );
};

export default App;
