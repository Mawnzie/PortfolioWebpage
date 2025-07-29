import React from 'react';
import Layout from '../Layout';
import List from '../List';

function Content({listItems,links, title}) {

    return (
        <Layout>
               <p>{title}</p>
                <List items={listItems} links={links} />
        </Layout>
    );
}
export default Content;