import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';
import { Estimate } from './Estimate';
import { Hero } from './Hero';
import { Services } from './Services';
import { Works } from './Works';

export const MainScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Estimate />
      <Footer />
    </>
  );
};
