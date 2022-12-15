import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeConfig } from '../theme';
import { Header } from '../components/page/header';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeConfig>
      <Header />
      <Component {...pageProps} />
    </ThemeConfig>
  );
};

export default App;
