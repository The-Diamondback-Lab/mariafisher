# Deployment

Below you'll find instructions on how to deploy to Zeit Now.

## Overview

[Prerequisites](#prerequisites)  
[Getting Started](#getting-started)  
[Deploy to Zeit Now](#deploy-to-zeit-now)  

## Prerequisites

Follow the [Guide to Contributing](CONTRIBUTING.md) for detailed instructions on
development, testing, and making a pull request.

You'll also need to have [Now CLI][1] setup.

## Getting Started

> ZEIT Now is a cloud platform for static sites and Serverless Functions. It
> enables developers to host websites and web services that deploy instantly,
> scale automatically, and requires no supervision, all with no configuration.

### Environment Variables & Secrets

> To define an environment variable for a deployment, use Now Secrets. By using
> Now Secrets, the data will be encrypted and stored securely.

Make sure to add our Mailchimp API key as a secret. To do so, run the following
command, where `<secret-value>` is our Mailchimp API key.

```bash
  now secrets add MAILCHIMP_API_KEY <secret-value>
```

Reference: [Serverless Function Environment Variables and Secrets][2]

## Deploy to Zeit Now

Below you'll find information on deploying to staging and production URLs.

[Personal Staging](#personal-alias)  
[Staging](#staging)  
[Production](#production)  

Reference: [Automatic Aliasing on Now][3]

### Personal Alias

To created a **personalized** staging url, run the command `now`.

> This alias is automatically assigned to all of your deployments and varies
> depending on your project name, username, and team name.

If your deployment is successful, you'll see the following:

```bash
  > Deploying ~/<DIRECTORY_PATH>/mariafisher under the-diamondback-lab
  > Using project mariafisher
  > Synced 1 file [1s]
  > https://mariafisher-9tp1g1p10.now.sh [3s]
  > Ready! Deployed to https://mariafisher-<username>.the-diamondback-lab.now.sh
```

Users outside the `modelb` organization will receive a url that looks like:

```bash
https://mariafisher.<username>.now.sh
```

### Staging

To deploy to a **team** staging url, run the following commands:

```bash
  npm run deploy:staging
```

If your deployment was successful, you'll see the following:

```bash
  > now --target staging

  > Deploying ~/<DIRECTORY_PATH>/mariafisher under modelb
  > Using project mariafisher
  > Synced 17 files [1s]
  > https://mariafisher-d6z096pg0.now.sh [4s]
  > Ready! Deployment complete [37s]
  - https://mariafisher.the-diamondback-lab.now.sh
  - https://mariafisher-<username>.the-diamondback-lab.now.sh
```

### Production

To deploy to production:

Make sure an `alias` key is present in the `now.json`:

```json
  {
    "alias": "mariafisher.now.sh"
  }
```

Then run the following command:

  `npm run deploy:prod`

If your deployment was successful, you'll see the following:

```bash
  > now --prod

  > Deploying ~/<DIRECTORY_PATH>/mariafisher under the-diamondback-lab
  > Using project mariafisher
  > Synced 1 file [883ms]
  > https://mariafisher-7c9ag3r6n.now.sh [3s]
  > Ready! Deployment complete [29s]
  - https://mariafisher.now.sh
  - https://mariafisher.the-diamondback-lab.now.sh
  - https://mariafisher-<username>.the-diamondback-lab.now.sh
```

[1]: https://github.com/zeit/now-cli
[2]: https://zeit.co/docs/v2/serverless-functions/env-and-secrets/
[3]: https://zeit.co/blog/automatic-aliasing
