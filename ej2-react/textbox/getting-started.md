---
layout: post
title: Getting started with React TextBox component | Syncfusion
description:  Checkout and learn about Getting started with React TextBox component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React TextBox component

This section briefly explains about how to create a simple TextBox using `Create React App`.

## Dependencies

The following list of dependencies are required to use the TextBox component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Installation and Configuration

* You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

   ```bash
     npm install -g create-react-app
   ```

* Start a new project using create-react-app command as follows.

    ```bash
       create-react-app quickstart --scripts-version=react-scripts-ts
       cd quickstart
    ```

* To install TextBox component, use the following command.

    ```bash
      npm install @syncfusion/ej2-react-inputs –save
    ```

* The above package installs [Input dependencies](./getting-started/#dependencies) which are required to render the TextBox component in React environment.

* The TextBox CSS files are available in the `ej2-react-inputs` package folder. This can be referenced in your application using the following code.

`[src/App.css]`

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

## Adding TextBox to the application

Return the TextBoxComponent within `render` method in `src/App.tsx` file to render the TextBox component as like below code.

`[Class-component]`

```ts
import * as React from "react";
import './App.css';
export default class App extends React.Component<{}, {}> {
    public render() {
      return (
        // element which is going to render the TextBox
        <TextBoxComponent placeholder="Enter Name"></TextBoxComponent>
      );
    }
};
```

`[Functional-component]`

```ts
import * as React from "react";
import './App.css';
function App() {
    return (
        // element which is going to render the TextBox
         <TextBoxComponent placeholder="Enter Name"></TextBoxComponent>
    );
};
ReactDOM.render(<App />, document.getElementById('input-container'));
```

## Adding icons to the TextBox

You can create a TextBox with an icon by using the [addIcon](https://ej2.syncfusion.com/react/documentation/api/textbox/#addicon) method within the [created](https://ej2.syncfusion.com/react/documentation/api/textbox/#created) event. For detailed information, refer to the [Groups](./groups/) section.

`[Class-component]`

```ts
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default class Default extends React.Component {
    public textboxObj = React.createRef();

    public oncreate() {  
        (this.textboxObj.current as any).addIcon('append', 'e-icons e-input-popup-date');
    }

    public render() {
        return (
            <TextBoxComponent
                id='default'
                placeholder="Enter Date"
                ref={this.textboxObj}
                created={this.oncreate}
            />
        );
    }
}

createRoot(document.getElementById('default')).render(<Default />);

```

`[Functional-component]`

```ts
import * as React from "react";
import { createRoot } from 'react-dom/client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useRef } from 'react';

function Default()  {
    const textboxObj = useRef(null);

    function oncreate() {  
        textboxObj.current.addIcon('append', 'e-icons e-input-group-icon e-input-popup-date');
    }
    return (
        <TextBoxComponent
            id='default'
            placeholder="Enter Date"
            ref={textboxObj}
            created={oncreate}
        />
    );
};   

createRoot(document.getElementById('default')).render(<Default />);
```

```
.e-input-group .e-icons.e-input-group-icon.e-input-popup-date {
    font-size:16px;
}
.e-input-group .e-icons.e-input-group-icon.e-input-popup-date:before {
    content: "\e901";
}
```

* Run the application in the browser using the following command.

   ```
    npm start
   ```

Output will be as follows:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs2" %}

## Floating Label

The floating label TextBox floats the label above the TextBox after focusing, or filled with value in the TextBox.
You can create the floating label TextBox by using the `floatLabelType` API.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/textbox-component-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/textbox-component-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-component-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/textbox-component-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/textbox-component-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-component-cs2" %}

> You can refer to our [React TextBox](https://www.syncfusion.com/react-ui-components/react-textbox) feature tour page for its groundbreaking feature representations. You can also explore our [React TextBox example](https://ej2.syncfusion.com/react/demos/#/material/textboxes/default) to know how to render and configure the TextBox.

## See Also

* [How to render TextBox programmatically](./how-to/add-textbox-programmatically)
* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
