import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import Page from '../components/main/Page';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
