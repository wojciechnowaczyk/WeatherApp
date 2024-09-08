import {createTheme} from '@rneui/themed';

export const theme = createTheme({
  lightColors: {
    primary: '#FFF4EA',
    secondary: '#C96868',
    background: '#E5C97B',
    white: '#FFFFFF',
  },
  darkColors: {
    primary: 'blue',
  },
  components: {
    Text: {
      style: {
        color: '#FFF4EA',
      },
    },
    Button: {
      buttonStyle: {
        backgroundColor: '#7EACB5',
      },
    },
    Input: {
      style: {
        borderWidth: 1,
        borderColor: '#C96868',
        borderRadius: 5,
      },
    },
  },
});
