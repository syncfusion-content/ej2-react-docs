---
layout: post
title: Styled-Components Support in React | Syncfusion
description: Learn how to use styled-components for advanced CSS-in-JS styling of Syncfusion Essential JS 2 React components, including dynamic prop-based styling.
control: Styled component
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styled-Component support

Syncfusion<sup style="font-size:70%">&reg;</sup> React components support advanced customization using the [styled-components](https://styled-components.com/) library — a popular CSS-in-JS solution for defining component-scoped styles in JavaScript.

## Adding styled-components to the application

Import `styled-components` in your application (for example, in `src/App.tsx`). To apply custom styles to a Syncfusion React component, pass the component to the `styled` factory function and target the appropriate EJ2 class selector (such as `.e-btn` for the Button component) to override default styles.

```ts
const StyledButton = styled(ButtonComponent)`
  &.e-btn {
    background: #75e1ef;
    color: #000000;
  }
`;
```

The following example demonstrates rendering a styled Syncfusion Button:

```tsx
import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled from 'styled-components';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const StyledButton = styled(ButtonComponent)`
  &.e-btn {
    background: #75e1ef;
    color: #000000;
  }
`;

function App() {
  return (
    <div className="control-pane">
      <StyledButton>Button</StyledButton>
    </div>
  );
}

export default App;

ReactDom.render(<App />, document.getElementById('sample'));
```

> **Note:** When styling Syncfusion EJ2 React components, always target the root class selector of the component (for example, `.e-btn` for Button, `.e-input` for Input, etc.) to ensure styles are applied correctly. More specific or nested selectors may require higher specificity or `!important` in complex scenarios.

## Dynamic styling with props

Styled components allow dynamic styling based on props passed to the wrapped component. The example below changes the button appearance when the `disabled` prop is `true`:

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

Example usage in the application:

```tsx
import * as React from 'react';
import * as ReactDom from 'react-dom';
import styled, { css } from 'styled-components';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const StyledButton = styled(ButtonComponent)`
  &.e-btn {
    ${props => props.disabled && css`
      background: palevioletred;
      color: white;
    `}
  }
`;

function App() {
  return (
    <div className="control-pane">
      <StyledButton disabled={true}>Button</StyledButton>
    </div>
  );
}

export default App;

ReactDom.render(<App />, document.getElementById('sample'));
```

> **Note:** When styling EJ2 React components, target the component's root class selectors (for example, `.e-btn`) to ensure styles are applied correctly.