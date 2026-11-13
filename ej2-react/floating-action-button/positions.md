---
layout: post
title: Positions in React Floating Action Button | Syncfusion
description: Position the React Floating Action Button with the position property. Use predefined corners or centers, anchored to the viewport or a target element.
control: Positions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Positions in React Floating Action Button

Position the React Floating Action Button anywhere on the page using the [`position`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#position) property. When paired with the [`target`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#target) property, the React Floating Action Button positions itself relative to the specified container. Without a target, the React Floating Action Button positions itself relative to the browser viewport.

Use predefined positions to quickly deploy the React Floating Action Button to common locations (corners and center points). The available position values are:
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

Below example demonstrates different supported positions of React Floating Action Button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/position-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/position-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/position-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/position-cs1" %}

## Custom position

Define a custom position for the React Floating Action Button by overriding the `top`, `left`, `right`, and `bottom` CSS properties using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#cssclass) property. This approach allows precise control over React Floating Action Button placement for specialized layouts. Refer to the `index.css` file in the example below for implementation details.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/position-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/position-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/position-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/position-cs2" %}
