import { createContext } from 'react';

// TODO a cosa serve un context?
export const ImgContext = createContext({
    animation: 'grow',
    toggleAnimation: () => {},
});
