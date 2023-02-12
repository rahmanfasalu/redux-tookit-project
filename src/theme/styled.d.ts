// import original module declarations
import 'styled-components';

// and extend theme!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      default: string;
      focused: string;
      hover: string;
      main: string;
      subText:string;
    };
  }
}
