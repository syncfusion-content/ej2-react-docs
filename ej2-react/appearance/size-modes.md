---
layout: post
title: Size modes in React Appearance component | Syncfusion
description: Learn here all about Size modes in Syncfusion React Appearance component of Syncfusion Essential JS 2 and more.
control: Size modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Size Mode for Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

An application that is designed to be accessed through a web browser on various devices, including desktop computers and mobile devices, may have a distinct layout or user interface on a mobile device compared to a desktop computer to better suit the smaller screen size.

Syncfusion<sup style="font-size:70%">&reg;</sup> React components support both touch (bigger) and normal size modes. Touch mode creates a responsive design for mobile devices by adding the `e-bigger` class, which enhances interactions, visibility, and the overall experience.

## Size mode for application

The user can enable touch mode (bigger) for the entire application by adding the `e-bigger` class to the `body` element in the `index.html` file as follows:

  ```
  <body className="e-bigger">
    ...
  </body>
  ```

## Size mode for a component

The user can enable touch mode (bigger) for a component by adding the `e-bigger` class to the `div` element that contains the component. Another way of enabling touch mode is by adding the `e-bigger` class using the available `cssClass` property of the component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/sizemode-runtime-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/sizemode-runtime-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/sizemode-runtime-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/sizemode-runtime-cs1" %}

## Change size mode for application at runtime

The user can change the size mode of the application between touch and normal (mouse) mode at runtime by adding and removing the `e-bigger` class. The following steps explain how to change the size mode of an application at runtime:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/sizemode-runtime-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/sizemode-runtime-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/sizemode-runtime-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/sizemode-runtime-cs2" %}

## Change size mode for a component at runtime

The user can change the size mode of a component between touch and normal (mouse) mode at runtime by setting the `e-bigger` CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/sizemode-runtime-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/sizemode-runtime-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/sizemode-runtime-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/sizemode-runtime-cs3" %}

## Change the font size for all components

The user can change the font size for all the components by overriding the CSS for the `e-control` class as follows:

  ```css

    .e-control, .e-control [class^='e-'], .e-control [class*=' e-'] {
      font-size: 1rem;
    }

  ```

## Change the font family of Syncfusion<sup style="font-size:70%">&reg;</sup> React components

The font family of Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be changed by using the `e-control` class. This class is present in all Syncfusion<sup style="font-size:70%">&reg;</sup> components and allows the user to change the font family of all Syncfusion<sup style="font-size:70%">&reg;</sup> React components in an application.

```css

.e-control {
  font-family: Arial !important;
}

```

By including the above CSS code block in the style sheet of the application, the user can change the font-family of all Syncfusion<sup style="font-size:70%">&reg;</sup> components.

## See also

* [Sidebar responsiveness](https://ej2.syncfusion.com/react/documentation/sidebar/auto-close/)
* [DataGrid responsiveness](https://ej2.syncfusion.com/react/documentation/grid/columns/responsive-columns/)
* [TreeGrid responsiveness](https://ej2.syncfusion.com/react/documentation/treegrid/scrolling/#responsive-with-parent-container)
* [Dashboard Layout responsiveness](https://ej2.syncfusion.com/react/documentation/dashboard-layout/responsive-adaptive/)
* [Kanban responsiveness](https://ej2.syncfusion.com/react/documentation/kanban/responsive-mode/)
* [Toolbar responsiveness](https://ej2.syncfusion.com/react/documentation/toolbar/responsive-mode/)
* [Tab responsiveness](https://ej2.syncfusion.com/react/documentation/tab/adaptive/)