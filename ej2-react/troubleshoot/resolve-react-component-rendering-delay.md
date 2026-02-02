---
layout: post
title: Resolve React Component Rendering Delay | Syncfusion
description: Learn how to resolve rendering delays in Syncfusion React components using the immediateRender property.
control: Resolve react component rendering delay 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resolve Delay Rendering of Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components

The `immediateRender` property resolves rendering delays in Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components.

## immediateRender

The `immediateRender` property disables the delay on the initial rendering of the component. By default, component rendering is delayed to compile templates, since React does not allow multiple mounting at the same time.

In cases where no template is available, setting the `immediateRender` property to `true` will render the component immediately.

```tsx
<ButtonComponent immediateRender={true} onClick={() => this.setState({ hideButton: true })}>
  Click to hide
</ButtonComponent>
```

> Enable this property only if there is no template in the React UI Component.