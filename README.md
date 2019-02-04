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

Use Cases: A user wants to find the location of a country on a map.
- Page opens - The country, city and radio buttons are blank. The map is zoomed out to view the world.
- The User selects a country from all the countries in the world from the country drop down menu.
- The map zooms to that country.
- On a desktop: the logo and header text are displayed side by side -> The selection area and map are displayed underneath side by side.
- On a phone/tablet: the logo and header text are displayed underneath each other -> The selection area and map are displayed underneath each other.

Use Cases: - A user wants to find the location of a city on a map.
- Page opens - The country, city and radio buttons are blank. The map is zoomed out to view the world.
- The User leaves the country drop down box set to all and start to type a city, the city name auto completes and the user selects the city.
- The map zooms to that city.
- On a desktop: the logo and header text are displayed side by side -> The selection area and map are displayed underneath side by side.
- On a phone/tablet: the logo and header text are displayed underneath each other -> The selection area and map are displayed underneath each other.

Use Cases: - A user wants to find cities in a specific country.
- Page opens - The country, city and radio buttons are blank. The map is zoomed out to view the world.
- The User selects a country from the drop down box. When the user types in the "Enter a city" box, only cities from that country will be displayed with auto complete.
- The User selects a city from that country.
- The map zooms to that city.
- On a desktop: the logo and header text are displayed side by side -> The selection area and map are displayed underneath side by side.
- On a phone/tablet: the logo and header text are displayed underneath each other -> The selection area and map are displayed underneath each other.

Use Cases: - A user wants to find the location of tourist attractions in a selected city.
- Page opens - The country, city and radio buttons are blank. The map is zoomed out to view the world.
- The User selects a country from the drop down box. When the user types in the "Enter a city" box, only cities from that country will be displayed with auto complete.
- The User selects a city from that country.
- The map zooms to that city.
- The user selects the "Attractions" radio button.
- Attraction markers are dropped onto the map, starting at A and continuing depending on how much attractions there are.
- A results table is displayed underneath the map displaying the letter of the marker on the map and the name of the attraction.
- On a desktop: the logo and header text are displayed side by side -> The selection area and map are displayed underneath side by side. -> The results table is displayed underneat the map
- On a phone/tablet: the logo and header text are displayed underneath each other -> The selection area and map are displayed underneath each other -> The results table is displayed underneat the map

Use Cases: - A user wants to find the location of accommodation in a selected city.
- Page opens - The country, city and radio buttons are blank. The map is zoomed out to view the world.
- The User selects a country from the drop down box. When the user types in the "Enter a city" box, only cities from that country will be displayed with auto complete.
- The User selects a city from that country.
- The map zooms to that city.
- The user selects the "Accomodation" radio button.
- Accomodation markers are dropped onto the map, starting at A and continuing depending on how much Accomodation there is.
- A results table is displayed underneath the map displaying the letter of the marker on the map and the name of the Accomodation.
- On a desktop: the logo and header text are displayed side by side -> The selection area and map are displayed underneath side by side. -> The results table is displayed underneat the map
- On a phone/tablet: the logo and header text are displayed underneath each other -> The selection area and map are displayed underneath each other -> The results table is displayed underneat the map

Use Cases: - A user wants to find the location of Bars and restaurants in a selected city.
- Page opens - The country, city and radio buttons are blank. The map is zoomed out to view the world.
- The User selects a country from the drop down box. When the user types in the "Enter a city" box, only cities from that country will be displayed with auto complete.
- The User selects a city from that country.
- The map zooms to that city.
- The user selects the "Bars and restaurants" radio button.
- Bars and restaurants markers are dropped onto the map, starting at A and continuing depending on how much Bars and restaurants there are.
- A results table is displayed underneath the map displaying the letter of the marker on the map and the name of the Bar or restaurant.
- On a desktop: the logo and header text are displayed side by side -> The selection area and map are displayed underneath side by side. -> The results table is displayed underneat the map
- On a phone/tablet: the logo and header text are displayed underneath each other -> The selection area and map are displayed underneath each other -> The results table is displayed underneat the map

Use Cases: - A user wants to find out information on the point of interest once the have selected it.
- Page opens - The country, city and radio buttons are blank. The map is zoomed out to view the world.
- The User selects a country from the drop down box. When the user types in the "Enter a city" box, only cities from that country will be displayed with auto complete.
- The User selects a city from that country.
- The map zooms to that city.
- The user selects a radio button.
- Markers are dropped onto the map, starting at A and continuing depending on how many point of interest there are.
- A results table is displayed underneath the map displaying the letter of the marker on the map and the name of the Point of interest.
- User either selects the point of interest marker on the map or point of interest from the results table.
- Information about that point of interest is displayed beside the marker on the map. The information contains Name, address, Telephone, Rating, Website.
- On a desktop: the logo and header text are displayed side by side -> The selection area and map are displayed underneath side by side. -> The results table is displayed underneat the map
- On a phone/tablet: the logo and header text are displayed underneath each other -> The selection area and map are displayed underneath each other -> The results table is displayed underneat the map

Use Cases: - A user wants to clear all information and start a new search.
- The user selects a country -> clicks the "Clear" button, the page resets.
- The user leaves the county at "all" and types a city -> clicks the "Clear" button, the page resets.
- The user leaves selects a country and types a city -> clicks the "Clear" button, the page resets.
- The user leaves selects a country and types a city, selects the "Attractions" radio button -> clicks the "Clear" button, the page resets.
- The user leaves selects a country and types a city, selects the "Accomodation" radio button -> clicks the "Clear" button, the page resets.
- The user leaves selects a country and types a city, selects the "Bar and Restaurants" radio button -> clicks the "Clear" button, the page resets.

During testing
- Adjustments had to be made to ensure content displayed correctly on different screen sizes
- Map wasn't adjusting correctly when country selected
- Radio buttons could of been selected with out selecting a city first.

## Deployment

This project is deployed using github pages. 
- [Website](https://michaelhdev.github.io/project-2)


## Credits

### Media
- The globe image used in this site was free to use and obtained from [Pngimage.com](http://pngimg.com/imgs/miscellaneous/globe/)

### Acknowledgements

- The examples from the google api documentation were a good source of inspiration from this project. [Google Documentation](https://developers.google.com/maps/documentation/javascript/examples/)
