# Project 2 - Destination Interest Finder

The Destination Interest Finder website calls upon the Google Maps API and the Google Places API to allow users do reseach for their next travel destination. 

The user is able to selection a location and then find a point of interest.

Users will be able to find:

- Find tourist attractions.
- Find accommodation.
- Find bars and restaurants.

## UX

The UX focus was on making an intuitive, clear and easy to use site. A mobile first approach has been taken when designing the site, ensuring that content and navigation are clear no matter what device the user is using.

The following user stories were created during the design process. The user should never need to go beyond three steps to get to their destination.
User Stories

- A user wants to find the location of a country on a map.
- A user wants to find the location of a city on a map.
- A user wants to find cities in a specific country.
- A user wants to find the location of tourist attractions in a selected city.
- A user wants to find the location of accommodation in a selected city.
- A user wants to find the location of Bars and restaurants in a selected city.
- A user wants to find out information on the point of interest once the have selected it.
- A user wants to clear all information and start a new search.

WireFrame diagrams
- [Desktop wireframe](https://michaelhdev.github.io/project-2/wireframe-diagrams/desktop-wireframe.JPG)
- [Tablet wireframe](https://michaelhdev.github.io/project-2/wireframe-diagrams/phone-tablet-wireframe.JPG)
- [Phone wireframe](https://michaelhdev.github.io/project-2/wireframe-diagrams/phone-tablet-wireframe.JPG)

## Features

Features
- Country selection feature: A user wants to find the location of a country on a map. => A user selects and country in the world from the country drop down box => The map zooms to that location.
- City selection feature:  A user wants to find the location of a city on a map. => A user types any city in the world directly into the city text box => The city text auto completes and zooms to that location on the map.
- Cities in a country feature: A user wants to find a city in a specific country. => A user selects a country from the country drop down box => The user can now only enter cities from that country in the city text box => The city text auto completes and zooms to that city on the map.
- Locate tourist attractions on a city map feature: A user wants to find tourist attractions in a selected city. => A user enters a city and selects the attractions radio button => The attractions in that city are shown on a map and more information about each attraction is show in a results table underneath the map.
- Locate accommodation on a city map feature: A user wants to find accommodation in a selected city. => A user enters a city and selects the accommodation radio button => The accommodation in that city are shown on a map and more information about each accommodation is show in a results table underneath the map.
- Locate bars and restaurants on a city map feature: A user wants to find bars and restaurants in a selected city. => A user enters a city and selects the bars and restaurants radio button => The bars and restaurants in that city are shown on a map and more information about each bar and restaurant is show in a results table underneath the map.
- Show information about selected point of interest feature: A user wants to find out more on a point of interest returned in the search results => A user selects the icon on the map or the name in the results table => More information about the selected item is displayed on the map.
- Clear all results feature: A user want to clear all the results and start a new search => The user clicks on the "clear results" button => The maps, results table and all the texts fields are returned to their initial state.

### Features Left to Implement
- In the future the application may be updated to include the option to select additional points of interest.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Bootstrap](https://getbootstrap.com/docs/3.3/getting-started/)
    - This project uses **Bootstrap** to make the site responsive for different screen sizes.
- [Font Awesome](https://fontawesome.com/)
    - This project uses **Font Awesome** to display social media icons on the site.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to read in a data file
- [Google APIs](https://jquery.com)
    - The project uses **Google Maps API and Google Places API** to render maps, search result and autocomplete.

- HTML 5
- CSS
- Javascript 



## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X