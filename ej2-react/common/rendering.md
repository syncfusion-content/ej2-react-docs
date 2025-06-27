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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React component acts as a wrapper component that renders UI based on a pure JavaScript engine. All component functionalities are developed using the JavaScript framework, resulting in easier, faster, and more efficient development.

When using the Syncfusion<sup style="font-size:70%">&reg;</sup> React component, only the root element of the component is rendered through the React virtual DOM, while other DOM elements are rendered through JavaScript. This approach is explained in detail in the wrapper component documentation, which you can access at [this link](https://reactjs.org/docs/integrating-with-other-libraries.html).

Changes made to the DOM outside of React are not recognized by React. To avoid conflicts, Syncfusion<sup style="font-size:70%">&reg;</sup> utilizes React component lifecycle methods to ensure that all functionalities of the component work properly within the React framework. And our React components support all React framework-related features.