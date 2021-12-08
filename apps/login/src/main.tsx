import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById('root')
);
