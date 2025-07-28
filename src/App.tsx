import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar';

library.add(fas);

const App = () => {
  return <Sidebar color="light" />;
};

export default App;
