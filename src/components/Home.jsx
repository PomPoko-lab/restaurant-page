import GreetPage from './GreetPage';
import ContactUs from './ContactUs';
import Menu from './Menu';

const Home = ({ viewState }) => {
  return (
    <main>
      {viewState === 'home' && <GreetPage />}
      {viewState === 'contact' && <ContactUs />}
      {viewState === 'menu' && <Menu />}
    </main>
  );
};

export default Home;
