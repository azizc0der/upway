import React from 'react';

const MyComponent = ({ el }) => {
    const imageUrl = `https://capma.pythonanywhere.com${el.image}`;

    return (
        <div>
            {el.image ? (
                <img src={imageUrl} alt={el.name} />
            ) : (
                <p>Image not available</p>
            )}
        </div>
    );
};

export default MyComponent;
