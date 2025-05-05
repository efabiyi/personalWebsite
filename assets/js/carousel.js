    // Carousel
    let currentIndex = 0;

    const projects = [
    {
    image: 'images/bg.png',
    title: 'APSC 100: Keychain',
    description: 'Used OCT imaging to detect and predict seed viability.',
    stlUrl: 'stl_viewer.html?model=models/TheGardenGuard.stl'
    },
    {
    image: 'images/bg.png',
    title: 'Telescoping PVC Adapters',
    description: 'Telescoping PVC Adapters I made for an overhead imaging project',
    stlUrl: 'stl_viewer.html?model=models/TheGardenGuard.stl'
'
    },
    {
    image: 'images/bg.png',
    title: 'The Garden Guard',
    description: 'Developed signal processing pipeline to clean Raman spectra using wavelets.',
    stlUrl: 'models/to/raman-cleaner.stl'
    }
    ];

    const carousel = document.getElementById('carousel');

    function showProject(index) {
        const project = projects[index];
        carousel.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.stlUrl}" download>
                <button class="download-btn">Download STL</button>
            </a>
        `;
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
    }

    function previousProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
    }

    window.onload = () => {
    showProject(currentIndex);
    };