import React from 'react';
import { Link } from "react-router-dom";
import Layout from './layout';

export default function Page({ children, ...props }) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}