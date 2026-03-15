---
layout: post
title: Localization in React Diagram Component | Syncfusion®
description: Learn how to localize context menus and symbol palette functionality in Syncfusion® React Diagram Component with culture-specific text.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in EJ2 React Diagram Component

The EJ2 React Diagram component supports localization functionality, allowing developers to adapt the user interface to different languages and regions. The diagram's symbol palette search box and context menu items can be localized based on the selected culture. Use the locale property of the diagram to specify the desired culture for localization.

## Localize Diagram Context Menu

To localize the diagram context menu, we need to define the [`locale`](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#locale) property of the diagram with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/localization-cs1/app/index.jsx %}
{% endhighlight %}
{% endtabs %}

Next, call the `setCulture('de')` function to set the default culture for all EJ2 components. This method accepts one parameter, cultureName, which specifies the culture name to be set as the default.

Define the localized text for the context menu items to replace the default English text:

```javascript

// Set the default culture to German
setCulture('de')

// Load locale text for the diagram context menu
L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});

```

The following code example demonstrates the complete locale settings for the context menu:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/localization/es5localeContextMenu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/localization/es5localeContextMenu-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/localization/es5localeContextMenu-cs1" %}

## Localize Symbol Palette

Enable the search functionality in the symbol palette using the [`enableSearch`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolpalettemodel#enablesearch) property. The search box supports localization to match the application's target language.

To localize the symbol palette search box, define the [`locale`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolpalettemodel#locale) property of the symbol palette with the preferred culture. The example below uses 'de-DE' for German localization.

The following code demonstrates symbol palette localization:

```javascript
// Set the default culture to German
setCulture('de')

// Load locale text for the SearchShapes
L10n.load({
        'de-DE': {
            SymbolPalette: {
                'SearchShapes':'Formen suchen',
            }
        }
    });

 // Initializes symbol palette.
    <SymbolPaletteComponent id="container" 
    //Set locale
    locale='de-DE'
    enableSearch={true}
    expandMode={"Multiple"} 
    palettes={[
            {
                id: "basic",
                expanded: true,
                symbols: getBasicShapes(),
                title: "Basic Shapes",
                iconCss: "e-ddb-icons e-basic",
            },
        ]} symbolHeight={80} symbolWidth={80}
        />

```

The following code example summarizes the locale settings for the symbol palette.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/localization/es5localeSymbolpalette-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/localization/es5localeSymbolpalette-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/localization/es5localeSymbolpalette-cs1" %}

Refer [`localization`](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) for more information.


