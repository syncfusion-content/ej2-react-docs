---
layout: post
title: Events in React Floating action button component | Syncfusion
description: Learn here all about Events in Syncfusion React Floating action button component of Syncfusion Essential JS 2 and more.
control: Events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Floating action button component

The Floating Action Button component provides events to respond to user interactions. This section explains the available events, their purposes, and how to handle them in your React application.

## created

The `created` event triggers after the Floating Action Button component is initialized and ready for interaction. Use this event to perform initialization tasks or access component properties after rendering.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {

    function onCreate(): void {
        // Perform initialization logic after FAB creation
    }

    return (
        {/* To render Floating Action Button */}
        <FabComponent id='fab' iconCss='e-icons e-edit' content='Edit' created={onCreate}></FabComponent>
    );
}
export default App;
```

## onclick

The `click` event triggers when the Floating Action Button is clicked by the user. Handle this event to execute actions or trigger workflows when the button is activated through mouse click or keyboard press.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {

    function onClick(): void {
        // Execute action when FAB is clicked
    }

    return (
        {/* To render Floating Action Button */}
        <FabComponent id='fab' iconCss='e-icons e-edit' content='Edit' onClick={onClick}></FabComponent>
    );
}
export default App;
```

Below example demonstrates the click event of the Floating Action Button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/events-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/events-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/events-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs1" %}
