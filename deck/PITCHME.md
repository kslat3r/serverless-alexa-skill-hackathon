## Building your First Alexa Skill using the Serverless Framework

### December 6th 2018

---

### What we will cover

* How to use the Serverless Framework
* How to configure your Alexa skill on the AWS platform
* How to build your Alexa skill and get it to recognise basic commands

*Bear in mind that this is a code-along!*

---

### What this is not

* An analysis of the various FaaS providers
* How to publish your Alexa skill to Amazon

---

## Prerequisites

---

* A terminal
* A web browser
* A text editor (Visual Studio Code)
* Node.js v8.9.4
* NPM v5.6.0
* **An AWS account** - get a free trial here https://aws.amazon.com/s/dm/optimization/server-side-test/free-tier/free_np/

*Please double check you have the correct versions of Node/NPM*

---

## Let's go!

---

### Please clone the following repository from Github

#### https://github.com/kslat3r/serverless-alexa-skill-hackathon

* Checkout the branch `step-one`

---

## Creating your Servless framework template

---

### Steps to complete:

* `npm install -g serverless`
* `serverless create --template aws-nodejs --path src`
* Update src/serverless.yml with correct service name

---

## Setting up your provider credentials

---

![Video][https://www.youtube.com/embed/KngM5bfpttA]

---

### Steps to complete:

* Login via http://aws.amazon.com
* Search for IAM
* Add new user "serverless"
* Click "programmatic access"
* Attach a policy
* Click on "AdministratorAccess"
* Create the user
* Download the credentials
* `serverless config credentials --provider aws --key xxx --secret yyy`

---

## Publishing our example function
### Checkout `step-two`

---

### Steps to complete:

* Install `sinon`, a mocking library
* Install `chai`, an assertion library

---

## Adding some specs!

---

### Specs to complete:

* filters/todo.spec.js
* mappers/todo.spec.js
* models/user.spec.js
* services/todo.spec.js
* services/user.spec.js

---

## Things to think about

* Use `sinon` where appropriate to mock application dependencies outside of the units
* Use `chai` where appropriate to create assertions against results

---

## Writing some component tests

---

### Steps to complete:

* Install `supertest` HTTP assertion library
* Configure `package.json` with a new NPM script to execute our component tests
* In the directory `src/test/`, write component tests for:
  * `GET /api/users`
  * `GET /api/users/1`
* **BONUS** add the `mochawesome` reporting tool

---

### Thank-you all very much!