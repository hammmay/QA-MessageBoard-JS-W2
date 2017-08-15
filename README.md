# Count From Zero - Q&A Message Board

#### By Laura Hamilton

## Description

This application is a Q&A message board, demonstrating Javascript through both Ember and Firebase. A user can create, update, and delete a question. A user can also answer any question and delete their answers. All question entries are displayed on the homepage, and all the answers are assigned to the individual question pages.

## Setup

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation
|Enter these commands in your console|
|---|
|`git clone <repository-url>` this repository|
|`cd qa-messageboard-js-w2`|
|`npm install`|

## Running / Development
|Enter these commands in your console|
|---|
|`ember serve`|
|Visit the app at [http://localhost:4200](http://localhost:4200)|

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Technologies Used

* JavaScript
* Ember
* Firebase
* Node
* Phantom

## Planning
1. Configuration/dependencies
  * Question dependency
  * Answer dependency within Question dependency

2. Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User clicks on the "Post A New Question" button on the homepage and an "Ask The Community" form with fields for a new question appears on the homepage|User clicks on the "Post A New Question" button|An "Ask The Community" form for a new question appears|
|User fills out all fields on the "Ask The Community" form and clicks the "Publish" button to see the question and author appended to the list of questions|User fills out the form and presses the "Publish" button|The new question appears at the bottom of the list of questions|
|User clicks on a question on the homepage and is taken to a unique page for the question|User clicks on the first question in the list|User is redirected to that question's page|
|User clicks on "Home" navigation header from any page on the site and is taken to the homepage|User clicks on "Home" navigation header|User is redirected to the homepage|
|User clicks on "About" navigation header from any page on the site and is taken to the "About" page|User clicks on "About" navigation header|User is redirected to the "About" page|
|User clicks on "Contact" navigation header from any page on the site and is taken to the "Contact" page|User clicks on "Contact" navigation header|User is redirected to the "Contact" page|
|User clicks on the "Delete This Question" button on a question's page and they are given a confirmation prompt where if confirmed, they are redirected to the homepage where the question is now gone|User clicks on the "Delete This Question" button and confirms on the prompt|User is taken to homepage and the deleted question is gone from the list of questions|
|User clicks on the "Delete Answer" button on a question's page and they are given a confirmation prompt where if confirmed, they are redirected to the homepage where the answer is now gone from the question page|User clicks on the "Delete Answer" button and confirms on the prompt|User is taken to homepage and when they return to the question's page, the deleted answer is gone from the list of answers|
|User clicks on the "Update This Question" button and an update form appears|User clicks on the "Update This Question" button|A form with the question's fields appear|
|User clicks on the "Save Changes" button on a question's page after filling out the Update form and they are redirected to the homepage where the updated question is displayed|User updates the field "Still Your Question?" with the name "John" and clicks the "Save Changes" button|User is redirected to homepage where the author name is now "John" on the question that was updated|
|User clicks on the "Give An Answer" button and an answer form appears|User clicks on the "Give An Answer" button|A form with the answer's fields appear|
|User clicks on the "Submit" button on a question's page after filling out the New Answer form and they see their answer for the question is appended to the Answers list|User types "Greg" in the field "Who Dis?" and types "Google It" into the "Add Your Two-Cents" field before clicking on the "Button" button|User is taken to homepage and when they return to the question's page, "Google It - Answered by Greg" is now appended as an answer|

3. Integration
  * Index page with dependencies in app/index.html head
  * templates/html page for About page
  * templates/html page for Contact page
  * templates/html page for dynamic Question page
  * Integrate navigation feature with templates/application.hbs file

4. UI
  * Install bootstrap
  * Add code for container classes and other styling for navigation header

5. Code QA
  * Complete a final QA following the specs for user behaviors and make any necessary adjustments to the code where/if needed

6. Polish
  * Enter filler Q&A for copy demonstration
  * Complete the README with any final adjustments and declarations
  * Delete any blacked out code, comments, and unnecessary whitespaces

### Legal

Copyright (c) 2017 Laura Hamilton laurahamilton9@gmail.com

This software is licensed under the MIT license.
