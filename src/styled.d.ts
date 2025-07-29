import 'styled-components';
import type { IThemeType } from './models/models';

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeType {}
}
