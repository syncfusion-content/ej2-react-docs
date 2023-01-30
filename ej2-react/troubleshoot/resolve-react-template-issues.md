---
layout: post
title: Resolve react template issues in React Troubleshoot component | Syncfusion
description: Learn here all about Resolve react template issues in Syncfusion React Troubleshoot component of Syncfusion Essential JS 2 and more.
control: Resolve react template issues 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resolve react template issues in React Troubleshoot component

The React property of `delayUpdate` is used to solve the react template related issues.

## delayUpdate

The `delayUpdate` property enables the delay when the component renders back after the state is changed.

Whenever the state changes, the component and the template renders back. Thus, the react will not allow multiple mounting at the same time. In this situation, React renders the template as an external component, and delays the component re-rendering to compile the template.

By setting the `delayUpdate` property to `true`, the component renders back after the template compilation is done.

```ts

 <ScheduleComponent width='100%' height='650px' delayUpdate='true'> </ScheduleComponent>

 ```