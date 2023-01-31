---
layout: post
title: Styled component in React Appearance component | Syncfusion
description: Learn here all about Styled component in Syncfusion React Appearance component of Syncfusion Essential JS 2 and more.
control: Styled component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styled-Component support

Syncfusion React components allow you to enhance the styling using [styled-component library](https://styled-components.com/).

## Add styled component to the application

Import styled-components in the `src/App.tsx` file. To style our Syncfusion React component, pass the component in [styled](https://styled-components.com/docs/api#styled) factory and override the EJ2 component styles. Here, StyledButton is the styled component.


```ts
 const StyledButton = styled(ButtonComponent)`
  &.e-btn {
    background: #75e1ef;
    color: #00000;
  }
`;
```

Refer to the below code to create a styled button.

```ts

import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

 function App() {
 const StyledButton = styled(ButtonComponent)`
  &.e-btn {
    background: #75e1ef;
    color: #00000;
  }
`;
  render() {
    return (<div className='control-pane'>
      <StyledButton>Button</StyledButton>
    </div>);
  }
}
export default App;
ReactDom.render(<App />,document.getElementById('sample'));
```

## Dynamically computed props styling

We can style the Syncfusion React components dynamically based on props.


```ts
const StyledButton = styled(ButtonComponent)`
&.e-btn {
  ${props => props.disabled && css`
    background: palevioletred;
    color: white;
  `}
  }
`;
```


The below example code shows the dynamically styling the components using props.


```ts

import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import { css } from 'styled-components'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
 const StyledButton = styled(ButtonComponent)`
 &.e-btn {
  ${props => props.disabled && css`
    background: palevioletred;
    color: white;
  `}
  }
`;
  return (<div className='control-pane'>
    <StyledButton disabled={true}>Button</StyledButton>
  </div>);
}
export default App;
ReactDom.render(<App />,document.getElementById('sample'));
```