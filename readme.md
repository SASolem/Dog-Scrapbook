# Project Overview
![Project Logo](/images/DogsScrapbookCover.jpg)

[Visit My Project on Netlify](https://nenorvalls-dog-scrapbook.netlify.app/)


The project is a web page for a dog photo scrapbook, allowing users to navigate through multiple pages of dog photos using "Previous" and "Next" buttons.

# HTML Structure
The HTML code is organized into two main sections:

## Dog's: Photos Page
- The `<!DOCTYPE html>` declaration specifies the document type and HTML version.
- The `<head>` section includes meta information, links to external stylesheets, and sets the page title.
- The `<body>` section contains a photo container and navigation buttons for moving to the previous or next page.
- JavaScript is imported to manage navigation functionality.

## Features
- The `<!DOCTYPE html>` declaration specifies the document type and HTML version.
- The `<head>` section contains meta information, links to external stylesheets, and sets the page title.
- The `<body>` section features a heading, a front page photo, and a "Next" button for transitioning to the dog photo scrapbook.
- JavaScript is imported to provide common functionality.

# JavaScript Functions
The JavaScript code at the end of the document implements the functionality for navigating through the dog photo scrapbook and displaying photos. Here are the key functions:

- **Event Delegation for Navigation Buttons:** Listens for clicks on elements with the class "navButton" and redirects users to the next or previous page based on "data-next-page" or "data-prev-page" attributes.

- **Variables:** Defines the number of photos to display per page (`photosPerPage`) and the current page number (`currentPage`).

- **createPhotoFrame:** Creates a photo frame element for displaying an image and its caption.

- **populatePhotoContainer:** Populates the photo container with images from a `myScrapbook` object, expecting a property `photoScrapbook` containing an array of photo data. It checks for the existence of the photo container, calculates the photo range to display, and iterates through the photos to create and display photo frames.

- **updateCurrentPage:** Updates the display of the current page by calculating the total number of pages and updating the content of the element with the id "currentPage."

- **prevPage and nextPage:** These functions enable users to navigate to the previous or next page, considering the total number of pages. They also handle cases where the user is already on the first or last page.

The script concludes with an initial call to `populatePhotoContainer` to load the first page of photos.

# Usage
To use this code for your dog photo scrapbook:

1. Create an HTML file and paste the provided code.
2. Ensure that the necessary image files, stylesheets, and other dependencies are referenced in your HTML.
3. Verify that the `myScrapbook` object contains the photo data as expected for populating the scrapbook.
4. Host the HTML file on a web server for users to access.

