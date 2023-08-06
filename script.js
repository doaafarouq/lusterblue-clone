var myButton = document.getElementById("submitbtn")
var mytable = document.getElementById("mytable")

myButton.addEventListener("click",addProductToTable)


function addProductToTable() {
    event.preventDefault();
    var NameInput = document.getElementById("Name")
    var emailInput = document.getElementById("email")
    var contactnoInput = document.getElementById("contactno")
    var ProductnameInput = document.getElementById("Productname")
    var priceInput = document.getElementById("price")


    var Name = NameInput.value;
    var email = emailInput.value;
    var contactno = contactnoInput.value;
    var Productname = ProductnameInput.value;
    var price = priceInput.value;

      var myTr = document.createElement("tr")

    var myTd1 = document.createElement("td")
    var myTd2 = document.createElement("td")
    var myTd3 = document.createElement("td")
    var myTd4 = document.createElement("td")
    var myTd5 = document.createElement("td")
  


    /*myTd1.textContent = index;
    index++;*/
    myTd1.textContent = Name
    myTd2.textContent = email
    myTd3.textContent = contactno
    myTd4.textContent = Productname
    myTd5.textContent = price

   
    myTr.appendChild(myTd1)
    myTr.appendChild(myTd2)
    myTr.appendChild(myTd3)
    myTr.appendChild(myTd4)
    myTr.appendChild(myTd5)
    mytable.appendChild(myTr)




}