---
layout: post
title: Rendering Engine of Syncfusion React Components | Syncfusion
description: Learn about the rendering engine architecture of Syncfusion React components and how they integrate with React's virtual DOM.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Rendering Engine of Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

Syncfusion<sup style="font-size:70%">&reg;</sup> React components function as wrapper components that encapsulate the underlying JavaScript implementation. These components render their user interfaces using an internal JavaScript-based rendering system, where all component features and functionalities are implemented in JavaScript. This architecture enables efficient component development and execution.

In this hybrid rendering approach, only the root element of a Syncfusion<sup style="font-size:70%">&reg;</sup> React component is rendered through React's virtual DOM. Subsequent child DOM elements are managed and rendered directly by the JavaScript rendering engine. This design allows Syncfusion<sup style="font-size:70%">&reg;</sup> components to leverage optimized rendering techniques while maintaining seamless integration with React applications. For more information about integrating external JavaScript libraries with React, refer to the [React documentation on integration with other libraries](https://react.dev/reference/react/Component#integrating-with-non-react-code).

Updates or modifications to the DOM performed outside of React are not tracked by React's virtual DOM. To maintain compatibility and prevent conflicts, Syncfusion<sup style="font-size:70%">&reg;</sup> React components utilize appropriate React component lifecycle methods, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` for class components, or `useEffect` and `useLayoutEffect` hooks for functional components. This approach ensures that all component functionalities remain fully compatible with React, support core React features, and properly synchronize with the React rendering cycle.