const projectsData = {
    project1: {
      mainGif: './assets/GifsVFX/portal.gif',
      gallery: ['./assets/Segorbe/duque.png', './assets/Segorbe/duque.png', './assets/Segorbe/duque.png'],
      description: 'In Project 1, I was responsible for developing the core gameplay mechanics and optimizing performance in Unity.'
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
    
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').style.zIndex = '1000';

    document.getElementById('popupBackdrop').style.display = 'block'; // Show backdrop
    document.body.classList.add('no-scroll'); // Prevent scrolling on the main page
    
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupBackdrop').style.display = 'none'; // Hide backdrop
    document.body.classList.remove('no-scroll'); // Enable scrolling on the main page
  }
  