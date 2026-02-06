---
layout: post
title: Getting started with React Maps component | Syncfusion
description:  Checkout and learn about Getting started with React Maps component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Maps Library component

This section explains the steps required to create a map and demonstrates the basic usage of the maps component.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Dependencies

Below is the list of minimum dependencies required to use the Maps.

```javascript
|-- @syncfusion/ej2-react-maps
    |-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
|-- @syncfusion/ej2-react-base
```

## Installation and Configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install Maps package, use the following command.

```
npm install @syncfusion/ej2-react-maps --save
```

### Add Map to the Project

Now, the Maps component can be added in the application. To initialize the Maps component in the React application, import the **MapsComponent** into the **src/App.js**. If you are using TypeScript, you can import the **MapsComponent** into the **src/App.tsx**. You can choose the appropriate option based on your application. In the following code, the **MapsComponent** is included in the **src/App.js** file.

```ts
    import { world_map } from './world_map.ts';
    import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

    function App() {
       return (
          <div className="App">
              <MapsComponent id="maps">
                 <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                 </LayersDirective>
               </MapsComponent>
           </div>
     );
    }
    export default App;
```

> Refer to the `world_map` dataset here: https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1557035892

### Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

## Module Injection

The Maps component is divided into feature-specific modules. To use a feature, inject its module with the `Inject` method. The available modules and their purposes are:

* Annotations - Inject this provider to use annotations feature.
* Bubble - Inject this provider to use bubble feature.
* DataLabel - Inject this provider to use data label feature.
* Highlight - Inject this provider to use highlight feature.
* Legend - Inject this provider to use legend feature.
* Marker - Inject this provider to use marker feature.
* MapsTooltip - Inject this provider to use tooltip feature.
* NavigationLine - Inject this provider to use navigation lines feature.
* Selection - Inject this provider to use selection feature.
* Zoom - Inject this provider to use zooming and panning feature.
* Polygon - Inject this provider to use polygon feature.

For example, to use the tooltip, data label, and legend features, import the corresponding modules and inject them into the Maps component using the `Inject` component.

```ts

import * as React from 'react';
import { MapsComponent, Inject, DataLabel, Legend, MapsTooltip } from '@syncfusion/ej2-react-maps';

export function App() {
   return (<MapsComponent>
        <Inject services={[DataLabel, Legend, MapsTooltip]} />
    </MapsComponent>);
  }

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

```

## Render shapes from GeoJSON data

This section shows how to bind GeoJSON data to a layer.

   ```ts

      let usMap: Object =
      {
        "type": "FeatureCollection",
         "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
      "features": [
           { "type": "Feature", "properties": { "iso_3166_2": "MA", "name": "Massachusetts", "admin": "United States of America" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -70.801756294617277, 41.248076234530558 ]] ] ] }
         }
     ]
   };

   ```

Map elements are rendered within layers. Add a layer collection to the Maps using the  [`layers`](../api/maps#layers) property, then bind the GeoJSON data to the [`shapeData`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#shapedata) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/maps/default-map-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/maps/default-map-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs33" %}

## Bind data source to map

The following layer properties are used to bind a data source to the map:

   * [dataSource](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#datasource)
   * [shapeDataPath](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#shapedatapath)
   * [shapePropertyPath](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#shapepropertypath)

The `dataSource` property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [shapeDataPath](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#shapedatapath) property refers to the field in the [dataSource](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#datasource) that identifies a shape. The [shapePropertyPath](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#shapepropertypath) property refers to the field in `shapeData` that matches [shapeDataPath](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#shapedatapath). When these values match, the corresponding object from the [dataSource](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#datasource) is bound to the shape.

The JSON object "electionData" is used as data source below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/maps/default-map-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/maps/default-map-cs34/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs34" %}

>Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data.
Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#colorvaluepath) property in [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel).

Specify color and value in [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#colorvaluepath) property. Here '#D84444' is specified for 'Trump' and '#316DB5' is specified for 'Clinton'.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/maps/default-map-cs35/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/maps/default-map-cs35/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs35" %}

> Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Add Title for Maps

You can add a title using [`titleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel) property to the map to provide quick
information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/maps/default-map-cs36/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/maps/default-map-cs36/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs36" %}

> Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Enable Legend

You can show legend for the maps by setting true to the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel#visible)property in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel) object and by injecting the `Legend`
service using `Inject` tag.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/maps/default-map-cs37/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/maps/default-map-cs37/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs37" %}

> Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by
setting [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#visible) property to true in the [`dataLabelSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel) object and by injecting `DataLabel` service using `Inject` tag.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/maps/default-map-cs38/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/maps/default-map-cs38/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs38" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints.
You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel#visible) property as true in [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel) object and by injecting `MapsTooltip` service using `Inject` tag.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/maps/default-map-cs39/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/maps/default-map-cs39/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs39" %}

N> You can refer to our [React Maps Library](https://www.syncfusion.com/react-components/react-maps-library) feature tour page for its groundbreaking feature representations. You can also explore our [React Maps Library example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/maps/default) that shows you how to configure the Maps Library in React.
