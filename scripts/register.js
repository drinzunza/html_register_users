//create the constructor
function User(fname, lname, age, gender, phone, payment, color) {
  //list of attributes
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.gender = gender;
  this.phone = phone;
  this.payment = payment;
  this.color = color;
}

function register() {
  let inputFirstName = $('#txtFirstName').val();
  let inputLastName = $('#txtLastName').val();
  let inputAge = $('#txtAge').val();
  let inputGender = $('#txtGender').val();
  let inputPhone = $('#txtPhone').val();
  let inputPayment = $('#selPayment').val();
  let inputColor = $('#selColor').val();

  // validations
  if (!inputFirstName || !inputLastName) {
    console.error('Invalid data');
    alert('Error: First and Last name are required');
    return; // get out of the fn, do no continue
  }

  let newUser = new User(inputFirstName, inputLastName, inputAge, inputGender, inputPhone, inputPayment, inputColor);
  console.log(newUser);

  saveUser(newUser);
  displayUser(newUser);
  $("#pnlSuccess").show();

  // hide the panel after 6 secs
  setTimeout(function() {
    $("#pnlSuccess").hide();
  }, 6000);

  console.log('User saved!!');
  clearForm();
}

function clearForm() {
  $('#txtFirstName').val('');
  $('#txtLastName').val('');
  $('#txtAge').val('');
  $('#txtGender').val('');
  $('#txtPhone').val('');
  $('#selPayment').val('');
  $('#selColor').val('#000000');
}

function displayUser(user) {
  let syntax = `
    <tr>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.age}</td>
      <td>${user.color}</td>
    </tr>
  `;

  $("#tblUser > tbody").append(syntax);
}

function loadUsers() {
  // get the data from local storage
  let all = getAllUsers(); // [x, x, x, x]
  // console.log(all);
  for(let i=0; i< all.length; i++) {
    let user = all[i];
    displayUser(user);
  }
}

function init() {
  // html is ready
  console.log('Page ready!');

  // load data
  loadUsers();

  // asigns events
  $('#btnSave').click(register);
}

// wait for html to be rendered
window.onload = init;
