---
layout: post
title: Composer Playground — Design A2UI Surfaces | Syncfusion
description: Use Syncfusion A2UI Composer to design UIs, generate A2UI v0.9 JSON, and integrate layouts with React agents.
control: Composer Playground
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Composer Playground — Design A2UI Surfaces

## Overview

**Syncfusion<sup style="font-size:70%">&reg;</sup> Composer Playground** is an AI-powered web-based designer for creating **A2UI JSON** — a declarative UI format for building Syncfusion React applications without writing code.

The Composer enables you to:
- **Generate surfaces from natural language prompts** — Describe the interface you want, and AI generates the A2UI JSON
- **Choose from production-ready templates** — Start with curated examples (Operations Dashboard, CRM Overview, Finance Summary, Inventory Tracker)
- **Refine in the Workspace** — Edit JSON directly, chat with the AI Assistant, and preview changes in real time
- **Copy JSON and integrate** — Copy the JSON from Composer and use it directly in your React app or save as a template for your agent
- **Explore the catalog** — Browse the 50+ Syncfusion EJ2 adapters (58 components in total, including A2UI layout primitives) with live demos and documentation

This guide walks you through opening the Composer, creating your first surface, refining it in the Workspace, copying the JSON, and integrating it into your React application or Syncfusion A2UI Agent.

## Getting Started: Create → Generate → Copy JSON → Use

This section guides you through the six-step workflow to create and copy your first A2UI JSON from Composer Playground.

### Step 1: Open Composer Playground

Navigate to the Composer Playground in your web browser:

