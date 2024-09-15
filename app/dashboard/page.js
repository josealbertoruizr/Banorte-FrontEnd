
import React from 'react';
import styles from './dashboard.module.css';
import Dashboard from '../components/Charts/Dashboard';
import BasicTable from '../components/Charts/Table';

const DashboardPage = () => {
    return (
        <div className={styles.container}>


            <Dashboard />
            <div className={styles.space_div}></div>


        </div>
    );
};

export default DashboardPage;
