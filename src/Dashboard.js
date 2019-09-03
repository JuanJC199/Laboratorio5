import React from 'react';
import FirstPanel from './FirstPanel';
import SecondPanel from './SecondPanel';
import './App.css';
class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className="Centre">
                    <FirstPanel />
                </div>
                <div className="Centre">
                    <SecondPanel />
                </div>
            </div>
        );
    }
}
export default Dashboard;