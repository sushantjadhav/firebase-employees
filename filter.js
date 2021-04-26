$(document).ready(function () {
  $("#onlyMalesFilter").click(function () {
    console.log("onlyMalesFilter Filter executed");
    employeesRef
      .where("gender", "==", "Male")
      .get()
      .then((querySnapshot) => LoadTableData(querySnapshot));
  });

  $("#fullTimeFilter").click(function () {
    console.log("fullTimeFilter Filter executed");
    employeesRef
      .where("isFullTime", "==", true)
      .get()
      .then((querySnapshot) => LoadTableData(querySnapshot));
  });

  $("#olderThenFilter").click(function () {
    console.log("olderThenFilter Filter executed");
    employeesRef
      .where("age", ">=", 30)
      .get()
      .then((querySnapshot) => LoadTableData(querySnapshot));
  });

  $("#ageBetweenFilter").click(function () {
    console.log("ageBetweenFilter Filter executed");
    employeesRef
      .where("age", ">=", 35)
      .where("age", "<", 50)
      .get()
      .then((querySnapshot) => LoadTableData(querySnapshot));
  });

  $("#yearsOfExperienceFilter").click(function () {
    console.log("yearsOfExperienceFilter Filter executed");
    employeesRef.where("gender", "==", "Female");
    employeesRef
      .where("yearsOfExperience", ">=", 5)
      .where("yearsOfExperience", "<=", 10)
      .get()
      .then((querySnapshot) => LoadTableData(querySnapshot));
  });

  $("#clearFilter").click(function () {
    console.log("clearFilter Filter executed");
    employeesRef
      .orderBy("fName")
      .limit(5)
      .get()
      .then((querySnapshot) => LoadTableData(querySnapshot));
  });

  $("#searchEmployee").change(function () {
    console.log("You entered: ", $(this).val());

    var searchValue = $(this).val();

    employeesRef
      .where("fName", "==", searchValue)
      .get()
      .then((querySnapshot) => LoadTableData(querySnapshot));
  });
});

function LoadTableData(querySnapshot) {
  var tableRow = "";
  querySnapshot.forEach((doc) => {
    var document = doc.data();

    tableRow += "<tr>";
    tableRow += '<td class="fname">' + document.fName + "</td>";
    tableRow += '<td class="lname">' + document.lName + "</td>";
    tableRow += '<td class="email">' + document.email + "</td>";
    tableRow += '<td class="age">' + document.age + "</td>";
    tableRow += '<td class="gender">' + document.gender + "</td>";
    tableRow += '<td class="yearsofexperience">' + document.yearsOfExperience + "</td>";
    tableRow += '<td class="isfulltime">' + document.isFullTime + "</td>";
    tableRow += '<td class="editEmployee"> <i class="fa fa-pencil" aria-hidden="true" style="color: green" /> </td>';
    tableRow += '<td class="deleteEmployee"> <i class="fa fa-trash" aria-hidden="true" style="color: red" /> </td>';
    tableRow += "</tr>";
  });

  $("tbody.tbodyData").html(tableRow);
}

employeesRef.onSnapshot(function (snapShot) {
  LoadTableData(snapShot);

  snapShot.docChanges().forEach((change) => {
    if (change.type == "added") {
      console.log("record added...");
    } else if (change.type == "modified") {
      console.log("record modified...");
    } else if (change.type == "removed") {
      console.log("record removed...");
    }
  });
});
