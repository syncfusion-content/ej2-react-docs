---
layout: post
title: Resolve react template issues in React Troubleshoot component | Syncfusion
description: Learn how to resolve template-related issues in Syncfusion React components using the delayUpdate property.
control: Resolve react template issues 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resolve Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components' Template issues

The React property `delayUpdate` helps resolve template-related issues in Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components.

## delayUpdate

The `delayUpdate` property delays the component's re-rendering until after the template has been compiled. This prevents issues caused by multiple simultaneous mountings when the component state changes.

When `delayUpdate` is set to `true`, the component waits for template compilation to complete before re-rendering. This ensures that template-related issues are resolved and the component updates correctly.

```tsx
<ScheduleComponent width="100%" height="650px" delayUpdate={true}>
  {/* Template content goes here */}
</ScheduleComponent>
```

> Note: Set `delayUpdate` to `true` only when the component uses templates that require additional compilation or when multiple mounting conflicts are observed.