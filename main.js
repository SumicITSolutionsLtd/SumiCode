// Get editor elements
const htmlEditor = document.getElementById("htmlEditor");
const cssEditor = document.getElementById("cssEditor");
const preview = document.getElementById("preview");

// Update preview function
function updatePreview() {
  const html = htmlEditor.value;
  const css = `<style>${cssEditor.value}</style>`;
  const fullContent = html + css;
  
  // Update iframe content
  preview.srcdoc = fullContent;
}

// Listen for changes in both editors
htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);

// Initial preview load
updatePreview();