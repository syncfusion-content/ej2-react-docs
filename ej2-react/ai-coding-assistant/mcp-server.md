---
layout: post
title: SyncfusionReactAssistant MCP Server | Syncfusion
description: Learn how to configure and use SyncfusionReactAssistant MCP server for intelligent code generation, documentation, and troubleshooting in React apps.
control: Getting started with SyncfusionReactAssistant MCP Server
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# SyncfusionReactAssistant MCP Server

## Overview

The [SyncfusionReactAssistant](https://www.npmjs.com/package/@syncfusion/react-assistant) is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) server that provides intelligent assistance for developers using Syncfusion's React component libraries. It integrates with compatible [MCP clients](https://modelcontextprotocol.io/clients) to enhance the development workflow when building React applications with Syncfusion<sup style="font-size:70%">&reg;</sup> components.

### Key benefits

* Intelligent code generation for Syncfusion<sup style="font-size:70%">&reg;</sup> React components  
* Detailed component documentation and usage examples  
* Context-aware troubleshooting for common integration challenges

## Prerequisites

Before using [SyncfusionReactAssistant](https://www.npmjs.com/package/@syncfusion/react-assistant), ensure you have:

* Required [node](https://nodejs.org/en/) version >= 18
* A [compatible MCP client](https://modelcontextprotocol.io/clients) (VS Code with GitHub Copilot, [Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio](https://www.syncfusion.com/code-studio/), etc.)
* An active Syncfusion<sup style="font-size:70%">&reg;</sup> license (any of the following):
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)
* An active [API KEY](https://syncfusion.com/account/api-key)

## Unlimited access

Syncfusion provides unlimited access to this MCP server with no restrictions on:

* Number of requests  
* Component usage  
* Query caps  
* Usage duration

This enables unhindered use of the assistant across development workflows.

## Installation and setup

Configure the `SyncfusionReactAssistant` MCP client with the following core settings. These generic MCP server settings are applicable across clients:

### Generic MCP server settings

* **npm package name**: `@syncfusion/react-assistant`  
* **Type**: `stdio` (standard input/output transport)  
* **Command**: `npx`  
* **Arguments**: `-y`  
* **Server name**: `syncfusionReactAssistant`

#### API key configuration

Login to your [Syncfusion account](http://syncfusion.com/account/) and generate an API Key from the [API Key page](https://www.syncfusion.com/account/api-key). Replace `YOUR_API_KEY_FILE_PATH` or `YOUR_API_KEY` in the configuration files with your generated key.

There are two options:

* **Using an API Key File (Recommended)**

  Store your API key in a separate file and reference its path in the `Syncfusion_API_Key_Path` environment parameter. This approach is more secure as you don't expose the key directly in configuration files.

  **Supported file formats:** `.txt` or `.key` file

```json
"env": {
  "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH" // "D:\\syncfusion-key.txt" (or) "D:\\syncfusion-key.key"
}
```

**Using a direct API key**

Set the key directly in the MCP configuration:

```json
"env": {
  "Syncfusion_API_Key": "YOUR_API_KEY"
}
```

> If both the key file and the environment variable are provided, the `Syncfusion_API_Key_Path` file takes priority.

Below are setup instructions for popular MCP clients:

### Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio

* In [Code Studio](https://www.syncfusion.com/code-studio/), open the MCP Marketplace, find `SyncfusionReactAssistant`, and click Install.  
* When prompted, provide your [Syncfusion API key](https://syncfusion.com/account/api-key) to register the extension.  
* The server installs locally and is available in the Installed list; it is then ready to use. See [Code Studio documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/marketplace) for details.

### VS Code (GitHub Copilot MCP)

Create a `.vscode/mcp.json` file in your workspace with the MCP server configuration:

```json
{
  "servers": {
    "syncfusion-react-assistant": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/react-assistant@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```

After saving, use the MCP UI in VS Code to start the server. Confirm startup by checking for a message such as `SyncfusionReactAssistant is running...` in the output.

See VS Code MCP server docs: https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_add-an-mcp-server

### Cursor

Create a `.cursor/mcp.json` file with similar settings:

```json
{
  "mcpServers": {
    "syncfusion-react-assistant": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/react-assistant@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
      }
    }
  }
}
```

Refer to Cursor MCP docs: https://cursor.com/docs/context/mcp#using-mcp-json

### JetBrains IDEs

* Go to Settings → Tools → AI Assistant → Model Context Protocol (MCP).  
* Add a new MCP server and paste the JSON configuration (use `npx` command on Windows with `npx.cmd` if required):

```json
{
  "mcpServers": {
    "syncfusion-react-assistant": {
      "command": "npx.cmd",
      "args": ["-y", "@syncfusion/react-assistant@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
      }
    }
  }
}
```

Apply and start the server. See JetBrains docs: https://www.jetbrains.com/help/ai-assistant/mcp.html#connect-to-an-mcp-server

> For additional client-specific examples, consult the client's documentation (e.g., Windsurf, GitHub Copilot MCP docs).

## Usage

To invoke the SyncfusionReactAssistant in a chat session, start your prompt with one of the triggers:

* `SyncfusionReactAssistant`  
* `/syncfusion-react-assistant`  
* `/syncfusion-react`  
* `@syncfusion-react`  
* `@ask_syncfusion_react`  
* `ej2-react`

In VS Code, prefix with `#SyncfusionReactAssistant` for direct invocation. Grant permission when prompted and start a new chat for each topic to maintain focused context.

### Mode availability

Syncfusion MCP servers provide full access to AI interaction modes — Ask/Chat, Edit, and Agent — across supported MCP clients.

### Best practices

1. Be specific: include platform and component (e.g., "Create a Syncfusion React Grid with paging and filtering").  
2. Provide context: share versions, desired behavior, and constraints.  
3. Use descriptive queries: avoid vague questions.  
4. Start a new chat for new topics to maintain clean context.

### Example queries

* "Create a Syncfusion React Grid component with paging, sorting and filtering."  
* "How do I implement data binding with Syncfusion React Scheduler?"  
* "Show me how to create a dashboard with multiple Syncfusion components."

## Troubleshooting

If issues occur:

* Verify API key configuration (path or value).  
* Ensure the MCP server is enabled in the client's MCP settings.  
* Confirm the MCP client version is compatible.  
* Restart the MCP client or development environment.  
* Check the tool output logs for diagnostic messages.

## Support

* [Submit a support ticket](https://support.syncfusion.com/support/tickets/create) — guaranteed response in 24 hours  
* [Community forum](https://www.syncfusion.com/forums/essential-js2)  
* [Feature requests / bug reports](https://www.syncfusion.com/feedback/javascript)  
* Live chat via Syncfusion website

## See also

* [Syncfusion React Documentation](https://ej2.syncfusion.com/react/documentation)