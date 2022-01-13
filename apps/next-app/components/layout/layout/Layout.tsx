import MainNavigation from '../main-nav/MainNavigation';
import classes from './Layout.module.css';
import { ReactElement } from 'react';

interface LayoutProps {
  children: ReactElement;
}

function Layout(props: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
