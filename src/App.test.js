import { render, screen } from '@testing-library/react';
import AppContainer from "./App";
import ReactDOM, {createRoot} from "react-dom/client";
import React from "react";
import { act } from 'react-dom/test-utils';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders without crashing', () => {
//   const root = ReactDOM.createRoot(document.createElement('div'));
//   act(() => {
//     root.render(<AppContainer />);
//     root.unmount();
//   });
// });
y