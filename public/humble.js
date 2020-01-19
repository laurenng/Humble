/**
 * Name: Lauren Ng
 * Date: 11/13/2019
 * Section: CSE 154 AE Andrew Wolfram
 *
 * This is the JS file used to set functionality for the explore SF
 * website. It provides the front-end javascript for the file
 */
"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * loads the page by adding in functionality to the buttons and textbox
   */
  function init() {
    all()
    id("crafts").addEventListener("click", dele);
    id("all").addEventListener("click", alling);
    id("foods").addEventListener("click", foodie);
  }

  function foodie(){
    alling();
    console.log("food");
    let alled = document.querySelectorAll(".foods");
    for(let i = 0; i < alled.length; i++){
      alled[i].classList.add("hidden");
    }
  }
  function alling() {
    console.log("all");
    let alled = document.querySelectorAll(".company");
    for(let i = 0; i < alled.length; i++){
      alled[i].classList.remove("hidden");
    }
  }

  function dele(){
    alling();
    console.log("doing")
    let lists = document.querySelectorAll(".crafts");
    for (let i = 0;i <lists.length; i++){
      lists[i].classList.add("hidden");
    }
  }

  /**
   * fetches information about all the places
   */
  function all() {
    fetch("places/list")
      .then(checkStatus)
      .then(resp => resp.json())
      .then(listing)
      .catch(handleError);
  }

  /**
   * appends all the resturant names in san francisco on the website
   * @param {object} input - list of all the resturants
   */
  function listing(input) {
    id("resturant").innerHTML = "";
    console.log(input)
    let box = document.createElement("p");
    box.textContent = input;
    id("top").appendChild(box);
  }

  /**
   * recieves information about selected attraction and
   * appends information onto page
   * @param {object} input - list of attributes regarding attraction
   */
  function printed(input) {
    id("image").innerHTML = "";
    let image = document.createElement("img");
    image.src = input.pic;
    image.alt = input.name + "image";
    id("image").appendChild(image);
    id("name").textContent = input["name"];
    id("funFact").textContent = input["funFact"];
  }

  /**
   * prints resturant name on page
   * @param {string} input - name of the
   */
  function printlocation(input) {
    id("resturant").innerHTML = "";
    let box = document.createElement("p");
    box.textContent = input;
    id("resturant").appendChild(box);
  }

  /**
   * handles the errors when fetch call isn't sucessful.
   * tells users to try again
   */
  function handleError() {
    let message = document.createElement("p");
    message.innerText = "You made a mistake :/ try again";
    qs("footer").appendChild(message);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response; // a Response object
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

})();
