---
layout: post
title: Rendering Engine of Syncfusion React Components | Syncfusion
description: Learn here all about the rendering engine of Syncfusion React components in Essential JS 2 and more.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Rendering Engine of Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

Syncfusion<sup style="font-size:70%">&reg;</sup> React components function as wrapper components that render their user interfaces using a pure JavaScript engine. All component features are implemented using JavaScript, which enables streamlined and efficient component development.

In this architecture, only the root element of a Syncfusion<sup style="font-size:70%">&reg;</sup> React component is rendered through the React virtual DOM. Subsequent child DOM elements are managed and rendered by JavaScript. For further information about integrating external JavaScript libraries with React, refer to the [React documentation on integration with other libraries](https://reactjs.org/docs/integrating-with-other-libraries.html).

Updates or modifications to the DOM performed outside of React are not tracked by React's virtual DOM. To maintain compatibility and prevent conflicts, Syncfusion<sup style="font-size:70%">&reg;</sup> leverages the appropriate React component lifecycle methods. This approach ensures that all component functionalities remain fully compatible with the React framework and support core React features.