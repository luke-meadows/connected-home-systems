import Page from '../components/Page';
import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
