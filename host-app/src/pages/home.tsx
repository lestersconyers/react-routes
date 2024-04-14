import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5rem', flexDirection: 'column', gap: '2rem' }}>
            <h1>:(</h1>
            <p>This is probably not what you wanted to see. Maybe enter an org code?</p>
        </div>
    );
};

export default HomePage;