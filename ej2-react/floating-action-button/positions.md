---
layout: post
title: Positions in React Floating action button component | Syncfusion
description: Learn here all about Positions in Syncfusion React Floating action button component of Syncfusion Essential JS 2 and more.
control: Positions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Positioning of React Floating action button component

This section explains the different positions of Floating Action Button.

## Target

The [Target](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#target) property in the React Floating Action Button component allows you to specify the element to which the FAB should be attached by defining a CSS selector.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {
    return (
        <div>
            <div id="targetElement" style={{ position: 'relative', minHeight: '350px', border: '1px solid' }}></div>
            {/* To render Floating Action Button with Target Property. */ }
            <FabComponent id='fab' content='Add' target='#targetElement'></FabComponent>
        </div>
    );
}
export default App;
```

## Built-in positions

The floating action button can be positioned anywhere on the [`target`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#target) using the [`position`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#position) property. If the `target` is not defined, then FAB is positioned based on the browser viewport.

The built-in position values of Floating Action Button are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {
    return (
            {/* To render Floating Action Button in BottomLeft Position. */}
            <FabComponent id='fab' content='Add' position='BottomLeft'></FabComponent>
    );
}
export default App;
```

Below example demonstrates different supported positions of FAB.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/position-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/position-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/position-cs1" %}

## Custom Positioning

You can define the custom position of the Floating Action Button by override the `top`, `left`, `right`, and `bottom` CSS properties using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#cssclass). For detailed information, refer `index.css` file below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/position-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/position-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/position-cs2" %}
