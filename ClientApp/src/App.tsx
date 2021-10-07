import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './screens/Home';
import Login from './screens/Login';

import './custom.scss';

export default () => {
    const user = null;

    return <Layout>
        {
            user ?
                <React.Fragment>
                    <Route exact path='/' component={Home} />
                    <Route path='/test'><h1 className="mt-9">TEST</h1></Route>
                    {/* <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
                </React.Fragment>
                :
                <Login />
        }
    </Layout>;
};
