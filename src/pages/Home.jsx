import Header from '../components/Header';
import Menu from '../components/Menu';
import Movies from '../components/Movies';

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <h1>Films</h1>
      <Movies />
    </div>
  );
}
