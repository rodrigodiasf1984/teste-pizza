import '../styles/tailwind.css';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import { PointsProvider } from '@/contexts/OrderContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PointsProvider>
        <Navbar />
        <ToastContainer autoClose={2000} />
        <Component {...pageProps} />
        <Footer />
      </PointsProvider>
    </>
  );
}

export default MyApp;
