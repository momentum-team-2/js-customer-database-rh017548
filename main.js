
let cardinfo = document.getElementById('cont')


function renderPageContent (){
for (let customer of customers){
    let li = document.createElement('li')
    li.classList.add('customer-info')
    li.innerHTML += createImageElement(customer.picture.medium)
    li.appendChild(createNameElement(customer.name.first + " " + (customer.name.last))) 
    cardinfo.appendChild(li)
    
    li.appendChild(createEmailElement(customer.email)) 
    cardinfo.appendChild(li)
    
    li.appendChild(createLocationElement(customer.location.street))  
    cardinfo.appendChild(li)

    li.appendChild(createCityElement(customer.location.city + ", " +(customer.location.state)))  
    cardinfo.appendChild(li)

    li.appendChild(createPostcodeElement(customer.location.postcode)) 
    cardinfo.appendChild(li)

    li.appendChild(createDobElement("DOB:" + " " + moment(customer.dob).format("MMM D, YYYY"))) 
    cardinfo.appendChild(li)   

    li.appendChild(createRegisteredElement("Signed Up:" + " " + moment(customer.registered).format("MMMM Do YYYY, h:mm:ss a"))) 
    cardinfo.appendChild(li)   
}
}


/*function renderPageContent () {
for (let customer of customers){
    let customerName = customer['name']['first'] + customer['name']['last']
    let nameElem = document.createElement('h3')
    let cardElem = document.createElement('div')
    cardElem.innerHTML = cardElem.innerHTML + (customer.picture.thumbnail)
    cardElem.classList.add('card-bordered')
    cardElem.appendChild(nameElem)
    cont.appendChild(cardElem)}*/

  
   /*   let cardinfo = document.getElementById('cont') //this is div container
for (let customer of customers){
    let div =document.createElement('div')
    div.classList.add('customer-info')
    div.appendChild(createTitleElement(customers.name))
    cardinfo.appendChild(div)
    div.innerHTML += createImageElement(customers.picture)*/


function createEmailElement (_email) {
    let emailEl = document.createElement('p')
    emailEl.innerText = `${_email}` // alternative to creating a text node and appending that to the h3
    return emailEl
  }
  
  function createLocationElement (_address) {
    let locationEl = document.createElement('p')
    locationEl.innerText = `${_address}` // alternative to creating a text node and appending that to the h3
    return locationEl
  }

  function createPostcodeElement (_postcode) {
    let postcodeEl = document.createElement('p')
    postcodeEl.innerText = `${_postcode}` // alternative to creating a text node and appending that to the h3
    return postcodeEl
  }
  
  function createCityElement (_city) {
    let cityEl = document.createElement('p')
    cityEl.innerText = `${_city}` // alternative to creating a text node and appending that to the h3
    return cityEl

}
  
function createDobElement (_dob) {
    let dobEl = document.createElement('p')
    dobEl.innerText = `${_dob}` // alternative to creating a text node and appending that to the h3
    return dobEl
}

    function createRegisteredElement (_registered) {
        let registeredEl = document.createElement('p')
        registeredEl.innerText = `${_registered}` // alternative to creating a text node and appending that to the h3
        return registeredEl
}

  function createImageElement (url) {
    return `<img src=${url}>`}
    
    function createNameElement (name) {
    let nameEl = document.createElement('h3')
    nameEl.innerText = `${name}` // alternative to creating a text node and appending that to the h3
    return nameEl
  }

renderPageContent()