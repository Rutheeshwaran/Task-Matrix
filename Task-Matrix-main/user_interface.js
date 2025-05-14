document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const projectContainer = document.getElementById('projectContainer');
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Function to generate upload boxes
    const generateUploadBoxes = () => {
        const problemStatement = document.getElementById('problemStatement').value;
        const numPersons = parseInt(document.getElementById('numPersons').value);

        if (problemStatement && numPersons > 0) {
            const newProject = {
                id: Date.now(),
                problemStatement,
                members: Array(numPersons).fill().map(() => ({ name: '', resume: null }))
            };

            projects.push(newProject);
            localStorage.setItem('projects', JSON.stringify(projects));

            renderProjects();
        }
    };

    // Function to render projects
    const renderProjects = () => {
        projectContainer.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card';

            const header = document.createElement('div');
            header.className = 'card-header';
            header.innerHTML = `<h2>${project.problemStatement}</h2>`;

            const content = document.createElement('div');
            content.className = 'card-content';

            project.members.forEach((member, index) => {
                const memberBox = document.createElement('div');
                memberBox.className = 'border';

                const nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.placeholder = 'Enter name';
                nameInput.value = member.name;
                nameInput.className = 'input-field';
                nameInput.addEventListener('input', (e) => {
                    member.name = e.target.value;
                    localStorage.setItem('projects', JSON.stringify(projects));
                });

                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.className = 'file-input';
                fileInput.addEventListener('change', (e) => {
                    member.resume = e.target.files[0];
                    localStorage.setItem('projects', JSON.stringify(projects));
                    renderProjects();
                });

                const deleteButton = document.createElement('button');
                deleteButton.className = 'remove-btn';
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    member.resume = null;
                    localStorage.setItem('projects', JSON.stringify(projects));
                    renderProjects();
                });

                memberBox.appendChild(nameInput);
                memberBox.appendChild(fileInput);

                if (member.resume) {
                    const fileName = document.createElement('p');
                    fileName.className = 'text-gray';
                    fileName.textContent = `File: ${member.resume.name}`;
                    memberBox.appendChild(fileName);
                    memberBox.appendChild(deleteButton);
                }

                content.appendChild(memberBox);
            });

            projectCard.appendChild(header);
            projectCard.appendChild(content);
            projectContainer.appendChild(projectCard);
        });
    };

    // Initial rendering of projects from localStorage
    renderProjects();

    generateButton.addEventListener('click', generateUploadBoxes);
});
