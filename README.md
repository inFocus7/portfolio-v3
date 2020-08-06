# Portfolio v3
![Fabian Gonzalez's portfolio logo](./public/logo/blkArtboard%201@0.5x.png)

Previous iterations online @ [v1](https://infocus7.github.io/) and [v2](https://fabianswe.com/). 

🔺 I will likely take a long while to complete this portfolio design due to many ~~excuses~~ reasons, such as 
learning Golang, trying to stay okay with fun LeetCode stuff, and wanting a break before I begin working full-time. 🔺

## Set Up
_Starting & Deployment not recommended at the current bare-bones state due to nothingness..._
_This will be contacting my portfolio-api(-v3, another work in progress), and I'll see if I can make that simple for
others to set up._

### 🏃 Starting Code
1) Clone the project using ```git clone <project_url>```.
2) In the project directory, run ```yarn install``` to install dependencies.
3) Run ```yarn dev``` to start up dev environment.

### 💾 Deploying To GitHub
When committing to GitHub...
1) Husky will run ESLint with Airbnb standards + custom JSDoc rules declared in
[.eslintrc.json](./.eslintrc.json).
2) If no linting errors, Jest tests are ran through all relevant files listed as arguments in 
[package.json](./package.json).
3) After everything is hopefully in order, code will be committed!

### 🚀 Publishing To Heroku
_**Work In Progress**_

## 💻 Technologies Used
### Front-end
* Design & Mock-ups
    * Framer X

* Production Build
    * Next.js
    * React.js
    * Apollo Client (GraphQL)
    * Framer Motion
    
* Development Build
    * TypeScript
    * ESLint
    * Jest
    * Enzyme
    * Husky

### Back-end
* [Node Back-end](https://github.com/inFocus7/portfolio-api-v3node)
* [Go Back-end](https://github.com/inFocus7/portfolio-api-v3go)

## Misc.
This portfolio design shall be:
1) More 'clean'/sleek. 🧹
2) Accessibility-ready.
3) Test-driven. 🧪
5) Cool. 😎 _hopefully..._
