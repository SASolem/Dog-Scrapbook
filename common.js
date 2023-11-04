document.addEventListener("click", function (event) {
  // Event delegation for navigation buttons
  if (event.target.classList.contains("navButton")) {
    const nextPage = event.target.getAttribute("data-next-page");
    const prevPage = event.target.getAttribute("data-prev-page");

    // Redirect to the next or previous page
    if (nextPage) {
      window.location.href = nextPage;
    } else if (prevPage) {
      window.location.href = prevPage;
    }
  }
});

const photosPerPage = 3;
let currentPage = 1;

// Create a photo frame element
function createPhotoFrame(imageURL, caption) {
  const photoFrame = document.createElement("div");
  photoFrame.classList.add("photo-frame");

  const image = document.createElement("img");
  image.src = imageURL;
  image.alt = "Photo";

  const pCaption = document.createElement("p");
  pCaption.textContent = caption;

  photoFrame.appendChild(image);
  photoFrame.appendChild(pCaption);

  return photoFrame;
}

// Populate the photo container with images
function populatePhotoContainer() {
  const photoContainer = document.getElementById("photo-container");

  // Check if the photo container exists
  if (!photoContainer) {
    console.error("Photo container not found");
    return;
  }

  // Calculate the range of photos to display
  const startIndex = (currentPage - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;

  // Clear the existing content in the photo container
  photoContainer.innerHTML = "";

  const scrapbook = myScrapbook.photoScrapbook || [];

  // Iterate through the selected range of photos
  scrapbook.slice(startIndex, endIndex).forEach((photo) => {
    // Check if the photo data is valid
    if (photo.imageURL && photo.caption) {
      const photoFrame = createPhotoFrame(photo.imageURL, photo.caption);
      photoContainer.appendChild(photoFrame);
    } else {
      console.warn("Invalid photo data:", photo);
    }
  });

  // Update the display of the current page
  updateCurrentPage();
}

// Update the display of the current page
function updateCurrentPage() {
  const currentPageElement = document.getElementById("currentPage");

  // Check if the current page element exists
  if (!currentPageElement) {
    console.error("Current page element not found");
    return;
  }

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    (myScrapbook.photoScrapbook.length || 0) / photosPerPage
  );

  // Update the content of the current page element
  currentPageElement.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Move to the previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    populatePhotoContainer();
  } else {
    // Redirect to the home page if already on the first page
    window.location.href = "index.html";
  }
}

// Move to the next page
function nextPage() {
  const totalPages = Math.ceil(
    (myScrapbook.photoScrapbook.length || 0) / photosPerPage
  );

  // Move to the next page if not on the last page
  if (currentPage < totalPages) {
    currentPage++;
    populatePhotoContainer();
  }
}

// Initial population of the photo container
populatePhotoContainer();
