// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  // this is default
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
