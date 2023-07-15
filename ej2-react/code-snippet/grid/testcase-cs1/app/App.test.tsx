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
  it('Length of the record', () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const gridElement = container.getElementsByClassName('e-grid');
    const gridInstance = (gridElement as any)[0].ej2_instances[0];
    expect(gridInstance.dataSource).toHaveLength(5);
  });
});
