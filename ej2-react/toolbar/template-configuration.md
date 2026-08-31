---
layout: post
title: Template Configuration in React Toolbar | Syncfusion
description: Customize the Syncfusion React Toolbar item appearance with the template property, or assign a custom template per item.
control: Template configuration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template Configuration in React Toolbar

The Toolbar can be rendered by an item-based collection and by HTML elements. To render it based on the given HTML element, pass the element's `id` to the `target` property. To render the Toolbar, follow the structure below of the HTML elements:

```html
  <div id='template_toolbar'>   --> Root Toolbar Element
    <div>      --> Toolbar Items Container
       <div>   --> Toolbar Item Element
       </div>
    </div>
  </div>
```

Here, the template ID `#template_toolbar` is directly appended to the Toolbar.

You can also assign a custom template to an individual toolbar item by setting the `template` property on the `ItemDirective`, for example `<ItemDirective template={...} />`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs11" %}

## Stateless template

In React, a state is an object that contains data or information about the component. The component state can be used in React component templates to determine a component's behavior and render information to the user. The state can change based on user input, data from a server, the result of a calculation, or system-generated events.

Whenever the state changes, the component will automatically re-render to display the updated information to the user. This allows for a dynamic and interactive user experience.

For certain application needs, you may want to prevent components from re-rendering during state updates. This can be achieved using the `statelessTemplates` property. 

The Toolbar `template` property is defined in the `ItemDirective` tag of the Toolbar component. To prevent the Toolbar component from re-rendering while the state is being updated, pass the `statelessTemplates` property array value as `directiveTemplates`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-stateless-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-stateless-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-stateless-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-stateless-template-cs1" %}

## Popup customization

`Popup` is one of the supported responsive modes of the Toolbar. The Toolbar commands, popup mode priority, and button text mode customizations are achieved in item-based rendering through property declaration. For more information on popup mode, refer to [responsive mode](./responsive-mode.md).

The above behavior can also be achieved with template rendering by defining `class` names equivalent to the properties, instead of property declaration.

Equivalent class names listed below are needed to be added to the Toolbar items' `div` element.

### Priority

Class | Description
------------ | -------------
  e-overflow-show  | Commands are always displayed on the `Toolbar` with primary priority.
  e-overflow-hide  | Commands are always displayed in the `Popup` with secondary priority.

### Button text mode

Class | Description
------------ | -------------
  e-popup-text     | Button Text is only visible in the `Popup`.
  e-toolbar-text   | Button Text is only visible in the `Toolbar`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs12" %}

## Integrate Menu component

You can integrate the Menu component as a toolbar item in the Toolbar using the [`template`](https://ej2.syncfusion.com/documentation/api/toolbar/item/#template) property. The Menu can be populated with items as needed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/menu-component-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/menu-component-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/menu-component-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/menu-component-cs1" %}