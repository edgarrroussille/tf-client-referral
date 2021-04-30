document.getElementById("addContact").addEventListener("click", addFields);
document.getElementById("reload").addEventListener("click", reloadPage);
function reloadPage() {
	document.location.reload(true);
}
function removeElement(e) {
let full = window.location.host;
let sub = full.split('.')[0];
let enGB = sub === "en" ? true : false;
    let button = e.target;
    let formRow = button.parentElement;
    let contactBlock = formRow.parentElement;
    let contactsList = contactBlock.parentElement;
    contactBlock.removeChild(formRow);
    contactsList.removeChild(contactBlock);
    setMaskHeight(1);
    let allElements = document.getElementById("Contacts");
    let labels = allElements.getElementsByTagName("label");
    let contacts = allElements.getElementsByClassName("addedContact");
		
    for(i=0;i<contacts.length;i++){
        let contact = contacts[i];
        let fields = contact.getElementsByTagName('input');
        let button = contact.getElementsByTagName("a");
        let email = fields[0];
        let name = fields[1];
        let company = fields[2];
        name.setAttribute('id', "referredFullName_" + (i+1));
        name.setAttribute('name', "referredFullName_" + (i+1));
        name.setAttribute('data-name', "referredFullName_" + (i+1));
        email.setAttribute('id', "referredEmail_" + (i+1));
        email.setAttribute('name', "referredEmail_" + (i+1));
        email.setAttribute('data-name', "referredEmail_" + (i+1));
        company.setAttribute('id', "referredCompany_" + (i+1));
        company.setAttribute('name', "referredCompany_" + (i+1));
        company.setAttribute('data-name', "referredCompany_" + (i+1));
        button[0].setAttribute('id', "removeBtn_" + (i+1));
    }
    for(i=0;i<labels.length;i++){
        labels[i].innerHTML = 'Contact ' + (i+1) + '<span class="required-star"> *</span>';
    }
}

function addFields(){
		let slider = document.getElementById("referralSlider");
    let container = document.getElementById("Contacts");
    let contact = document.createElement("div");
    contact.setAttribute('class', "addedContact");
    container.appendChild(contact);
    let i = Array.from(contact.parentNode.children).indexOf(contact);
    let label = document.createElement("label");
    label.innerHTML = 'Contact ' + (i+1) + '<span class="required-star"> *</span>';
    label.setAttribute('class', 'field-label');
    contact.appendChild(label);
    let grid = document.createElement("div");
    grid.setAttribute('class', 'fields-grid');
    contact.appendChild(grid);
    let email = document.createElement("input");
    let company = document.createElement("input");
    let name = document.createElement("input");
    let removeBtn = document.createElement("a");
    email.type = "email";
    email.name = "referredEmail_" + i;
    email.id = "referredEmail_" + i;
    email.setAttribute('data-name', "referredEmail_" + i);
    email.required = true;
    email.setAttribute('class', "text-field required-field w-input");
    email.placeholder = enGB ? "Email" : "Quel est son email ?";
    email.maxLength = "256";
    name.type = "text";
    name.name = "referredFullName_" + i;
    name.id = "referredFullName_" + i;
    name.setAttribute('data-name', "referredFullName_" + i);
    name.setAttribute('class', "text-field w-input");
    name.placeholder = enGB ? "Full name" : "Comment s'appelle t'il/elle ?";
    name.maxLength = "256";
    name.required = true;
    company.type = "text";
    company.name = "referredCompany_" + i;
    company.id = "referredCompany_" + i;
    company.setAttribute('data-name', "referredCompany_" + i);
    company.setAttribute('class', "text-field required-field w-input");
    company.placeholder = enGB ? "Company name" : "Quelle est son entreprise ?";
    company.maxLength = "256";
    company.required = true;
    removeBtn.id = "removeBtn_" + i;
    removeBtn.setAttribute('class',"remove-contact-button w-button w-node-d0efbf25dc0d-479ad8e2");
    removeBtn.setAttribute('href',"#");
    removeBtn.textContent = "-";
    grid.appendChild(email);
    grid.appendChild(name);
    grid.appendChild(company);
    grid.appendChild(removeBtn);
    const toRemove = document.getElementById("removeBtn_" + i);
    toRemove.onclick = function(e) {
        removeElement(e);
    };
    setMaskHeight(1);
}
function setMaskHeight(e) {
	let referralSliderMask = document.getElementById("referralSliderMask");
  let steps = document.querySelectorAll(".w-slide");
	referralSliderMask.style.height = "";
  referralSliderMask.style.height = "".concat(steps[e].offsetHeight, "px");
}
