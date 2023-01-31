---
layout: post
title: Theme in React Appearance component | Syncfusion
description: Learn here all about Theme in Syncfusion React Appearance component of Syncfusion Essential JS 2 and more.
control: Theme 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React Themes in Syncfusion Components

The Syncfusion React UI can allow you to apply styles for the components. The following list of themes are included in the Syncfusion React components library.

|Theme  |Style Sheet Name|
|--------|--------|
|Bootstrap 5    | bootstrap5.css |
|Bootstrap 5 Dark   | bootstrap5-dark.css |
|Bootstrap 4    | bootstrap4.css |
|Bootstrap 3    | bootstrap.css |
|Bootstrap 3 Dark   | bootstrap-dark.css |
|Google’s Material | material.css |
|Google’s Material-Dark | material-dark.css |
|Tailwind CSS | tailwind.css |
|Tailwind CSS Dark | tailwind-dark.css |
|Fluent | fluent.css |
|Fluent Dark | fluent-dark.css |
|Microsoft Office Fabric | fabric.css |
|Microsoft Office Fabric Dark | fabric-dark.css |
|High Contrast | highcontrast.css |

> The Syncfusion React Bootstrap theme is designed based on the `Bootstrap v3`, whereas the Bootstrap 4 theme is designed based on `Bootstrap v4`. In addition to these built-in themes, the [ThemeStudio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio/) provides support for the Fusion Theme that can only be downloaded from the [ThemeStudio](https://ej2.syncfusion.com/themestudio/?theme=fusion).

## Reference themes in the React application

Using the following approaches, the themes can be referenced in the React application,

* [npm packages](#refer-themes-through-npm-packages) - Used to customize the existing themes and bundle stylesheet in an application.

* [CDN](#refer-themes-through-cdn-reference) - Used to refer complete css via static web assest.

* [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) - Used to generate resources only for the selected (used) components.

* [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio/) - Used to customize and generate themes only for the selected (used) components.

Instead of using the `CDN reference`, use the `npm packages` reference in your projects to customize the theme or bundle it with the other style sheets.

## Refer themes through npm packages

Themes are shipped as individual and combined CSS files. The combined CSS file can be referred from the npm package `@syncfusion/ej2` and individual CSS files are available within the same component repository’s `style` folder. In ej2 npm packages, we have shipped both CSS and SCSS files for all components.

To use the combined CSS files, install the npm package using the following command

```bash
 npm install @syncfusion/ej2
```

Referring all components CSS

```css
@import "./node_modules/@syncfusion/ej2/<theme_name>.css";
```

Referring all components SCSS

```
@import "./node_modules/@syncfusion/ej2/<theme_name>.scss";
```

### Referring to individual component theme

You can get the individual theme from the individual package or from ej2 package.

Referring to individual component from the `individual package`

```
@import "<dependent-package>/styles/<theme_name>.scss";
@import "ej2-react-buttons/styles/button/<theme_name>.scss";
```

**Example:**

```
@import "ej2-base/styles/material.scss";
@import "ej2-react-buttons/styles/button/material.scss";
```

> The `ej2-base` is a common dependent package for all Syncfusion React component styles. So, it needs to be added first in the import statement.

Referring to individual component from the `ej2 package`

```
@import "ej2/<dependent-component>/<theme_name>.scss";
@import "ej2/button/<theme_name>.scss";
```

**Example:**

```
@import "ej2/base/material.scss";
@import "ej2/button/material.scss";
```

### Advantages of individual components theme

* Reducing the page load time of application
* Reducing bundling size
* Avoid unused CSS

## Refer themes through CDN reference

Instead of using a local resource on your server, use a cloud CDN to reference the theme style sheets.

Syncfusion React Themes are available in the CDN. Make sure that the version in the URLs matches the version of the Syncfusion React package you are using.

```
// Bootstrap5
<head>
    <link href="https://cdn.syncfusion.com/ej2/bootstrap5.css" rel="stylesheet"/>
</head>
//Material
<head>
    <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet"/>
</head>
```

| Theme Name | CDN Reference |
|--- | --- |
| Bootstrap 5 | `https://cdn.syncfusion.com/ej2/bootstrap5.css`         |
| Bootstrap 5 Dark| `https://cdn.syncfusion.com/ej2/bootstrap5-dark.css`         |
| Bootstrap 4 | `https://cdn.syncfusion.com/ej2/bootstrap4.css`      |
| Bootstrap 3 | `https://cdn.syncfusion.com/ej2/bootstrap3.css`      |
| Bootstrap 3 Dark| `https://cdn.syncfusion.com/ej2/bootstrap3-dark.css`      |
| Google’s Material | `https://cdn.syncfusion.com/ej2/material.css`         |
| Google’s Material Dark | `https://cdn.syncfusion.com/ej2/material-dark.css`       |
| Tailwind CSS | `https://cdn.syncfusion.com/ej2/tailwind.css`         |
| Tailwind Dark CSS | `https://cdn.syncfusion.com/ej2/tailwind-dark.css`       |
| Fluent | `https://cdn.syncfusion.com/ej2/fluent.css`    |
| Fluent Dark | `https://cdn.syncfusion.com/ej2/fluent-dark.css` |
| Microsoft Office Fabric  | `https://cdn.syncfusion.com/ej2/fabric.css`       |
| Microsoft Office Fabric Dark | `https://cdn.syncfusion.com/ej2/fabric-dark.css`    |
| High Contrast  | `https://cdn.syncfusion.com/ej2/highcontrast.css`              |

## See also

* [Syncfusion icons and customization](../appearance/icons/)
* [Theme Studio for Syncfusion components](../appearance/theme-studio/)
