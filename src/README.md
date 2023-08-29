<!-- This README file is going to be the one displayed on the Grafana.com website for your plugin. Uncomment and replace the content here before publishing.

Remove any remaining comments before publishing as these may be displayed on Grafana.com -->

# Kyklos Button Panel

It provides a simple Grafana 9.x panel that shows only one button - to integrate with any kind of HTTP/REST API:

- Support `GET` and `POST` HTTP verb
  - Adds no new javascript dependencies
  - Uses standard browser APIs and respects CORS
  - Optional text payload for `POST` requests via syntax-highlighiting editor
- Support for custom header parameter or query parameter
- Variable support via `$variableName` in
  - URL
  - Header/Query parameter name & value
  - POST body payload
  - Button label
- Support for HTTP Basic Auth
- Custom label text & Grafana template design
  - Customize icon & button colors

## Usage

![Screencast](https://github.com/FrankRoos/Kyklos-Button-Panel/blob/main/src/img/screencast.gif)

## Configuration

![Screenshot](https://github.com/FrankRoos/Kyklos-Button-Panel/blob/main/src/img/screenshot.png)

### Basic Auth

⚠️ Please note: ⚠️

Due to the Grafana API & security restrictions in modern browsers the following must be considered before using Basic Auth:

![Basic Auth Configuration](https://github.com/FrankRoos/Kyklos-Button-Panel/blob/v1.0.24/src/img/authentication.png)

- Neither username nor password are stored encryted in Grafana.
  The password is there to everyone with access to the dashboard in Grafana!
- The _server_ at the URL _must_ provide proper resposne to the [CORS pre-flight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request). That is:
  - Provide a proper response to the `OPTIONS` request performed by the browser before the actual `GET`/`POST` requiest is issued
  - Provide a [`Access-Control-Allow-Credentials: true`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header
  - Provide a proper [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) header.
    _No wildcards_ are allowed if credentials are used!

These limitations are inherent and canot be fixed or addressed by the plugin!

Use Basic Auth only if these limitations are acceptable!

<!-- To help maximize the impact of your README and improve usability for users, we propose the following loose structure:

**BEFORE YOU BEGIN**
- Ensure all links are absolute URLs so that they will work when the README is displayed within Grafana and Grafana.com
- Be inspired ✨
  - [grafana-polystat-panel](https://github.com/grafana/grafana-polystat-panel)
  - [volkovlabs-variable-panel](https://github.com/volkovlabs/volkovlabs-variable-panel)

**ADD SOME BADGES**

Badges convey useful information at a glance for users whether in the Catalog or viewing the source code. You can use the generator on [Shields.io](https://shields.io/badges/dynamic-json-badge) together with the Grafana.com API
to create dynamic badges that update automatically when you publish a new version to the marketplace.

- For the logo field use 'grafana'.
- Examples (label: query)
  - Downloads: $.downloads
  - Catalog Version: $.version
  - Grafana Dependency: $.grafanaDependency
  - Signature Type: $.versionSignatureType

Full example: ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?logo=grafana&query=$.version&url=https://grafana.com/api/plugins/grafana-polystat-panel&label=Marketplace&prefix=v&color=F47A20)

Consider other [badges](https://shields.io/badges) as you feel appropriate for your project.

## Overview / Introduction
Provide one or more paragraphs as an introduction to your plugin to help users understand why they should use it.

Consider including screenshots:
- in [plugin.json](https://grafana.com/docs/grafana/latest/developers/plugins/metadata/#info) include them as relative links.
- in the README ensure they are absolute URLs.

## Requirements
List any requirements or dependencies they may need to run the plugin.

## Getting Started
Provide a quick start on how to configure and use the plugin.

## Documentation
If your project has dedicated documentation available for users, provide links here. For help in following Grafana's style recommendations for technical documentation, refer to our [Writer's Toolkit](https://grafana.com/docs/writers-toolkit/).

## Contributing
Do you want folks to contribute to the plugin or provide feedback through specific means? If so, tell them how!
-->
