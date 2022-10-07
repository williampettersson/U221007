contacts = () => {
    const XHR = new XMLHttpRequest();
    XHR.onload = () => {

       Contacts = JSON.parse(XHR.responseText);
       Contacts.forEach(c => {
        
        var list = document.createElement('li');
        list.innerHTML = (`${c.Name} ${c.Age}`);
        ul.appendChild(list);    
       });
    };
    XHR.open('GET', '/contacts');
    XHR.send();
}