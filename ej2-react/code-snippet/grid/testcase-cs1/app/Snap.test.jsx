import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const { getComputedStyle } = global.window;

describe('Jest test case', () =>{

  beforeEach(() =>{
    window.crypto = jest.fn();
    window.crypto.getRandomValues = jest.fn();
    window.getComputedStyle = (eletm, select) => getComputedStyle(eletm, select);
  });
  it('Snapshot testing', () => {
    var { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});