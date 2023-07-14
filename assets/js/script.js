let tableDataLocal = JSON.parse(localStorage.getItem("user-list"));
if (!tableDataLocal) {
  var tableData = [];
} else {
  tableData = JSON.parse(localStorage.getItem("user-list"));
}

displayTableData((value = ""), (data = []));

function displayTableData(value, data) {
  var html = "<table>";
  html += "<thead>";
  html += "<tr>";
  html += "<th>" + "Name" + "</th>";
  html += "<th>" + "PhoneNo" + "</th>";
  html += "<th>" + "Address" + "</th>";
  html += "<th>" + "Gender" + "</th>";
  html += "<th>" + "Action" + "</th>";
  html += "</tr>";
  html += "</thead>";
  if (value == "Male") {
    if (data.length == 0) {
      html += "<tr><td colspan='5' class='no-record'>No male record found</td></tr>";
    } else {
      for (var i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<td>" + data[i].name + "</td>";
        html += "<td>" + data[i].phone + "</td>";
        html += "<td>" + data[i].address + "</td>";
        html += "<td>" + data[i].gender + "</td>";
        html +=
          "<td>" +
          `<button style="background-color:#24622c; font-family: Quicksand; color:white; border:none; cursor:pointer; padding:7px; border-radius: 2px;" type="button" onclick="removeItem(${data[i].id});">Remove</button>` +
          "</td>";
        html += "</tr>";
      }
    }
  } else if (value == "Female") {
    if (data.length == 0) {
      html += "<tr><td colspan='5' class='no-record'>No female record found</td></tr>";
    } else {
      for (var i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<td>" + data[i].name + "</td>";
        html += "<td>" + data[i].phone + "</td>";
        html += "<td>" + data[i].address + "</td>";
        html += "<td>" + data[i].gender + "</td>";
        html +=
          "<td>" +
          `<button style="background-color:#24622c; font-family: Quicksand; color:white; border:none; cursor:pointer; padding:7px; border-radius: 2px;" type="button" onclick="removeItem(${data[i].id});">Remove</button>` +
          "</td>";
        html += "</tr>";
      }
    }
  } else {
    let tableData = JSON.parse(localStorage.getItem("user-list"));
    if (tableData.length == 0) {
      html += "<tr><td colspan='5' class='no-record'>No record found</td></tr>";
    } else {
      for (var i = 0; i < tableData.length; i++) {
        html += "<tr>";
        html += "<td>" + tableData[i].name + "</td>";
        html += "<td>" + tableData[i].phone + "</td>";
        html += "<td>" + tableData[i].address + "</td>";
        html += "<td>" + tableData[i].gender + "</td>";
        html +=
          "<td>" +
          `<button style="background-color:#24622c; font-family: Quicksand; color:white; border:none; cursor:pointer; padding:7px; border-radius: 2px;" type="button" onclick="removeItem(${tableData[i].id});">Remove</button>` +
          "</td>";
        html += "</tr>";
      }
    }
  }
  html += "</table>";
  document.getElementById("myTable").innerHTML = html;
}

function maleData() {
  let male = tableData.filter((users) => users.gender === "Male");
  displayTableData("Male", male);
}

function femaleData() {
  let female = tableData.filter((users) => users.gender === "Female");
  displayTableData("Female", female);
}

function addOnClick() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var gender = document.getElementsByName("gender");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) var checkedGender = gender[i].value;
  }
  if (name && phone && address && checkedGender) {
    let id = tableData.length + 1;
    tableData.push({
      name: name,
      phone: phone,
      address: address,
      gender: checkedGender,
      id: id,
    });
    localStorage.setItem("user-list", JSON.stringify(tableData));
    displayTableData();
  }
}

function removeItem(uniqId) {
  var filt = tableData.filter((a, i) => {
    if (uniqId == a.id) {
      tableData.splice(i, 1);
      localStorage.setItem("user-list", JSON.stringify(tableData));
      displayTableData();
    }
  });
}
