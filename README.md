# Diamondback Lab Special Project - Fisher: 1 Year Later

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)


##### Overview
[What is Fisher: 1 Year Later?](#what-is-fisher-1-year-later)  
[Getting Started](#getting-started)  
[Documentation](#documentation)  
[Development](#development)  
[Testing](#testing)  
[Deployment](#deployment)  
[Built With](#built-with)

#### What is Fisher: 1 Year Later?
Dan Fisher was admittedly a bit skeptical of his daughter Maria’s dream to open
a performing arts high school after she graduated from the University of
Maryland.  

But in the year since her death, Fisher has taken his daughter’s dream into his
own hands.  

In mid-February, the Fishers will open The Avenue Guest House and Gallery in
Lititz, Pennsylvania, a bed and breakfast that  will double as a performance
venue for local artists.  

Since the family purchased it in September, it’s become something of a sanctuary
for them, particularly as the investigation into Maria’s death has yielded more
questions than answers.  

On Oct. 1, 2017, just after 6 a.m., Maria Fisher, a first semester freshman, was
struck and killed by a car as she ran across Route 1. But, all these months
later, her loved ones aren’t sure where she was running from.   


#### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
**Install Node and Git:**  Download Node [here](https://nodejs.org/en/download/), and Git [here](https://git-scm.com/downloads)

### Installing
Follow the steps below to get your development enviroment set up.

1.  Pull the repo. Open the terminal and and run the following:

    ```
    git clone https://github.com/The-Diamondback-Lab/fisher-one-year-later.git
    ```

2.  After cloning the repo, open the project. Run the following command:

    ```
    npm install
    ```

   in the terminal. This will install the necessary dependencies for the
   project. A list of those dependencies can be found in `package.json`.

#### Documentation
Following [JSDoc](http://usejsdoc.org/) standards, be sure to document any functions, classes, and other
code you write. It will be reviewed by a reviewer during your code review, and
your pull request will be denied if any code is improperly documeted.

#### Development
1. In your project directory, run the command  `git checkout development`.
2. Run `npm run dev` and make your changes. This will watch your `*.js(x)` and
   `*.sass` files. As you develop, Create React App will automatically reload
   and deploy your changes locally.

**If react-scripts fails to run the development server with the error "custom
keyword definition is invalid: data.errors should be boolean", please reference
[this link](https://github.com/webpack/webpack/issues/8768#issuecomment-462090327).**

#### Testing
When you're ready to test your changes, run `npm run stage` in your project
directory. This will build the project and run your tests, as well as all the tests in the `__tests__` directory.  

A production build of the application can be served locally in two ways:
1. Run `npm run serve-staging` in the project directory. This will build the
   project and serve it locally, independent of the current Firebase configuration.
2. Run `npm run serve-production` in the project directory. This will build the project and
   create a local Firebase environment for your project. Use this option to test
   the hosting rules with the current build.

**Note: Before creating a new branch and creating a pull request for your
changes, your build must pass all the tests. If you need help, please create a
test file and leave a comment in the test body, making note of any issues in
their respective files. Make sure to label your pull request "help wanted."**

#### Deployment
**Staging**
1. Commit your changes and create a pull request. A preview of your changes will
   be available using [Netlify's Deploy Previews][1].
2. A reviewer will test your changes. If accepted, your changes will be merged
   into the development branch and the current release branch.

**Production**
1. Update `firebase.json` to configure Firebase Hosting, and push the changes
   to a hotfix branch, if necessary.  
   **Note:** The predeploy and rewrites properties are not mandatory for
   Firebase, but they are mandatory for this project.  
2. Merge the hotfix branch into the development and release branches.
3. Merge the release branch into master. Travis CI will deploy the `build`
   folder to Firebase.
4. Update the development branch with the fresh code from master.
5. Delete the old hotfix and release branches.

**Quick Production Deploys**
If you don't need or want to follow a production workflow, follow these
instructions.
1. Update `firebase.json` to configure Firebase Hosting, and push the changes
   to a hotfix branch, if necessary.  
   **Note:** The predeploy and rewrites properties are not mandatory for
   Firebase, but they are mandatory for this project.  
2. Deploy using one of the following options:
   - Run `npm run deploy` in your terminal to deploy to Firebase. The predeploy
     hook defined in `firebase.json` will create a production build of the
     project and deploy the default Firebase project. 
   - Run `firebase deploy -m "<YOUR_MESSAGE>" --only hosting` to deploy to
     Firebase Hosting with an optional deploy message.


#### Built With
- [Create React App](https://github.com/facebook/create-react-app)
- [Firebase](https://firebase.google.com/docs/web/setup)

[1]: https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/?_ga=2.240121859.1458332513.1549763090-1097346967.1549120139