---
layout: post
title: Getting Started with React Maps | Syncfusion
description: Learn how to get started with the Syncfusion React Maps control. Explore setup, features, examples, and customization options.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Maps

This section explains the steps required to create a basic Maps component.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Set up a development environment

To set up a React application quickly, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.

> As an alternative, you can create a React application using [`create-react-app`](https://github.com/facebook/create-react-app). For detailed instructions, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application, run one of the following commands based on your preferred language:

**React with JavaScript**

```
npm create vite@latest my-app -- --template react
```

**React with TypeScript**

```
npm create vite@latest my-app -- --template react-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```
cd my-app
```

## Install the Syncfusion® React Maps package

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React Maps package using the following command:

```bash
npm install @syncfusion/ej2-react-maps
```

## Download the world map shape data

Download the `world_map.ts` file from the Syncfusion [Downloads](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world-map-2091224620) page and place it in your project's `src` folder (for example, `src/world_map.ts`).

The file is a TypeScript module that performs a **named export** of a `world_map` constant. The value is a GeoJSON `FeatureCollection`, and each `Feature.properties` object includes a `name` field (for example, `"India"`, `"United States of America"`) that is used later for data labels. You should import it as a named import:

```ts
import { world_map } from './world_map';
```

## Add the Maps Component to the project

Add the Maps component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight ts tabtitle="~/src/App.tsx" %}
import { world_map } from './world_map';
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
{% endhighlight %}
{% endtabs %}

## Inject Required Modules

Maps features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the Maps component. Injecting only the modules you need helps reduce the application bundle size.

In this example, the `DataLabel` module is injected to enable data label functionality in the Maps component.

* `DataLabel` - Inject this module into the `services` array to enable data labels in the Maps component.

Import the required module from the Maps package and register it through the `Inject` component as shown below.

{% tabs %}
{% highlight ts tabtitle="~/src/App.tsx" %}
import { world_map } from './world_map';
import { MapsComponent, Inject, DataLabel, LayerDirective, LayersDirective } from '@syncfusion/ej2-react-maps';

function App() {
    return (
        <div className="App">
            <MapsComponent id="maps">
                <Inject services={[DataLabel]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map} dataLabelSettings={{ visible: true, labelPath: 'name', smartLabelMode: 'Hide' }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
        </div>
    );
}

export default App;
{% endhighlight %}
{% endtabs %}

## Bind Data to the Maps Component

The following layer properties are used to bind a data source to the map:

* [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/layersettingsmodel#datasource)
* [`shapeDataPath`](https://ej2.syncfusion.com/react/documentation/api/maps/layersettingsmodel#shapedatapath)
* [`shapePropertyPath`](https://ej2.syncfusion.com/react/documentation/api/maps/layersettingsmodel#shapepropertypath)

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/layersettingsmodel#datasource) property accepts a collection of data objects as input. For example, a list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](https://ej2.syncfusion.com/react/documentation/api/maps/layersettingsmodel#shapedatapath) property refers to the field in the dataSource that identifies a shape. The [`shapePropertyPath`](https://ej2.syncfusion.com/react/documentation/api/maps/layersettingsmodel#shapepropertypath) property refers to the field in shapeData that matches `shapeDataPath`. When these values match, the corresponding object from the dataSource is bound to the shape.

The JSON object “uncountries” is used as data source below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/code-path/default-map-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/code-path/default-map-cs34/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maps/default-map-cs34" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

If the map does not appear as expected, work through the following common issues:

* **"Cannot find module './world_map'" / shape data not rendered** — Make sure `world_map.ts` is saved in `src/` and that the import path matches the file location and the file's export style (named vs default export).
* **Data labels do not show up** — Confirm that the `DataLabel` service is injected via `<Inject services={[DataLabel]} />` and that `dataLabelSettings.visible` is `true`. Also confirm the `labelPath` value (for example, `'name'`) matches a key in the GeoJSON's `Feature.properties`.
* **`'Inject' is not exported` or module not found** — Update `@syncfusion/ej2-react-maps` to a supported version and restart the dev server.
* **Port `5173` already in use** — Vite will pick the next free port automatically; use the URL it prints in the terminal.

## See also

* [Layers in React Maps](./layers)
* [Data label in React Maps](./data-label)
* [Populate data in React Maps](./populate-data)
* [Map providers in React Maps](./map-providers)
* [Markers in React Maps](./markers)
* [Legend in React Maps](./legend)
* [Customization in React Maps](./customization)
* [Maps API Reference](https://ej2.syncfusion.com/react/documentation/api/maps/index-default)

