---
layout: post
title: Accessibilitywith React Rating component | Syncfusion
description:  Learn here all about Accessibility in Syncfusion React Rating component of Syncfusion Essential JS 2 and more.
control: Accessibility
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Rating Component

Accessibility is achieved in the rating component through `WAI-ARIA` standard and keyboard navigations. The rating component can be effectively accessed through assistive technologies such as screen readers.

## Keyboard interaction

The rating component is interactive with below keyboard shortcuts.

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Space</kbd> | If a **Reset Button** is focused, resets the value to `min` value. |
| <kbd>Arrow Up</kbd> | Increases the value. |
| <kbd>Arrow Left</kbd> | Decreases the value and in RTL mode, increases the value. |
| <kbd>Arrow Down</kbd> | Decreases the value. |
| <kbd>Arrow Right</kbd> | Increases the value and in RTL mode, decreases the value. |

## ARIA attribute

The following ARIA attributes are used in rating component based on its state.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | This attribute is added to the div element to describe the actual role. |
| aria-label | Attribute provides the text label with some default description for the Rating and its items. |
| aria-valuemin | It defines the minimum value of rating. |
| aria-valuemax | It defines the maximum value of rating. |
| aria-valuenow | It defines the current value of rating. |
