import { Theme } from '@rneui/themed';

export interface CustomTheme extends Theme {
  colors: {
    primary: string;
    secondary?: string;
    background: string;
  };
}