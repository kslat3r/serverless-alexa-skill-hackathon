## Building your First Alexa Skill using the Serverless Framework

### February 7th 2019

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

![Provider credentials](https://www.youtube.com/embed/KngM5bfpttA)

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

* Checkout the branch `step-two`

---

### Steps to complete:

* `cd src`
* Deploy the function
  * `serverless deploy -v`
  * `serverless deploy function -f hello`
* Invoke the function
  * `serverless invoke -f hello -l`
* Fetch the logs
  * `serverless logs -f hello`

---

## Building our random fact generator

---

### Steps to complete:

* Build our random fact generator code
* Remove our test function
* Test our new function

---

### Creating our Alexa skill

* Checkout the branch `step-three`

---

### Steps to complete:

* Navigate to https://developer.amazon.com/alexa/console/ask
* Login
* Create skill
* Enter skill name
* Use custom skill model
* Start from scratch

---

### Steps to complete:
 
* Add Intent "RandomFactIntent"
* Add Utterances "random fact", "give me a random fact"
* Build your model!

---

### Steps to complete:

* Click "Endpoint" on left menu
* Retrieve Skill ID and update serverless.yml with Skill ID
* Redeploy randomFact function
* Add ARN of Lambda function to "Default Region" textbox

---

* Save model
* Build model
* Test model!

---

### Thank-you all very much!

### Please complete the following survey

### https://www.surveymonkey.co.uk/r/YJ9WQMJ
