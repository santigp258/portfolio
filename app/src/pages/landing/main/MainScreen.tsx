import { Navbar } from '../ui/Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
/* import { Footer } from '../ui/Footer';
import { Estimate } from './Estimate';
import { Works } from './Works'; */

export const MainScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
};
