const projects = [
  { title: 'TechHub Superapp', description: 'An internal order-management platform built for seven TechHub staff members to process picking, QA, fulfillment, and delivery workflows. The project includes Microsoft Entra identity and access management, automated partial-order workflows, and a native Python picklist-printing agent.' },
  { title: 'HTeaML', description: 'A full-stack self-ordering application built with EJS, JavaScript, Express.js, Node.js, PostgreSQL, and Google OAuth. It supports customer and employee-assisted purchases, role-based dashboards, translation, voice ordering, weather, and accessibility features.' },
  { title: 'Sustainable Architect', description: 'A TypeScript and Node.js application that evaluates building sustainability from architectural dimensions, materials, and design constraints. It uses a domain-specific Gemini Gem with GSA and AIA guidance to produce standards-based ratings and recommendations.' }
];
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[Number(button.dataset.project)];
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    dialog.showModal();
  });
});
document.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
