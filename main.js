let employeeData = [
    { "ninumber": "ZS502747A", "fullname": "Chris P Bacon", "phone": "07659-831024", "address":
"123 Elliot Hill", "department": "IT" },
    { "ninumber": "XS130502B", "fullname": "Miles A Head", "phone": "07666-616680", "address":
"321 Haha Road", "department": "Sales" },
    { "ninumber": "MY034526D", "fullname": "Rick O'Shea", "phone": "07440-003065", "address":
"64 Zoo Lane", "department": "HR" },
    { "ninumber": "AK311470", "fullname": "Robyn Banks", "phone": "07342-472921", "address":
"324 Langton Ridgeway", "department": "HR" },
    { "ninumber": "LY682275B", "fullname": "Lorne Mowers", "phone": "07822-821023", "address":
"234 Julian Market", "department": "IT" },
    { "ninumber": "BK227215B", "fullname": "Frank N Stein", "phone": "07661-522545", "address":
"12 Springfield Grange", "department": "Sales" },
    { "ninumber": "XB363374C", "fullname": "Hedda Hare", "phone": "07563-758264", "address":
"54 Blackbird Crescent", "department": "IT" },
    { "ninumber": "MY501327A", "fullname": "Upton O Goode", "phone": "07401-414740", "address":
"2 St Margarets Drive", "department": "IT" },
    { "ninumber": "TT405395B", "fullname": "Marius Quick", "phone": "07870-297789", "address":
"98 Earl Path", "department": "IT" },
    { "ninumber": "AZ764036A", "fullname": "Max E Mumm", "phone": "07872-642897", "address":
"233 Lady Smith Avenue", "department": "IT" },
    { "ninumber": "ES73841C", "fullname": "Yul B Allwright", "phone": "07750-872412",
"address": "45 Fountains Broadway", "department": "Sales" },
    { "ninumber": "WX465470A", "fullname": "Lori Driver", "phone": "07773-782275", "address":
"65 Burlington Lodge", "department": "HR" },
    { "ninumber": "AK625470D", "fullname": "Shirley U Care", "phone": "07569-060117",
"address": "97 Holderness Drive", "department": "HR" },
    { "ninumber": "SW098272B", "fullname": "Felix Cited", "phone": "07394-529507", "address":
"32 Banningham Court", "department": "Sales" },
    { "ninumber": "OB043941D", "fullname": "Sandy Beech", "phone": "07958-301691", "address":
"3 Third Mount", "department": "Sales" }
    ];

let table = document.getElementById("employee-table-body");
let searchTerm = document.getElementById("search-field");

var addEmployeeModal = new bootstrap.Modal(document.getElementById('addEmployeeModal'));

function showAddModal () {
    addEmployeeModal.show();
}

function hideAddModal () {
    addEmployeeModal.hide();
}

showAllEmployees();

function deleteEmployee(index) {
    document.getElementById("row-"+index).remove();
    employeeData.splice(index,1);
}

function addEmployee() {
    let NINumber = document.getElementById("NINumber").value;
    let fullName = document.getElementById("fullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let address = document.getElementById("address").value;
    let department = document.getElementById("department").value;

    employeeData.push({"ninumber": NINumber, "fullname": fullName, "phone": phoneNumber, "address": address, "department": department})
    addEmployeeModal.hide();
    addEmployeeRowToTable(employeeData.length - 1);
}

function showAllEmployees() {
    //alert("Showing all employees " + employeeData.length);
    for (let index = 0; index < employeeData.length; index++) {
        addEmployeeRowToTable(index);
    }
}

function addEmployeeRowToTable(index) {
        row = document.createElement("tr");
        row.setAttribute("id", "row-" + index);
        NINumber = document.createElement("td");
        fullName = document.createElement("td");
        phone = document.createElement("td");
        address = document.createElement("td");
        department = document.createElement("td");

        NINumber.innerText = employeeData[index].ninumber;
        fullName.innerText = employeeData[index].fullname;
        phone.innerText = employeeData[index].phone;
        address.innerText = employeeData[index].address;
        department.innerText = employeeData[index].department;

        actions = document.createElement("td");
        actions.style = 'max-width:100%;white-space:nowrap;';
        actions.innerHTML = '<button href="#" class="btn btn-warning btn-sm" id="edit-' + index + '" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></button><button href="#" onclick="deleteEmployee(' + index + ')" class="btn btn-sm btn-danger" id="delete-' + index + ' title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></button>';

        row.appendChild(NINumber);
        row.appendChild(fullName);
        row.appendChild(phone);
        row.appendChild(address);
        row.appendChild(department);
        row.appendChild(actions);

        table.appendChild(row);
}

function filterTable() {
    if (searchTerm.value != "") {
        document.getElementById("page-heading").innerText = 'Showing records containing "' + searchTerm.value + '"';
    } else {
        document.getElementById("page-heading").innerText = 'Showing all employees';
    }
    for (var i = 0, row; row = table.rows[i]; i++) {
        var keepRow = false;
        for (var j = 0, col; col = row.cells[j]; j++) {
            console.log(col.innerText);
            if (col.innerText.toLowerCase().includes(searchTerm.value.toLowerCase())){
                keepRow = true;
                break;
            }
        }
        if (keepRow == false) {
            row.style.display = "none";
        } else {
            row.style.display = "table-row";
        }
    }
}