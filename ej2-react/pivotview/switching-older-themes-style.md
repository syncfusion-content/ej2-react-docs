---
layout: post
title: Switching older themes style in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table reverts to the pre-Volume 1 2020 theme by overriding CSS and adjusting the row height for older layouts.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Switching older themes style in React Pivot Table

From Volume 1, 2020 onwards, Syncfusion<sup style="font-size:70%">&reg;</sup> revised the theming and layout of the Pivot Table. To revert to the older theme style and layout, override the relevant CSS in your application and adjust the `rowHeight` in `gridSettings`.

## CSS Selectors

In the current theme, cell background colors differentiate header and content cells. To remove that differentiation and inherit the older theme's flat appearance, override the selectors below in your application's global stylesheet (for example, `src/index.css`, `app/globals.css`, or `src/style.css`). These selectors apply to the Material, Fabric, Bootstrap, Bootstrap v4, Tailwind 3, Fluent 2, and high-contrast themes.

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>       
       <!-- Codes here... -->
            <style>
                .e-pivotview .e-rowsheader, 
                .e-pivotview .e-columnsheader,
                .e-pivotview .e-gtot,
                .e-pivotview .e-content,
                .e-pivotview .e-gridheader,
                .e-pivotview .e-headercell {
                    background-color:#fff !important;
                }
            </style>
       </head>
       <body>
       </body>
  </html>

```

Meanwhile for high contrast theme, we need to set the following CSS.

```
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>       
       <!-- Codes here... -->
            <style>
                .e-pivotview .e-rowsheader, 
                .e-pivotview .e-columnsheader,
                .e-pivotview .e-gtot,
                .e-pivotview .e-content,
                .e-pivotview .e-gridheader,
                .e-pivotview .e-headercell {
                    background-color:#000 !important;
                }
            </style>
       </head>
       <body>
       </body>
  </html>

```

## Adjusting Row Height

The current theme uses a reduced row height for a more compact layout. Reset the row height to the older default by setting the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettingsModel/#rowheight) property in [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#gridsettings). The older theme used **36 pixels** for desktop layouts and **48 pixels** for mobile layouts. Combine this with the CSS overrides above to fully replicate the older theme.

In the below code sample, we replicate the older theme style.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/switch-theme-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/switch-theme-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/switch-theme-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/switch-theme-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/switch-theme-cs2" %}

## See Also

* [Themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme)
