import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bottomRoutes, routes } from '../../data/routes';
import { themes } from '../../themes';
import type { TColor } from '../../models/models';
import {
  CollapseButton,
  Header,
  LogoImg,
  LogoText,
  NavWrapper,
  NavItem,
  SidebarContainer,
  ThemeSwitcherButton,
} from './Sidebar.styles';
import logo from '../../assets/logo.png';

interface ISidebarProps {
  color: TColor;
}

const Sidebar = ({ color }: ISidebarProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const [themeName, setThemeName] = useState<TColor>(color);
  const [activeRoute, setActiveRoute] = useState<string>(routes[0].title);

  const handleCollapseSidebar = () => {
    setIsOpened((prev) => !prev);
  };

  const handleMenuItemClick = (title: string) => {
    setActiveRoute(title);
  };

  const handleToggleTheme = () => {
    setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <SidebarContainer isOpened={isOpened}>
        <Header>
          <LogoImg src={logo} alt="logo" />
          <LogoText isOpened={isOpened}>TensorFlow</LogoText>
          <CollapseButton isOpened={isOpened} onClick={handleCollapseSidebar}>
            <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
          </CollapseButton>
        </Header>

        <NavWrapper>
          {routes.map((route) => (
            <NavItem
              key={route.title}
              isOpened={isOpened}
              isActive={activeRoute === route.title}
              onClick={() => handleMenuItemClick(route.title)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </NavItem>
          ))}
        </NavWrapper>

        <NavWrapper>
          {bottomRoutes.map((route) => (
            <NavItem
              key={route.title}
              isOpened={isOpened}
              isActive={activeRoute === route.title}
              onClick={() => handleMenuItemClick(route.title)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </NavItem>
          ))}
        </NavWrapper>

        <ThemeSwitcherButton onClick={handleToggleTheme}>
          <FontAwesomeIcon icon={themeName === 'light' ? 'moon' : 'sun'} />
        </ThemeSwitcherButton>
      </SidebarContainer>
    </ThemeProvider>
  );
};

export default Sidebar;
