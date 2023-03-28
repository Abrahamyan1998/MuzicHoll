import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import Container from './Components/Container/Container';
import store from './Redux/store';
import './App.css';
import ScrollTop from './ScrollTop';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ScrollTop />
        <Container />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
