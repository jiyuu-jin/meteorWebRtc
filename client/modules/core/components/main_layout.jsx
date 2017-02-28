import React from 'react';

const MainLayout = ({ content }) => (
        <div id="page-content">
            {content()}
         </div>
);

export default MainLayout;