import styled from 'styled-components';

interface SidebarStyledProps {
  isOpened: boolean;
  isActive?: boolean;
}

const shouldForwardProp = (prop: string) =>
  prop !== 'isOpened' && prop !== 'isActive';

export const SidebarContainer = styled.aside.withConfig({
  shouldForwardProp,
})<SidebarStyledProps>`
  position: relative;
  overflow: ${(props) => (props.isOpened ? 'hidden' : 'visible')};
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: ${(props) => (props.isOpened ? '240px' : '70px')};
  height: calc(100vh - 16px);
  border-radius: 20px;
  padding: 15px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.sidebarBg};
  outline: 2px solid ${(props) => props.theme.sidebarBgActive};
  outline-offset: -5px;
  transition: width 0.3s;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const LogoText = styled.span.withConfig({
  shouldForwardProp,
})<SidebarStyledProps>`
  font-weight: bold;
  color: ${(props) => props.theme.logo};
  white-space: nowrap;
  overflow: 'hidden';
  opacity: ${(props) => (props.isOpened ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const CollapseButton = styled.button.withConfig({
  shouldForwardProp,
})<SidebarStyledProps>`
  position: absolute;
  top: 15px;
  right: ${(props) => (props.isOpened ? '-10px' : '-50px')};
  border: none;
  border-radius: 50%;
  padding: 10px;
  margin-left: auto;
  color: ${(props) => props.theme.text};
  background-color: ${(props) =>
    props.isOpened ? props.theme.sidebarBgActive : props.theme.sidebarBg};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: right 0.3s, background-color 0.3s;
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.button.withConfig({
  shouldForwardProp,
})<SidebarStyledProps>`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 10px;
  text-align: left;
  color: ${(props) =>
    props.isActive ? props.theme.textActive : props.theme.text};
  background-color: ${(props) =>
    props.isActive ? props.theme.sidebarBgActive : 'transparent'};
  cursor: pointer;

  svg {
    min-width: 20px;
    font-size: 20px;
  }

  span {
    margin-left: 12px;
    font-size: 16px;
    white-space: nowrap;
    opacity: ${(props) => (props.isOpened ? 1 : 0)};
    transition: opacity 0.3s;
  }

  &:hover {
    color: ${(props) =>
      props.isActive ? props.theme.textActive : props.theme.textHover};
    background-color: ${(props) =>
      props.isActive
        ? props.theme.sidebarBgActive
        : props.theme.sidebarBgHover};
  }
`;

export const ThemeSwitcherButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 8px;
  color: ${(props) => props.theme.text};
  background-color: transparent;
  cursor: pointer;

  svg {
    min-width: 20px;
    font-size: 20px;
  }

  &:hover {
    color: ${(props) => props.theme.textHover};
    background-color: ${(props) => props.theme.sidebarBgHover};
  }
`;
