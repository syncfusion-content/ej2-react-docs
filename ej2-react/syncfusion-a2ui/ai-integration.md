---
layout: post
title: AI Integration with Syncfusion A2UI for React | Syncfusion
description: Step-by-step guide to connect a React app powered by @syncfusion/ej2-react-a2ui to a remote A2UI v0.9 agent and render responses as Syncfusion EJ2 components.
control: AI Integration
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# AI Integration with Syncfusion A2UI for React

This page shows the production wiring between a Syncfusion A2UI React host and a remote A2UI v0.9 agent that speaks [JSON-RPC 2.0](https://www.jsonrpc.org/specification) over HTTP. The [Getting Started](./getting-started) page showed how to render a Syncfusion surface from a **static** A2UI v0.9 message list. This page shows the next step: connecting your React app to a **remote, A2UI-compatible agent** so the agent's responses drive the surface in real time, and the user's interactions inside the surface are forwarded back to the agent.

> **Preview release** — The package is currently published as a **pre-release (beta)** on npm (e.g. `1.0.1-beta.0`). The A2UI v0.9 wire format is stable, but the package API, catalog id, and Zod schemas may evolve before the first stable release. See the [Overview](./overview) for the full preview terms.

## Prerequisites

* A working app that already uses [`@syncfusion/ej2-react-a2ui`](https://www.npmjs.com/package/@syncfusion/ej2-react-a2ui) and renders a static surface as described in the [Getting Started](./getting-started) page.
* A running A2UI v0.9-compatible agent exposed over HTTP that accepts [JSON-RPC 2.0](https://www.jsonrpc.org/specification) `message/send` requests. The reference implementation is the syncfusion-a2ui-agent ADK, which ships ready-to-run example agents you can launch locally. The example below targets the bundled Contoso Dynamics demo at `http://localhost:10004`; replace it with the URL of your own agent.

## What "AI integration" means here

`@syncfusion/ej2-react-a2ui` is the **rendering** half of an A2UI flow. The **agent** half (the LLM, the tool-calling loop, the JSON-RPC server) is a separate concern. To wire the two together, your host app needs to:

1. **Send the user's prompt** to the agent as a JSON-RPC `message/send` request whose `params.message.parts[0]` is `{ text: query }`.
2. **Receive the agent's response** as a JSON-RPC envelope whose `result.artifacts[0].parts[0].data.a2uiEnvelope` is an array of A2UI v0.9 messages (`createSurface`, `updateComponents`, `updateDataModel`, …).
3. **Pass that array** to `processor.processMessages(messages)`. The processor validates each message, builds a `SurfaceModel`, and emits it on `onSurfaceCreated`.
4. **Forward component interactions** to the agent. The `MessageProcessor` takes an `actionHandler` as the second constructor argument; whenever the user clicks a button, sorts a grid, picks a date, or selects a row, the adapter calls your handler with the action payload. Forward that payload to the agent as a new `message/send` request whose `params.message.parts[0]` is `{ data: action }`, and the cycle repeats.

## Connect to a remote A2UI agent

Replace the contents of `src/App.tsx` with the snippet below. It builds on the Getting Started example and adds a small chat input, a JSON-RPC `message/send` request, and the round-trip back to the agent on every user interaction inside the surface.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/common/a2ui-ai-integration-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% include code-snippet/common/a2ui-ai-integration-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

> **EJ2 widget stylesheets.** The Syncfusion `TextBoxComponent` and `ButtonComponent` require their own CSS bundles, on top of the theme package already imported on the [Getting Started](./getting-started) page. Add the two imports to `src/App.css` so the chat input and send button render correctly:
>
> @import "@syncfusion/ej2-tailwind3-theme/styles/inputs/index.css";
> @import "@syncfusion/ej2-tailwind3-theme/styles/buttons/index.css";
>
> If you are using a different theme (`@syncfusion/ej2-material-theme`, `@syncfusion/ej2-fluent2-theme`, `@syncfusion/ej2-material3-theme`, `@syncfusion/ej2-bootstrap5-theme`), replace the `tailwind3` segment with the matching package name.

## How the round-trip works

1. **Initial prompt.** The user types a query (`"Show me last quarter's sales by region"`) and clicks **Send**. `sendQuery()` POSTs a JSON-RPC `message/send` request whose `params.message.parts[0]` is `{ text: query }` to `AGENT_URL`.
2. **Agent response.** The agent runs the LLM, decides which A2UI components to render, and returns a JSON-RPC envelope whose `result.artifacts[0].parts[0].data.a2uiEnvelope` is an array of A2UI v0.9 messages (typically `createSurface` → `updateComponents` → `updateDataModel`).
3. **Process the messages.** `processor.processMessages(messages)` validates each message against the bundled Zod schemas, builds a `SurfaceModel`, and fires `onSurfaceCreated`. `<SyncfusionA2UIProvider />` renders the surface.
4. **User interacts.** When the user clicks a button, sorts the grid, picks a date, or selects a row, the matching Syncfusion adapter calls the `actionHandler` passed to the `MessageProcessor` constructor with the action payload.
5. **Forward to agent.** The handler POSTs the action back to the agent as a new `message/send` request whose `params.message.parts[0]` is `{ data: action }`. The agent decides what to do next — update the same surface (`updateComponents` / `updateDataModel`), or replace it with a new one (`createSurface` on a different `surfaceId`) — and returns a new `a2uiEnvelope`. The cycle repeats.

## Things to customize

* **Agent URL.** The example uses the default `http://localhost:10004` (the Contoso Dynamics demo's default port from `syncfusion-a2ui-agent`). Replace it with the URL of your own agent, or read it from an environment variable such as `import.meta.env.VITE_AGENT_URL`. Add the URL to a `.env` file:
  ```bash
  # .env
  VITE_AGENT_URL=http://localhost:10004
  ```
* **Authentication.** Most production agents require a bearer token, an API key, or a session cookie. Add an `Authorization` header (or whatever your agent expects) to both `fetch` calls before deploying.
* **Streaming responses.** The example waits for the full response and processes all messages at once. To stream the agent's response, replace the single `await res.json()` with a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) reader and call `processor.processMessages(messages)` once per chunk.
* **Error handling.** The example swallows fetch errors. In production, wrap both `fetch` calls in `try/catch` blocks, surface the error to the user (for example with a `<SyncfusionMessage severity="Error" />`), and clear `loading` even when the request fails.
* **Styling.** The example uses a small `.a2ui-chat` class in `App.css` for the input and button. Move any production styling into your own design system or theme.
* **Multiple surfaces.** A single `MessageProcessor` can hold many surfaces at once (one per `surfaceId`). Subscribe to `onSurfaceCreated` with a `Map<surfaceId, SurfaceModel>` if your agent emits more than one surface in the same response.

## Run the agent

The example agent referenced above is the **Contoso Dynamics** demo that ships in the syncfusion-a2ui-agent repository. To run it locally:

```bash
# 1. Clone the agent repo
git clone https://github.com/syncfusion/syncfusion-a2ui-agent.git
cd syncfusion-a2ui-agent

# 2. Install the ADK and the example package
#    Use `python -m pip` instead of `pip` so the command works on every
#    platform (Windows, macOS, Linux), even if `pip` is not on PATH.
#    On Windows, use `py -m pip …` if `python` is not on PATH.
python -m pip install -e ".[dev]"
python -m pip install -e examples

# 3. Configure your AI provider credentials
cp examples/.env.example examples/.env
# Open examples/.env and fill in AZURE_API_KEY, AZURE_API_BASE, MODEL_NAME, etc.

# 4. Start the agent as an A2A server on http://localhost:10004
python examples/generic_demo_agent.py --serve
```

**Which example should I run?** Two ship with the repository:

| Example | Port | Use it for |
| --- | --- | --- |
| `python examples/generic_demo_agent.py --serve` | `10004` | Contoso Dynamics enterprise dashboards, grounded on `demo_examples.json` (employees, sales, inventory, calendar events). The default choice for the snippet above. |
| `python examples/flight_booking_agent.py --serve` | `10006` | SkyWave Airlines three-stage flight booking workflow (search → results → booking & confirmation). |

The snippet above targets port `10004` (Contoso). If you switch to the SkyWave example, change `AGENT_URL` to `http://localhost:10006`.

The agent boots an HTTP server that speaks [JSON-RPC 2.0](https://www.jsonrpc.org/specification) `message/send` over `/`. Leave the terminal running and start the React app in a second terminal.

## Run the application

In the project where the `@syncfusion/ej2-react-a2ui` package is installed, start the React app:

```bash
npm run dev
```

Open the generated local URL (for example, `http://localhost:5173/`) in the browser. Type a query such as `"Show me last quarter's sales by region"` and press **Send**. The agent's response renders as a working Syncfusion surface inside the page; any interaction you perform in that surface (clicks, sorts, row selections) is sent back to the agent in real time.

## Register the Syncfusion license key

Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 React components require a valid license key to be registered before they render without a trial-license watermark. The A2UI adapters call into the same EJ2 components under the hood, so a registered key is required even when the UI itself is generated by an agent. For instructions on generating and registering a license key, see:

* [How to generate a Syncfusion React license key](../licensing/license-key-generation)
* [How to register a Syncfusion React license key](../licensing/license-key-registration)

## Where to go next

* **[Getting Started](./getting-started)** — install the package, wire up a `MessageProcessor`, and render your first static surface.
* **[Overview](./overview)** — what the package is, who it is for, and how A2UI fits in.
* **[A2UI v0.9 protocol](https://a2ui.org/)** — the JSON-RPC envelope shape, the `SurfaceModel`, and the `MessageProcessor` API.
