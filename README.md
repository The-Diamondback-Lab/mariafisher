# Diamondback Lab Special Project - Fisher: 1 Year Later

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


##### Overview
[What is Fisher: 1 Year Later?](#what-is-fisher-1-year-later)  
[Getting Started](#getting-started)  
[Development](#development)  
[Testing](#testing)  
[Deployment](#deployment)  
[References](#references)  
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
These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### Prerequisites
1. [Install Node](https://nodejs.org/en/download/)
2. [Install Git](https://git-scm.com/downloads)
3. Install Firebase command line tools using npm:
    ```
    npm install -g firebase-tools
    ```  

### Installing
Follow the steps below to get your development enviroment set up.

1.  Pull the repo. Open the terminal and and run the following:

    ```
    git clone https://github.com/The-Diamondback-Lab/fisher1yearlater.git
    ```

2.  After cloning the repo, open the project. Run the following command:

    ```
    npm install
    ```

      in the terminal. This will install the necessary dependencies for the
      project. A list of those dependencies can be found in `package.json`.


#### Development
Run `npm run dev` to begin making changes. This will watch your `*.js(x)` and
`*.sass` files. As you develop, Create React App will automatically reload and
deploy your changes locally.
- **Note:** If react-scripts fails to run the development server with the error
  "custom keyword definition is invalid: data.errors should be boolean", please
  reference [this link][1].


##### Documentation
Following [JSDoc](http://usejsdoc.org/) standards, be sure to document any functions, classes, and other
code you write. It will be reviewed by a reviewer during your code review, and
your pull request will be denied if any code is improperly documeted.

For an overview of our JavaScript style guide, go to https://standardjs.com.


#### Testing
When you're ready to test your changes, run `npm test` in your project
directory. This will build the project and run your tests, as well as all the tests in the `__tests__` directory.  

A production build of the application can be served locally in two ways:
1. Run `npm run serve-staging` in the project directory. This will serve the
   `public` folder with the Firebase Hosting settings for the staging site.
2. Run `npm run serve-production` in the project directory. This will build the
   project and serve the `build` folder with the Firebase Hosting settings for
   the production site.

**Note: Before creating a new branch and creating a pull request for your
changes, your build must pass all the tests and must work locally with the
Firebase staging instance. If you need help, please create a
test file and leave a comment in the test body, making note of any issues in
their respective files. Make sure to label your pull request "help wanted."**

If you're ready to have your changes reviewed, make sure your code is well
documented, and create a branch for your changes. Make sure to name the branch
appropriately, prefixing it with feature-, issue-, hotfix-, or release-. To
do this, run the following in your terminal:  
1. `git checkout -b <BRANCH_NAME> development`
2. `git commit -am "<DESCRIPTIVE_COMMIT_MESSAGE>"`
3. `git push`
4. `git checkout development`

If you need to make additional changes, checkout your branch again, and then
commit and push your changes.

#### Deployment
1. Update `firebase.json` to configure Firebase Hosting, and push the changes to a
release branch, if necessary. 
  - **Note:** The predeploy and rewrites properties are not mandatory for
   Firebase, but they are mandatory for this project. 
2. To set up the Firebase targets, run the following in your terminal:
    1. `firebase target:apply hosting staging staging-fisher1yearlater`
    2. `firebase target:apply hosting production fisher1yearlater`

**Staging**  
Deploy using one of the following options:
- Run `npm run deploy-staging` in your terminal to deploy to Firebase.
- Run `firebase deploy -m "<YOUR_MESSAGE>" --project fisher1yearlater --only hosting:staging` to deploy to
  Firebase Hosting with an optional deploy message.

**Production**  
Deploy using one of the following options:
- Run `npm run deploy-production` in your terminal to deploy to Firebase. The
  predeploy hook will create a production build of the project.
- Run `firebase deploy -m "<YOUR_MESSAGE>" --project fisher1yearlater --only hosting:production` to deploy
  to Firebase Hosting with an optional deploy message.


### References
Helpful links referenced during development.
- [/node-sass/vendor no such file or directory in node-sass@3.13.0][2]

### Built With
- [Create React App](https://github.com/facebook/create-react-app)
- [Firebase](https://firebase.google.com/docs/web/setup)

[1]: https://github.com/webpack/webpack/issues/8768#issuecomment-462090327
[2]: https://github.com/sass/node-sass/issues/1812#issuecomment-304219746