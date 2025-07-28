import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bottomRoutes, routes } from '../../data/routes';
import logo from '../../assets/logo.png';

const Sidebar = ({ color }: { color: string }) => {
  console.log('color: ', color); // NOTE: временная заглушка для ts
  const [isOpened, setIsOpened] = useState(false);

  const goToRoute = (path: string) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <div>
      <div>
        <img src={logo} alt="TensorFlow logo" />
        <span>TensorFlow</span>
        <div onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
        </div>
      </div>

      <div>
        {routes.map((route) => (
          <div
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
            }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </div>
        ))}
      </div>

      <div>
        {bottomRoutes.map((route) => (
          <div
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
            }}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
