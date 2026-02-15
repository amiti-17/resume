import React from 'react';

interface ListRendererProps {
    items: string[];
}

const ListRenderer: React.FC<ListRendererProps> = ({ items }) => (
    <ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
);

export default ListRenderer;
