# Contributing

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. You'll also find information
on making a pull request.

## Overview

[Prerequisites](#prerequisites)  
[Installing](#installing)  
[Making Changes](#making-changes)  
[Testing](#testing)  
[Documentation](#documentation)  
[Making a Pull Request](#making-a-pull-request)  

## Prerequisites

You'll need to have Node and Git set up on your local machine.

- [Install Node](https://nodejs.org/en/download/)
- [Install Git](https://git-scm.com/downloads)

## Installing

Follow the steps below to get your development environment set up.

1. Open the terminal and and run the following:

    `git clone https://github.com/The-Diamondback-Lab/mariafisher.git`

2. Run `npm install` to install the project dependencies.

## Making Changes

[Create Your Development Branch](#create-your-development-branch)  
[JavaScript Style](#javascript-style)  
[User Interface](#user-interface)  

### Create Your Development Branch

**Branch Naming Convention**
**`<your_initials>/`**, followed by: **`feature-`**, **`issue-`**, **`hotfix-`**, or **`release-`**.

For example:

```bash
  git checkout -b ld/feature-docs
  git commit -am "added documentation"
  git push
```

### JavaScript Style

- **2 spaces** – for indentation
- **No unused variables** – this one catches tons of bugs!
- **No semicolons** – It's fine. Really!
- Never start a line with `(` , `[` , or `````
  - This is the only gotcha with omitting semicolons – automatically checked for you!
- **Space after keywords** `if (condition) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.

For a detailed overview of our JavaScript style, visit [**StandardJS**][2].
You'll find not only an overview of Standard Style, but a list of editor plugins
as well.

To configure the linting options for this project, make changes to
`.eslintrc.json` and `.eslintignore` in the project root.

Reference: [Configuring ESLint][3]

### User Interface

The Gateway API is hosted using Zeit Now's [Serverless Functions][4] feature.
For more information, please consult their documentation.

To make changes to the UI:

1. Run the command `npm run dev`
2. Edit files under the [`src`](../src) directory

## Creating a Pull Request

**Note: Before creating a pull request for your changes, make sure your build
passes all unit tests. If you need help, please create a test file and leave a
comment in the test body, making note of any issues in their respective files.
Make sure to label your pull request "help wanted."**

If you're ready to have your changes reviewed, make sure your code is well
documented and run `npm run lint` to check your code for syntax + styling errors.

### Submit for Review

- Use [**this template**][7]
- Label your pull request as `pull request` and `needs review`
- Prefix your pull request title with `PR  -`
- Assign the task to yourself and the appropriate reviewer

[1]: http://speakingjs.com/es5/
[2]: https://standardjs.com
[3]: https://eslint.org/docs/user-guide/configuring
[4]: https://zeit.co/docs/v2/serverless-functions/introduction/
[5]: https://mailchimp.com/developer/reference/lists/list-members/
[6]: https://jsdoc.app/
[7]: ../.github/pull_request_template.md
