import { Navbar } from '../ui/Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Works } from './Works';
import { Estimate } from './Estimate';
import { Footer } from '../ui/Footer';

export const MainScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Estimate/>
      <Footer/>
    </>
  );
};
