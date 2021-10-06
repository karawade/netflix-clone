import * as React from 'react';
import NavMenu from './NavMenu';

type ChildNode = {
    children?: React.ReactNode;
}

const Layout = ({ children }: ChildNode) => {
    return (
        <React.Fragment>
            <NavMenu />

            {children}

        </React.Fragment>
    );
}

export default Layout;