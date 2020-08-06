import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    neumorphism: {
      flat: string;
      concave: string;
      convex: string;
      pressed: string;
    };
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    neumorphism?: {
      flat: string;
      concave: string;
      convex: string;
      pressed: string;
    };
  }
}

export const customTheme = createMuiTheme({
  palette: {
    background: {
      default: '#eeeeee',
      paper: '#eeeeee',
    },
    primary: {
      main: 'rgba(109,109,109,1)',
    },
  },
  neumorphism: {
    flat:
      '-7px -7px 20px 0px #fff7, -4px -4px 5px 0px #fff7, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #0009, inset 0px 0px 0px 0px #0001',
    concave:
      '-7px -7px 20px 0px #fff7, -4px -4px 5px 0px #fff7, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #0009, inset 0px 0px 0px 0px #0001',
    convex:
      '-7px -7px 20px 0px #fff7, -4px -4px 5px 0px #fff7, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #0009, inset 0px 0px 0px 0px #0001',
    pressed:
      '0px 0px 0px 0px #fff9,0px 0px 0px 0px #fff9,0px 0px 0px 0px #0001,0px 0px 0px 0px #0001, inset -7px -7px 20px 0px #fff9,inset -4px -4px 5px 0px #fff9, inset 7px 7px 20px 0px #0003,inset 4px 4px 5px 0px #0001',
  },
});
