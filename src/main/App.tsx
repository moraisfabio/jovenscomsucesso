import { ReactElement, Suspense } from 'react';
import AppProvider from '../context';
import Routes from '../routes';
import GlobalStyle from '../styles/global';
import '../i18n';

const App: React.FC = (): ReactElement => (
  <>
    <Suspense fallback={null}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Suspense>
    <GlobalStyle />
  </>
);

export default App;
