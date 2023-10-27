import { createGlobalStyle } from 'styled-components';

import LeagueSpartanBlack from './LeagueSpartan-Black.ttf';
import LeagueSpartanBold from './LeagueSpartan-Bold.ttf';
import LeagueSpartanExtraBold from './LeagueSpartan-ExtraBold.ttf';
import LeagueSpartanExtraLight from './LeagueSpartan-ExtraLight.ttf';
import LeagueSpartanLight from './LeagueSpartan-Light.ttf';
import LeagueSpartanMedium from './LeagueSpartan-Medium.ttf';
import LeagueSpartanRegular from './LeagueSpartan-Regular.ttf';
import LeagueSpartanSemiBold from './LeagueSpartan-SemiBold.ttf';
import LeagueSpartanThin from './LeagueSpartan-Thin.ttf';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'LeagueSpartanRegular';
        src: url(${LeagueSpartanRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'LeagueSpartanBold';
        src: url(${LeagueSpartanBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }
`

export default GlobalStyles;