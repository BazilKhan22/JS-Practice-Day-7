// Step 1: Get existing data from localStorage (if any)
var users = JSON.parse(localStorage.getItem("usersList")) || []; // Default empty array if nothing saved

// Step 2: Display existing users
function showUsers() {
  var list = document.getElementById("userList");
  list.innerHTML = ""; // Clear existing list
  users.forEach(function(user) {
    var li = document.createElement("li");
    li.textContent = user.name + " - " + user.city; // Display name and city
    list.appendChild(li);
  });
}

showUsers(); // Call to display users on page load

// Step 3: Add new user to the list
document.getElementById("addUser").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;

  // Check if name and city are not empty
  if (name && city) {
    var newUser = { name: name, city: city };
    users.push(newUser); // Add new user to users array

    // Save updated users list to localStorage
    localStorage.setItem("usersList", JSON.stringify(users));

    // Refresh the list on the page
    showUsers();

    // Clear input fields after adding the user
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
  } else {
    alert("Please fill both fields!");
  }
});
