import React from 'react';
import User from './components/user';
import Layout from './components/layout';
import Toaster from './components/generic/toaster';
import './assets/sass/framework/main.scss';
import './App.css';

function App() {
    return (
        <>
            <Layout>
                <User />
            </Layout>
            <Toaster />
        </>
    );
}

export default App;
