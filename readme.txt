=== Background information about the case ===
The case aims to simulate a typical task you would work on in this position.
The case contains test data/dummy data, while the structure of data is a rather accurate and representative section sample of what you could expect in Cortex.

=== Core business supported by Cortex ===
Publicis delivers advertising, creative and PR services to our clients. 
For this case, our services within advertising is the most relevant.
In short a media agency both creates and executes media strategies and media plans to ensure optimum distribution of an advertisers ads.
This work entails full control of every planned, live and ended activity.
Traditionally media agencies have used Excels and powerpoints in order keep this control.
The traditional way of working is labour intensive, prone to error, and not scalable.
In order to solve this issue, the development team in Publicis Norway has created a platform called Cortex.

Cortex aims to provide control of activities, insights to data generated from activities as well as a common 
system with our clients to collaborate through every step of the process of setting up and running advertising activities (typically campaigns)

=== Users of Cortex and their needs ===
In reality Cortex have to cover the needs of agency employees, 
marketing personnel from the advertiser (our clients) and representatives from creative agencies (also outside of publicis).

For this case, you can consider users of the system to be employees of Publicis in Norway. These people include client leads and media specialists. 
Common for both is their need to have control over clients campaigns throughout the media planning and buying process. 
This entails a easy to use interface for handling campaigns and clients, and seeing who “owns” the campaigns.



=== Assessment criteria ===
Assessment criteria listed here in no specific order
1. Code
	- Readability (easy to understand logic behind the code)
	- Naming (class, function and field names)
	- Structure (How components/classes have been split up and how they communicate with each other)
2. Visual design and usability
	- Use of colors, fonts and layout to make the product look good and feel good to use
3. Functionality
	- How much functionality has been included and how well does it work



=== Setup ===
Sample project has been provided, it contains code for a simulated API and some basic configuration for the setup.
Project uses npm with Vue CLI and TypeScript.
You may swap this for your own setup if you wish.
Vue.js with TypeScript is preferred, but you may also use similar frameworks (react, angular, svelte, ...)

You can install and use any framework/library from npm.
You can swap out npm for yarn if that is preferable.

https://www.npmjs.com/get-npm
https://cli.vuejs.org/

1. Install npm and vue-cli
2. Navigate to the project directory
3. Run commands:
	> npm install
	> npm run serve
4. Open your browser with the URL http://localhost:8080/

=== Task Description ===
Your task is to request data from the API and display information to the user.
If you want to use the sample project then continue where we left off in src/app.vue
Either use the sample project as a template, or make your own from scratch.
Use ApiClient class from the project, which provides a set of functions to fetch data with a simulated networking delay.

Do the following:
A.	Fetch and display data from the API
	The page should contain overview of campaigns, users and clients (provided from the API).
	You could have them as tables or lists.
	Feel free to add some tab functionality to swith between them, or simply put them underneath eachother.
B.	Style the app according to your taste in UI and UX


Now you can further build on the solution as you want, here are some examples of what you can do:

1. Add images of users and clients (any stockphotos from google images or similar works)
2. Loading animation while waiting for api to make the request on page load
	- feel free to extend the delay timer in api-client.ts
3. sort and/or filter functionality
	- it is not nescessary to cover all fields, pick a few
	- feel free to use any existing library that you feel solves this
4. input fields and validation to add and edit data
	- the API does not have functions to send data into, so you can skip the final step of sending the input to the API.
5. Use Vue router to split campaigns, users and clients into 3 separate views that is displayed on separate URLs
	- Include a navigation menu for the user to switch between them
6. Include login with input for email and password
	- Active user can be stored in a cookie
	- Emails and passwords has been included in the supplied dataset (api-client.ts)
	- hashing is not part of this task for the sake of simplicity
	- An existing method named login exists in api-client.ts, but has not been implemented


Questions regarding this case can be sent to
christian.lysaker@publicisgroupe.com

=== Delivery ===
You can deliver it in any of the following ways:
1. Compressed archive (.zip or .7z is preferred)
2. Link to git repository (on github or other)
	- Make sure repository is public or otherwise not restricted by login credentials

Send to christian.lysaker@publicisgroupe.com
