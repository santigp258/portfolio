import { Navbar } from '../ui/Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Works } from './Works';
/* import { Footer } from '../ui/Footer';
import { Estimate } from './Estimate';
 */

export const MainScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Works />
    </>
  );
};
