import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';
import React from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
interface Props {
  children: React.ReactElement;
}
function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
  });
}

const NavigationBar: React.FC = () => {
  return (
    <ElevationScroll>
      <AppBar color='inherit'>
        <Toolbar>
          <MobileNavBar />
          <DesktopNavBar />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavigationBar;
