import '../styles/globals.css';
import '../styles/fontello/css/fontello.css';
import NProgress from 'nprogress';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Page from '../components/main/Page';
import '../styles/nprogress.css';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
