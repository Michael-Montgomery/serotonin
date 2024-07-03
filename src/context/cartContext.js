import { createContext } from "react";


export const cartContext = createContext([
    {
        title: 'Crown',
        price: 34.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        gender: 'M',
        imageLink: 'https://images.pexels.com/photos/21619345/pexels-photo-21619345/free-photo-of-bouquet-of-pink-and-red-roses.jpeg?auto=compress&cs=tinysrgb&w=600',
        contents: ['2oz, soap bar', 'dry brush', 'sugar scrub', 'epsom salt', 'moisturizing oil', 'soap holder'],
        color: '#8b5e8f'
    },
    {
        title: 'Third Eye',
        price: 34.99,
        description: 'This is a description',
        gender: 'M',
        imageLink: 'https://images.pexels.com/photos/21619345/pexels-photo-21619345/free-photo-of-bouquet-of-pink-and-red-roses.jpeg?auto=compress&cs=tinysrgb&w=600',
        contents: ['2oz, soap bar', 'dry brush', 'sugar scrub', 'epsom salt', 'moisturizing oil', 'soap holder'],
        color: '#4B0082'
    }
]);