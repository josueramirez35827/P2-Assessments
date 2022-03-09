// Part 1: 30%, you must create a repo for part 1, separate from part 2
// Why does React utilize the virtual-dom?
 
    // React utilizes the virtual-dom because the vitual dom is only a virtual representation of eveytime the state of the application changes. This reduces the performance cost of updating the real DOM which makes this process much more efficient and faster.
 
// 2a How is data flowed in React? 2b. Why is React architected this way?

    // Data flow in React is Uni-directional. This being the data flows from the parent to the child using props but can't happen vice versa. React architected this way for a number of reason the main three being easier debugging, better data control, and superior efficiency. When you know where the data is coming from and where it's going, its easier to dry run and find the problems. Having the data flow in on direction makes the program less prone to errors therefore, giving the developer more control.
 
// 3. What is the purpose for lifting state up in React? Give an example of this

    // The purpose for lifting state up in React is to accomplish a sharing state by moving it up to the closest common ancestor of the componenets that need the inputs to be in sync with each other.

    // Example: App.js, PlayerContent.js, PlayerDetails.js
 
// 4. Why would a startup be interested in applying React-Router to a project? Explain in detail.

    // React-Router is a popular way of managing routes in React application by taking the stress out manually setting routes for all pages and screens. It does this by having a rich library of navigational componenets that making routing possible like Route, Link, BrowserRouter. It can be overkill for projects that aren't large and complex since basic navigation and routing founctionalities. But startups can be very interested in applying React-Router since startups have a lot of potential to extend and grow as a more rapid pace than a more establish company making Reac-Routers method of managing navigation all the more lucrative to start on earlier and later.
 
// 5. Can browsers read JSX? Why?

    // Browsers can not read JSX. This is because there is no inherent implementation for the browser engines to read and understand the language. To circumvent this be using babel to transform the JSX into its native version which the browsers can understand.
 
// 6. What is the significance of keys in React?

    // Keys are significant in React becuase they help identify which items have changed, are added, or are removed. 
 
// 7. What is the difference between Props and State?

    // The difference between Props and State are that use is used to store the data your current page need while props is used to pass the data and event handlers to your child components.
 
// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
 
// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

    // What is happening here is that we using .map to go the array and add 1 to each number and than getting a the new array with the new set of numbers.
 
// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

    //What is happening here is that we are using .map on the array to using using a function to go throught he array to have it return an new array where each number is increased by 1.
 
// 9. Given the array of strings: names, return a new array with each name properly capitalized. Must use .map() 
// const names = [ “James”, “Joseph”, “Diamond”, “Gillian”]
// function properNames(names) {
    
// let newNames = "";    
// let newArr = [];
// if(str.indexOf("-") != -1){
// newArr = str.split("-");
// for(var i = 1 ; i < newArr.length ; i++){
//   newArr[i] = newArr[i].charAt(0).toUpperCase();
// }      
// newNames = newArr.join("");
// }
// return newNames;
// }

// console.log(properNames(names)));
 
// }
 
// 10. Create an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Function smallWordsOnly(arr) {} 
