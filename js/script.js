function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.tab').forEach(section => {
      section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  }