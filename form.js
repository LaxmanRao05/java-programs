// Get the form element
const form = document.getElementById('studentForm');

// Helper function to create input fields
function createInput(labelText, inputType, inputName, placeholder = "") {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = labelText + ": ";
  label.htmlFor = inputName;
  const input = document.createElement('input');
  input.type = inputType;
  input.name = inputName;
  input.id = inputName;
  input.placeholder = placeholder;
  input.required = true;
  wrapper.appendChild(label);
  wrapper.appendChild(input);
  return wrapper;
}

// Helper function to create select fields
function createSelect(labelText, selectName, optionsArr) {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = labelText + ": ";
  label.htmlFor = selectName;
  const select = document.createElement('select');
  select.name = selectName;
  select.id = selectName;
  select.required = true;
  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.textContent = "Select " + labelText;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);
  // Add options
  optionsArr.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });
  wrapper.appendChild(label);
  wrapper.appendChild(select);
  return wrapper;
}

// Department options (Engineering)
const departments = [
  "Computer Science",
  "Mechanical",
  "Electrical",
  "Civil",
  "Electronics",
  "Chemical"
];

// City options
const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune"
];

// State options
const states = [
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Telangana",
  "Delhi",
  "Gujarat"
];

// Create and append all form fields
form.appendChild(createInput("Name", "text", "name", "Enter your name"));
form.appendChild(createInput("Roll No", "text", "rollno", "Enter roll number"));
form.appendChild(createInput("Email", "email", "email", "Enter email"));
form.appendChild(createInput("Phone No", "tel", "phone", "Enter phone number"));
form.appendChild(createSelect("Department", "department", departments));
form.appendChild(createSelect("City", "city", cities));
form.appendChild(createSelect("State", "state", states));

// Submit button
const submitBtn = document.createElement('button');
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission
  alert("Form submitted successfully!");
});

// Inject CSS styles for form and body
const style = document.createElement('style');
style.textContent = `
  body {
    background-color: #f0f4f9;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  #studentForm {
    background: #fff;
    max-width: 400px;
    margin: 40px auto;
    padding: 32px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
  }
  #studentForm div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  #studentForm label {
    font-weight: 500;
    margin-bottom: 2px;
    color: #222;
  }
  #studentForm input,
  #studentForm select {
    padding: 8px 10px;
    border: 1px solid #cfd8dc;
    border-radius: 5px;
    font-size: 1rem;
    background: #f9fbfc;
    transition: border 0.2s;
  }
  #studentForm input:focus,
  #studentForm select:focus {
    border-color: #1976d2;
    outline: none;
  }
  #studentForm button[type="submit"] {
    background: #1976d2;
    color: #fff;
    border: none;
    padding: 10px 0;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.2s;
  }
  #studentForm button[type="submit"]:hover {
    background: #1256a0;
  }
`;
document.head.appendChild(style);
