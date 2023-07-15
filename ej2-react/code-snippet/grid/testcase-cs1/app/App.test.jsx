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
  it('Length of the record', () => {
    var { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    var gridElement = container.getElementsByClassName('e-grid');
    var gridInstance = (gridElement)[0].ej2_instances[0];
    expect(gridInstance.dataSource).toHaveLength(5);
  });
});