[Open Composer Playground](https://sfblazor.azurewebsites.net/staging/1043384/)

The Composer opens to the **Create** page with a prompt input box and featured templates.

### Step 2: Choose Your Starting Point

You have three options to begin creating a surface:

**Option A: Start with a Prompt (AI-Generated)**
1. Type a description of the interface you want in the text input
2. Example: *"Build an operations dashboard with revenue trends, priority orders, and row actions"*
3. The Composer generates an A2UI surface based on your description

**Option B: Choose a Featured Template**
1. Click one of the featured template cards. The four shipped templates are:

   | Template | Data domain | Primary components |
   |---|---|---|
   | **Operations Dashboard** | Order pipeline, revenue trends, priority queue | `SyncfusionChart` (revenue trend), `SyncfusionDataGrid` (orders), priority `Message` (alerts) |
   | **CRM Overview** | Customer accounts, contacts, opportunities, recent activity | `SyncfusionDataGrid` (accounts), `SyncfusionScheduler` (follow-ups), `Card` (KPI tiles) |
   | **Finance Summary** | Income / expense / cash flow, budget vs actual, categories | `SyncfusionChart` (multi-series), `Card` (totals), `SyncfusionDataGrid` (line items) |
   | **Inventory Tracker** | Stock on hand, low-stock alerts, supplier list | `SyncfusionDataGrid` (inventory), `SyncfusionNumericTextBox` (reorder qty), `Message` (low-stock warnings) |

2. The Composer pre-loads the chosen template into the Workspace. Use it as a starting point, then refine with the AI Assistant or the JSON editor.

### Step 3: Generate the UI (If Using Prompt)

If you entered a prompt description:

1. Click the **"Generate UI ✨"** button to create the surface from your description
2. The Composer uses AI to generate an A2UI surface with Syncfusion components
3. You are automatically taken to the **Workspace** page to review and refine the generated surface

### Step 4: Refine in Workspace

The **Workspace** page provides an authoring environment with the following layout:

- **Top toolbar** — A breadcrumb showing the current page and the generation target (for example, `WORKSPACE · GENERATE BOOKED DETAILS FORM`), a **Load example…** dropdown that lets you start from a curated design, and a **Reset** button to start over.
- **Left Panel:** A two-tab sidebar.
  - **AI Assistant tab** — Chat with the AI assistant to refine your surface. Use the prompt field at the bottom of the panel and click **Send**. Each assistant message has a **View details** toggle that shows the underlying changes.
  - **JSON tab** — A dark JSON editor for inspecting or modifying the generated A2UI directly.
- **Right Panel:** The live preview of your surface, with a `SURFACE` header (for example, `SURFACE: //WORKSPACE`) and the rendered Syncfusion components.

To refine your surface:

1. In the **AI Assistant** tab, ask for changes (*"Make the booking field read-only"*, *"Add a badge for status"*, etc.). The assistant returns an updated JSON and explanation; you can click **View details** to see what changed.
2. Alternatively, switch to the **JSON** tab and edit the envelope directly.
3. The right-panel preview updates in real time as either the assistant or you change the JSON.
4. The **`SURFACE:`** label in the preview header mirrors the `surfaceId` field from your design — change it via the JSON tab if you need to.

### Step 5: Copy the JSON

Once satisfied with your surface:

1. Select **Copy JSON** to copy the complete A2UI v0.9 JSON to your clipboard
2. The JSON contains the entire surface structure (the four A2UI v0.9 operations — see [Understanding A2UI v0.9 JSON Structure](#understanding-a2ui-v09-json-structure) below)

### Step 6: Use in Your Application

You have two options for using the copied JSON:

**Option A: Direct Integration (React App)**
- Paste the JSON directly into your React application (e.g., SkyBook flight-booking app)
- The app's A2UI renderer parses and renders the surface immediately

**Option B: Bind to an Agent via `set_design()` (Recommended)**
- Save the copied JSON as a file under `examples/designs/` (or anywhere in your project)
- Call **`agent.set_design(path)`** in your agent's `__init__` — one method, any input shape
- The agent treats the file as an **authoritative design contract** and echoes its structure verbatim on every request, only filling in data values from the user's prompt
- Ensures consistent, reproducible UI responses every time

---

## Understanding A2UI v0.9 JSON Structure

The copied JSON uses four main operations to construct a surface:

| Operation | Purpose |
|-----------|---------|
| **createSurface** | Initialize a new screen with a unique `surfaceId` and `catalogId`. The renderer mounts the surface on this op. |
| **updateComponents** | Add, modify, or arrange components within the surface. The structure of every component (children, props, ids) lives here. |
| **updateDataModel** | Supply the data values (grid rows, dropdown items, label text bound by `path`) that the component tree displays. |
| **deleteSurface** | Tear down a screen (used when the user navigates away or the surface is no longer needed). |

## Real-World Example: Flight Booking Application

The **SkyBook** flight-booking application demonstrates a complete A2UI workflow organised as **three stages**. Each stage is one surface, copied from Composer as its own JSON file:

| Stage | Trigger | Purpose |
| --- | --- | --- |
| **1 — Search Flight** | Any booking request | Collect flight route, cabin, dates, passenger details, accessibility needs |
| **2 — Flight Results** | Button click with `event:{name:"submit_booking"}` | Recap captured fields, show computed fare breakdown, require explicit agreement |
| **3 — Booking Confirmed** | Button click with `event:{name:"confirm_booking"}` | Final receipt with booking reference, itinerary, passenger summary, and amount paid |
> The **Trigger** column above shows the user action that *advances from the previous stage into this one*. For example, the `submit_booking` event is fired by the "Review Booking" button on the stage 1 (Search Flight) form; the agent receives it and returns the stage 2 (Flight Results) surface.
Each row in the table below gives the **Composer prompt** you paste into the **Create** page (see [Step 2: Choose Your Starting Point](#step-2-choose-your-starting-point)) to regenerate the matching surface. The prompts are written to be self-contained and unambiguous — the Composer produces the same screen on every run.

After copying, drop each result into `examples/designs/` with the matching filename, then bind them with `agent.set_design("examples/designs/")` — see [Integrating Copied JSON with Your Agent](#integrating-copied-json-with-your-agent) below.

| Screen | Purpose | Composer Prompt | Template File |
|--------|---------|------------------|---------------|
| **Search Flight** (stage 1) | Collect flight and passenger details | *"Build a single-page SkyWave Airlines flight booking form. Use two Card sections stacked vertically with 16px gaps. Card 1 'Flight Details' has, in order, a 'From' TextBox, a 'To' TextBox, a 'Trip Type' DropDownList with options One-Way and Round-Trip, a 'Cabin Class' DropDownList with options Economy / Business / First Class, a 'Departure Date' DatePicker, a 'Return Date' DatePicker, and an 'Adults' NumericTextBox defaulting to 1 with min 1 and max 9. Card 2 'Passenger Details' has a 'Full Name' TextBox, a 'Date of Birth' DatePicker, an 'Email' TextBox, a 'Phone' TextBox, and a 'Wheelchair assistance required' CheckBox. Below both cards place a primary 'Review Booking' button aligned to the right edge. Use the SkyWave brand: green primary AppBar, soft borders, 16px gaps."* | `stage1-flight-search.json` |
| **Flight Results** (stage 2) | Review itinerary, fare breakdown, and confirm | *"Build a single-page SkyWave Airlines booking confirmation page. Use four Card sections stacked vertically with 20px gaps. Card 1 'Flight Details' shows the route as '{origin} → {destination}' as a large heading, with a row of four labelled pairs: Departure, Cabin, Passengers (e.g. '2 Adults'), and Trip Type. Card 2 'Passenger Details' shows three labelled pairs: Full Name, Email, Phone. Card 3 'Fare Breakdown' lists Base Fare, Taxes & Fees, and a bold Total Payable, with an information note that the fare is non-refundable after 24 hours. Card 4 'Confirm Booking' has an agreement Checkbox for fare rules followed by two buttons in a row: a 'Modify Booking' outline button and a primary 'Confirm & Pay' success button. Use the SkyWave brand: green primary AppBar, soft borders, 16px gaps."* | `stage2-flight-results.json` |
| **Booking & Confirmed** (stage 3) | Final receipt after payment | *"Build a single-page SkyWave Airlines booking confirmed page. At the top, render a green Success Message with the text 'Booking Confirmed! Reference: {bookingRef}.' Below it, render four Card sections stacked vertically with 20px gaps. Card 1 'Booking Reference' shows the booking reference as a large bold purple heading. Card 2 'Flight Details' shows the route '{origin} → {destination}' as a heading, then a labelled summary list of Departure Date, Cabin Class, Trip Type, and Passengers. Card 3 'Passenger Details' shows the full name, email, and phone as labelled pairs. Card 4 'Amount Paid' lists Base Fare, Taxes & Fees, and a bold Total Paid. Below the cards, render an information Message reminding the customer that a confirmation email has been sent and they need a valid photo ID on the day of travel. Use the SkyWave brand: green primary AppBar, soft borders, 16px gaps."* | `stage3-booking-confirmation.json` |

For complete surface definitions and examples, see the designs directory in the agent project.

## Integrating Copied JSON with Your Agent

Once you copy JSON from Composer Playground, integrate it with your Syncfusion A2UI Agent using **`agent.set_design(...)`**. One method, every input shape:

- Pass a parsed design (`dict` / `list`)
- Pass a JSON string
- Pass a file path (e.g. `"designs/booking_form.json"`)
- Pass a **directory** (`"designs/"`) — every `*.json` in the directory is treated as a page in a multi-page catalog, and the LLM picks the right page per request
- Pass a list of any of the above

The agent embeds every design into the system prompt under a **"UI Surface Design Contract"** template that tells the LLM to echo the design's structure verbatim and only vary data values derived from the user's prompt.

### Single-design integration (one screen)

Use this pattern when your agent serves a single screen (e.g. the SkyBook booking form on its own).

**Step 1.** Save the copied Composer JSON:

```text
examples/
└── designs/
    └── stage1-flight-search.json
```

**Step 2.** Call `set_design()` once in your agent's constructor:

```python
from syncfusion_a2ui_agent import SyncfusionAgent

class BookingFormAgent(SyncfusionAgent):
    def __init__(self, model):
        super().__init__(model=model)
        # One call: loads the file, validates it, locks the structure.
        self.set_design("examples/designs/stage1-flight-search.json")
```

That's it. Every user prompt returns the same Booking Form structure — only the data values (passenger details, payment fields) change.

### Multi-design integration (multi-page apps)

Use this pattern when your app has multiple screens and you want the LLM to route between them. The agent concatenates every design into a single markdown catalog; the LLM picks the right page per request.

**Step 1.** Drop one file per screen into `examples/designs/`:

```text
examples/
└── designs/
    ├── stage1-flight-search.json        # stage 1 — Search flight (collect passenger details)
    ├── stage2-flight-results.json       # stage 2 — Flight results (review + confirm)
    └── stage3-booking-confirmation.json # stage 3 — Booking confirmed (receipt + reference)
```

**Step 2 (multi-design).** Point `set_design()` at the directory:

```python
from __future__ import annotations
import logging
import os
from typing import Union
from syncfusion_a2ui_agent import SyncfusionAgent
from syncfusion_a2ui_agent.providers.base import AIProvider

_log = logging.getLogger("syncfusion_a2ui_agent")

DESIGNS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "designs")
_LLM_SPEED_KNOBS: dict[str, Union[str, int]] = {"reasoning_effort": "low", "verbosity": "low", "max_completion_tokens": 4096,}

_REQUIRED_ENV_VARS = ("AZURE_API_KEY", "AZURE_API_BASE", "AZURE_API_VERSION", "MODEL_NAME",)

class FlightBookingAgent(SyncfusionAgent):
    """Echoes one of the three pre-defined SkyWave pages per request."""
    def __init__(self, model: Union[str, AIProvider, type[AIProvider]]) -> None:
        super().__init__(model=model)
        if not os.path.isdir(DESIGNS_DIR):
            raise FileNotFoundError(
                f"Designs directory not found: {DESIGNS_DIR!r}. "
                "Create it with stage1/stage2/stage3 .json files before "
                "starting the agent."
            )
        self.set_design(DESIGNS_DIR)

        skills_path = os.environ.get("SKILLS_PATH", "")
        if skills_path:
            registry = self.enable_skills(skills_path)
            skills = registry.all_skills()
            _log.info(
                "Loaded %d skill(s) from %s: %s",
                len(skills),
                skills_path,
                [s.name for s in skills],
            )
        else:
            _log.warning(
                "SKILLS_PATH not set - skill routing disabled. "
                "Add SKILLS_PATH=<path> to your .env to enable it."
            )

    def extend_system_prompt(self) -> str:
        """Append a directive that pins the verbatim-echo contract.
        The catalog of pages is already injected by ``set_design`` on the
        base class, so we only need to tell the model what to do with
        it: echo verbatim, or fall back to the out-of-scope stub.
        """
        return (
            "You are the SkyWave Airlines flight-booking assistant. "
            "Echo the design above verbatim (same surfaceId, same components, "
            "same dataModel). Vary only the data values. "
            "Out of scope -> workspace surface with AppBar + Message "
            "(severity Information, content 'I can only assist with "
            "SkyWave Airlines flight bookings.') + Button 'Book a Flight'."
        )


def _require_env(env_path: str) -> None:
    """Raise a helpful error if ``.env`` or required vars are missing."""
    if not os.path.isfile(env_path):
        raise FileNotFoundError(
            f".env file not found at {env_path!r}. Copy .env.example to .env "
            "and fill in your Azure OpenAI credentials before starting the agent."
        )
    missing = [name for name in _REQUIRED_ENV_VARS if not os.environ.get(name)]
    if missing:
        raise EnvironmentError(
            "Missing required environment variables: "
            + ", ".join(missing)
            + ". Set them in your .env file or shell before starting the agent."
        )


def main() -> None:
    from dotenv import load_dotenv
    from syncfusion_a2ui_agent.providers.azure_openai_provider import (
        AzureOpenAIProvider,
    )
    env_path = os.path.join(os.path.dirname(__file__), ".env")
    load_dotenv(env_path)
    _require_env(env_path)
    provider = AzureOpenAIProvider(
        api_key=os.environ["AZURE_API_KEY"],
        azure_endpoint=os.environ["AZURE_API_BASE"],
        api_version=os.environ["AZURE_API_VERSION"],
        azure_deployment=os.environ["MODEL_NAME"],
        **_LLM_SPEED_KNOBS,
    )
    agent = FlightBookingAgent(model=provider)
    agent.serve(host="127.0.0.1", port=10006)

if __name__ == "__main__": main()
```

**Step 3.** Run the agent as an A2A server:

```bash
python examples/flight_booking_agent.py --serve
# A2A server listens on http://127.0.0.1:10006
```

## Troubleshooting Common Issues

| Issue | Solution |
|-------|----------|
| **"No root component found"** | Every surface must include `{ "id": "root", "component": "Column", ... }` as the first component |
| **"Component with id 'X' not found"** | Verify that the ID listed in a parent's `children` array is defined in the `components` array |
| **"Action not triggered on button click"** | Ensure button onClick uses event wrapper: `{ "event": { "name": "action_name" } }` |
| **Preview shows blank or error** | Check that all component IDs are unique, all child references exist, and `catalogId` is valid |
| **Agent returns different UI for same request** | Save the Composed design as a file under `examples/designs/` and bind it via `agent.set_design("examples/designs/your-surface.json")` so the agent locks the structure |

## Build the SkyBook Flight Booking App

This section walks through the **SkyBook** React app — a flight-booking experience that pairs a chat assistant with a live A2UI surface. The flow is:

1. The user lands on a **welcome** view with three stage cards (**Search Flights**, **Flight Results**, **Booking & Confirmation**) and a free-form prompt input. Clicking a stage — or typing any flight request — switches the app to the **chat** view.
2. In the **chat** view, the user types a message into a `TextBoxComponent` and clicks the `Send` `ButtonComponent`. The browser POSTs a JSON-RPC `message/send` request to the agent.
3. The agent replies with a `result.artifacts[0].parts[0].data.a2uiEnvelope` array.
4. That array is fed to a `MessageProcessor`, which builds a `SurfaceModel` and renders it in the right-hand **surface** pane via `<SyncfusionA2UIProvider surface={surface} />`.
5. When the user clicks a button inside the rendered surface, the same processor invokes a single action callback that re-posts to the agent as another `message/send` request — the same loop, just driven by a button instead of the prompt input.

### Step 1: Create the React app

```bash
npm create vite@latest skybook -- --template react-ts
cd skybook
npm install @syncfusion/ej2-react-a2ui @syncfusion/ej2-react-inputs @syncfusion/ej2-react-buttons @syncfusion/ej2-base --save
```

> For the full prerequisite list (Node.js version, React 19, theme selection), see the [Getting Started guide](./getting-started).

### Step 2: Build the app

Replace the contents of `src/App.tsx` and `src/App.css` with the snippets below. The TSX wires up the chat + surface panes, defines the three SkyBook stages, posts user prompts to the agent, and renders the A2UI surface next to the chat. The CSS rules lay out the header, two-pane body, stage cards, chat bubbles, and surface placeholder; `.surface-pane` is height-bounded so the rendered surface scrolls inside the shell instead of expanding past it.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/common/a2ui-chat-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% include code-snippet/common/a2ui-chat-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

> **Note**
>
> The `TextBoxComponent` and `ButtonComponent` from `@syncfusion/ej2-react-inputs` and `@syncfusion/ej2-react-buttons` need a Syncfusion theme CSS bundle to render correctly. If you have not already imported a theme in `src/main.tsx`, add one of the following before the `App` import:
>
> ```ts
> import '@syncfusion/ej2-tailwind3-theme/styles/tailwind3.css';
> // or @syncfusion/ej2-material-theme, @syncfusion/ej2-fluent2-theme, etc.
> ```

### Step 3: Run the app

Start the Vite dev server:

```bash
npm run dev
```

Open the URL it prints (typically `http://localhost:5173/`). The SkyBook welcome view opens with the three stage cards. Click **Search Flights**, **Flight Results**, or **Booking & Confirmation** to send the corresponding starter prompt to the agent — the chosen A2UI surface (search form, results grid, or booking confirmation) renders in the right-hand pane. You can also type any free-form flight request into the prompt box; the agent's `a2uiEnvelope` reply is fed to the `MessageProcessor`, which builds a `SurfaceModel` that `<SyncfusionA2UIProvider>` renders next to the chat. Clicking any button inside the rendered surface sends the action back to the agent as a JSON text message — and the next reply replaces the current surface.

That's the whole loop:

| What you write | What happens at runtime |
| --- | --- |
| `TextBoxComponent` (welcome prompt + chat input) | User picks a stage card on the welcome view, or types a free-form request. |
| `ButtonComponent` (`Ask SkyBook` / `Send`) | Browser fires `sendPrompt(...)` and switches to the chat view. |
| `fetch(AGENT_URL, …)` with `parts: [{ text }]` | The browser POSTs a JSON-RPC `message/send` envelope carrying the user's text query. |
| `processor.processMessages(messages)` | The agent's `a2uiEnvelope` is validated; on every `createSurface` the matching `SurfaceModel` is stored and fires `onSurfaceCreated`. |
| `<SyncfusionA2UIProvider surface={surface} />` | The Syncfusion component tree mounts in the right-hand surface pane. |
| User clicks a button inside the surface | The processor's action callback fires; the action is summarized into a chat bubble and re-posted to the agent as a `{ data: action }` part on the next `message/send` request (A2UI v0.9 production format). |

### Step 4: Pair the app with the agent you created above

For the SkyBook app to do anything useful, the agent at `AGENT_URL` must be an A2A v0.9 server that returns `a2uiEnvelope` in its reply. Use the **`FlightBookingAgent`** you created in the [Multi-design integration](#multi-design-integration-multi-page-apps) section above — it is already wired with `agent.set_design("examples/designs/")` and the SkyWave persona, so it serves all three SkyBook pages (Search Flight, Flight Results, Booking & Confirmed) from one running process.

```bash
# 1. Clone the agent repo
git clone https://github.com/syncfusion/syncfusion-a2ui-agent.git
cd syncfusion-a2ui-agent

# 2. Install the ADK and the example package (the one that contains FlightBookingAgent)
python -m pip install -e ".[dev]"
python -m pip install -e examples

# 3. Configure your AI provider credentials
cp examples/.env.example examples/.env
# Open examples/.env and fill in AZURE_API_KEY, AZURE_API_BASE, MODEL_NAME, etc.

# 4. Drop your copied JSON files into examples/designs/
#    (stage1-flight-search.json, stage2-flight-results.json, stage3-booking-confirmation.json)

# 5. Start the FlightBookingAgent as an A2A server on http://127.0.0.1:10006
python examples/flight_booking_agent.py
```

> The agent binds to `127.0.0.1:10006` by default. The SkyBook app reads its agent URL from `VITE_AGENT_URL` (default `http://localhost:10005`), so set `VITE_AGENT_URL=http://127.0.0.1:10006` in your React app's `.env` to point at the agent, or start the agent on port `10005`. To run the bundled `generic_demo_agent` instead (single-page, no `set_design()` contract), use `python examples/generic_demo_agent.py --serve`.

The agent treats every `*.json` in `examples/designs/` as a page in a multi-page catalog and picks the right one per request. See [Integrating Copied JSON with Your Agent](#integrating-copied-json-with-your-agent) above for the full pattern.


## Where to go next

Now that you understand how to use Composer Playground and copy A2UI JSON, explore these next topics:

* **[Overview](./overview)** — Introduction to Syncfusion A2UI and its use cases
* **[Getting Started with A2UI for React](./getting-started)** — How to set up your first React application to render A2UI surfaces
* **[AI Integration with Syncfusion A2UI for React](./ai-integration)** — Production wiring (streaming, bearer-token auth, error handling, multiple surfaces)
* **[A2UI v0.9 Protocol](https://a2ui.org/)** — Deep dive into message formats, the MessageProcessor, and the A2UI runtime

