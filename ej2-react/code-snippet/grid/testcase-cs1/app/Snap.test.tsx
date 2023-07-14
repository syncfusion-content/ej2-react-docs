import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const { getComputedStyle } = global.window;

describe('Jest test case', () =>{

  beforeEach(() =>{
    window.crypto = jest.fn() as any;
    window.crypto.getRandomValues = jest.fn();
    window.getComputedStyle = (eletm, select) => getComputedStyle(eletm, select);
  });
  it('Snapshot testing', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});