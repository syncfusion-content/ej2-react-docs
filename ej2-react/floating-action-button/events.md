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

This section explains the available events in Floating Action Button component.

## created

Event triggers after the creation of Floating Action Button.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {

    function onCreate(): void {
        //Your required action here
    }

    return (
        {/* To render Floating Action Button */}
        <FabComponent id='fab' iconCss='e-icons e-edit' content='Edit' created={onCreate}></FabComponent>
    );
}
export default App;
```

## Click

Event triggers when the Floating Action Button is clicked.

```ts
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

function App() {

    function onClick(): void {
        //Your required action here
    }

    return (
        {/* To render Floating Action Button */ }
        < FabComponent id = 'fab' iconCss = 'e-icons e-edit' content = 'Edit' onClick = {onClick}></FabComponent >
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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs1" %}
