const projectsData = {
    project1: {
      mainGif: './assets/GifsVFX/portal.gif',
      gallery: ['./assets/Segorbe/duque.png', './assets/Segorbe/duque.png', './assets/Segorbe/duque.png'],
      description: 'In Project 1, I was responsible for developing the core gameplay mechanics and optimizing performance in Unity. asdsadasuhjfbweuyfgbwue4ybgfuywebgfuywbeyugbweuygbweuybgyuwebguy'
    },
    project2: {
      mainGif: 'path/to/mainGif2.gif',
      gallery: ['path/to/gallery2_1.jpg', 'path/to/gallery2_2.jpg', 'path/to/gallery2_3.jpg'],
      description: 'In Project 2, I worked on designing shader materials and creating 3D models in Blender.'
    }
    // Add more projects as needed
  };
  
  function openPopup(projectId) {
    const project = projectsData[projectId];
    document.getElementById('mainGif').src = project.mainGif;
    document.getElementById('galleryImg1').src = project.gallery[0];
    document.getElementById('galleryImg2').src = project.gallery[1];
    document.getElementById('galleryImg3').src = project.gallery[2];
    document.getElementById('projectDescription').textContent = project.description;
  
    const popup = document.getElementById('popup');
    const popupBackdrop = document.getElementById('popupBackdrop');
  
    // Show backdrop
    popupBackdrop.style.display = 'block'; 
    document.body.classList.add('no-scroll'); // Prevent scrolling on the main page
  
    // Show popup and trigger transition
    popup.style.display = 'block'; // Set display to block
    setTimeout(() => {
      popup.classList.add('show'); // Add show class to trigger transition
    }, 10); // Short delay for better transition effect

    popupBackdrop.onclick = function(event) {
      // Check if the target is the backdrop and not the popup
      if (event.target === popupBackdrop) {
        closePopup();
      }
    };
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    const popupBackdrop = document.getElementById('popupBackdrop');
  
    popup.classList.remove('show'); // Remove show class to trigger transition
  
    // Listen for transition end to hide popup and backdrop
    popup.addEventListener('transitionend', () => {
      if (!popup.classList.contains('show')) {
        popup.style.display = 'none'; // Hide popup
        popupBackdrop.style.display = 'none'; // Hide backdrop
        document.body.classList.remove('no-scroll'); // Enable scrolling on the main page
      }
    }, { once: true }); // Use once to remove the listener after it triggers
  }