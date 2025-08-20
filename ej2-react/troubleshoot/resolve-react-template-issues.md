---
layout: post
title: Resolve react template issues in React Troubleshoot component | Syncfusion
description: Learn here all about Resolve react template issues in Syncfusion React Troubleshoot component of Syncfusion Essential JS 2 and more.
control: Resolve react template issues 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resolve Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components' Template issues

The React property of `delayUpdate` is used to solve the react template related issues.

## delayUpdate

The `delayUpdate` property delays the re-rendering of the component until after the template has been compiled. This prevents issues related to multiple simultaneous mountings when the component state changes.

By setting `delayUpdate` to `true`, the component waits for the template to finish compiling before re-rendering. This ensures that template-related issues are resolved and the component updates correctly.

```ts
<ScheduleComponent width="100%" height="650px" delayUpdate={true}>
  {/* Template content goes here */}
</ScheduleComponent>
```

> Note: Set `delayUpdate` to `true` only when the component utilizes templates that require additional compilation and when multiple mounting conflicts are observed.
