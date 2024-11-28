# Redirector

Redirector is a simple Node.js application written in TypeScript that redirects incoming requests to a predefined URL, preserving all query parameters.

## Features

- Redirects all requests to a specified URL.
- Preserves query parameters during the redirect.
- Configurable with environment variables.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

Clone the repository or download the files.

```bash
git clone <repository_url>
cd redirector
```

Install the required dependencies:

```bash
npm install
```

Set the `REDIRECT_URL` environment variable to the URL you want to redirect to

## Usage

Run the application with:

```bash
npm start
```

The app will start serving on http://localhost:8080.

## Example

If you access the following URL in your browser:

http://localhost:8080/?state=test&code=123

It will redirect you to:

http://localhost:3000/auth/login?state=test&code=123