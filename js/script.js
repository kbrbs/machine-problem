function showPass() {
    var pass = document.getElementById("passLog");
    var showIcon = document.getElementById("show");
    var hideIcon = document.getElementById("hide");

    var passCon = document.getElementById("passCon");
    var showIconReg = document.getElementById("showRegCon");
    var hideIconReg = document.getElementById("hideRegCon");

    if (pass.type === "password" || passCon.type === "password") {
        pass.type = "text";
        passCon.type = "text";
        showIcon.style.display = "none";
        hideIcon.style.display = "inline";
        showIconReg.style.display = "none";
        hideIconReg.style.display = "inline";

    } else {
        pass.type = "password";
        passCon.type = "password";
        showIcon.style.display = "inline";
        hideIcon.style.display = "none";
        showIconReg.style.display = "inline";
        hideIconReg.style.display = "none";
    }
}




function subscribe(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(document.getElementById('emailList').value)){
        alert('You successfully subscribe to our email list!');
        document.getElementById('emailList').value = '';
    }else if(!emailPattern.test(document.getElementById('emailList').value)){
        alert('Please enter a valid email address.');
        document.getElementById('emailList').value = '';
    }
}





function goHome(event) {
    event.preventDefault();
    window.location.href = "home.html";
}





function seeMenu(event) {
    event.preventDefault();
    window.location.href = "menu.html";
}





function checkoutClose() {
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('close').style.display = 'none';
}





function checkout() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        let fname = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let payment = document.getElementById("payment").value;
        let price = document.getElementById("price").value.substring(1);

        if (!fname || !address || !payment) {
            showAlert(2);
        } else if (payment < parseFloat(price)) {
            setTimeout(() => {
                alert('Not enough payment.');
            }, 100);
        } else {
            document.getElementById('payment').value = parseFloat(document.getElementById('payment').value).toFixed(2);
            setTimeout(() => {
                alert(
                    'ORDER SUCCESSFUL RECEIPT\n'
                    + '---------------------------------\n'
                    + 'Name: ' + uppercaseName(document.getElementById('name').value) + '\n'
                    + 'Address: ' + document.getElementById('address').value + '\n'
                    + 'Flavor: ' + document.getElementById('flavor').value + '\n'
                    + 'Price: ' + document.getElementById('price').value + '\n'
                    + 'Payment: ₱' + document.getElementById('payment').value + '\n'
                    + 'Change: ' + document.getElementById('change').value
                    + '\n---------------------------------\n'
                    + 'THANK YOU! :)'
                );
                document.getElementById("name").value = "";
                document.getElementById("address").value = "";
                document.getElementById("payment").value = "";
                document.getElementById("flavor").value = "";
                document.getElementById("change").value = "";
                document.getElementById("price").value = "";

                document.getElementById('checkout').style.display = 'none';
                document.getElementById('close').style.display = 'none';
            }, 100);

        }
    } else {
        alert('Log In first before proceeding.')
        window.location.href = "login.html";
    }
}





function gotoSignup() {
    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    loginPage.style.display = "none";
    registerPage.style.display = "block";
}





function gotoLogin() {
    const loginPage = document.getElementById("loginPage");
    const registerPage = document.getElementById("registerPage");
    loginPage.style.display = "block";
    registerPage.style.display = "none";
}





function userClick(event) {
    event.preventDefault();
    const logoutContainer = document.querySelector('.logout-container');

    if (logoutContainer.style.display === 'none' || logoutContainer.style.display === '') {
        logoutContainer.style.display = 'block';
    } else {
        logoutContainer.style.display = 'none';
    }
}





function logout() {
    
    if(confirm('Are you sure you want to log out?')){
        localStorage.removeItem("isLoggedIn");
        window.location.href = "home.html";
    } else {
        console.log('canceled')
    }
}
window.onload = function () {
    checkLoginStatus();
};





// Uppercase first letter of every word of names
function uppercaseName(name) {
    const spaceIndexes = [];
    let upperName = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i] === ' ') {
            spaceIndexes.push(i);
        }
    }
    if (name.length > 0) {
        upperName += name.charAt(0).toUpperCase();
    }
    for (let i = 1; i < name.length; i++) {
        let currentChar = name.charAt(i);
        for (let j = 0; j < spaceIndexes.length; j++) {
            if (i === spaceIndexes[j] + 1) {
                currentChar = currentChar.toUpperCase();
                break;
            }
        }
        upperName += currentChar;
    }
    return upperName;
}





// Displaying and hiding #user and #signInHome
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        document.getElementById("signInHome").style.display = "none";
        document.getElementById("user").style.display = "inline-block";
    } else {
        document.getElementById("signInHome").style.display = "inline-block";
        document.getElementById("user").style.display = "none";
    }
}





// Preloader
window.addEventListener("load", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 500);
});





// AOS Animation
function aosInit() {
    AOS.init({
        duration: 300,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);





// Alerts for login and register
function showAlert(flag) {
    if (flag === 1) {
        alert('Registered successfully!');
    } else if (flag === 2) {
        alert('All fields are required');
    } else if (flag === 3) {
        alert("Please enter a valid email address.");
    } else if (flag === 4) {
        alert("Confirm password must match the password and be at least 8 characters long.");
    } else if (flag === 5) {
        alert("Email or password does not match.");
    }
}





// Register Acc Validation
function registerAcc(event) {
    const fullName = document.getElementById("fname").value;
    const emailReg = document.getElementById("email").value;
    const passReg = document.getElementById("pass").value;
    const passConReg = document.getElementById("passCon").value;
    const fnameError = document.getElementById("fnameError");
    const emailRegError = document.getElementById("emailError");
    const passRegError = document.getElementById("passError");
    const passConRegError = document.getElementById("passConError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    event.preventDefault();

    fnameError.style.display = "none";
    emailRegError.style.display = "none";
    passRegError.style.display = "none";
    passConRegError.style.display = "none";

    if (fullName && emailReg && passConReg && passReg) {
        document.getElementById("fname").style.borderBottom = "2px solid white";
        document.getElementById("fnameIcon").style.color = "white";
        document.getElementById("email").style.borderBottom = "2px solid white";
        document.getElementById("emailIcon").style.color = "white";
        document.getElementById("pass").style.borderBottom = "2px solid white";
        document.getElementById("passRegIcon").style.color = "white";
        document.getElementById("passCon").style.borderBottom = "2px solid white";
        document.getElementById("passConIcon").style.color = "white";

        if (!emailPattern.test(emailReg)) {
            emailRegError.style.display = "block";
            document.getElementById("email").style.borderBottom = "2px solid rgb(255, 86, 86)";
            document.getElementById("emailIcon").style.color = "rgb(255, 86, 86)";
            setTimeout(() => {
                showAlert(3);
            }, 100);
        }
        if (passConReg.length < 8 || passReg !== passConReg) {
            passRegError.style.display = "block";
            document.getElementById("pass").style.borderBottom = "2px solid rgb(255, 86, 86)";
            document.getElementById("passRegIcon").style.color = "rgb(255, 86, 86)";
            passConRegError.style.display = "block";
            document.getElementById("passCon").style.borderBottom = "2px solid rgb(255, 86, 86)";
            document.getElementById("passConIcon").style.color = "rgb(255, 86, 86)";
            setTimeout(() => {
                showAlert(4);
            }, 100);
        } else {
            if (fullName && emailPattern.test(emailReg) && passConReg && passReg) {
                document.getElementById("fname").style.borderBottom = "2px solid white";
                document.getElementById("fnameIcon").style.color = "white";
                document.getElementById("email").style.borderBottom = "2px solid white";
                document.getElementById("emailIcon").style.color = "white";
                document.getElementById("pass").style.borderBottom = "2px solid white";
                document.getElementById("passRegIcon").style.color = "white";
                document.getElementById("passCon").style.borderBottom = "2px solid white";
                document.getElementById("passConIcon").style.color = "white";
                setTimeout(() => {
                    showAlert(1);
                    document.getElementById("fname").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("pass").value = "";
                    document.getElementById("passCon").value = "";
                }, 100);
            }
        }
    } else {
        if (!fullName) {
            fnameError.style.display = "block";
            document.getElementById("fname").style.borderBottom = "2px solid rgb(255, 86, 86)";
            document.getElementById("fnameIcon").style.color = "rgb(255, 86, 86)";
        }
        if (!emailReg) {
            emailRegError.style.display = "block";
            document.getElementById("email").style.borderBottom = "2px solid rgb(255, 86, 86)";
            document.getElementById("emailIcon").style.color = "rgb(255, 86, 86)";
        }
        if (!passReg) {
            passRegError.style.display = "block";
            document.getElementById("pass").style.borderBottom = "2px solid rgb(255, 86, 86)";
            document.getElementById("passRegIcon").style.color = "rgb(255, 86, 86)";
        }
        if (!passConReg) {
            passConRegError.style.display = "block";
            document.getElementById("passCon").style.borderBottom = "2px solid rgb(255, 86, 86)";
            document.getElementById("passConIcon").style.color = "rgb(255, 86, 86)";
        } if (fullName) {
            fnameError.style.display = "none";
            document.getElementById("fname").style.borderBottom = "2px solid white";
            document.getElementById("fnameIcon").style.color = "white";
        }
        if (emailReg) {
            emailRegError.style.display = "none";
            document.getElementById("email").style.borderBottom = "2px solid white";
            document.getElementById("emailIcon").style.color = "white";
        }
        if (passReg) {
            passRegError.style.display = "none";
            document.getElementById("pass").style.borderBottom = "2px solid white";
            document.getElementById("passRegIcon").style.color = "white";
        }
        if (passConReg) {
            passConRegError.style.display = "none";
            document.getElementById("passCon").style.borderBottom = "2px solid white";
            document.getElementById("passConIcon").style.color = "white";
        }
        setTimeout(() => showAlert(2), 100);
    }
}





// Log In Validation
function login(event) {
    const emailLog = document.getElementById("emailLog").value;
    const passLog = document.getElementById("passLog").value;
    const emailError = document.getElementById("emailLogError");
    const passError = document.getElementById("passLogError");
    event.preventDefault();

    if (!emailLog && !passLog) {
        emailError.style.display = "block";
        passError.style.display = "block";
        document.getElementById("emailLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("passLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("emailIcon").style.color = "rgb(255, 86, 86)";
        document.getElementById("passIcon").style.color = "rgb(255, 86, 86)";
        setTimeout(() => showAlert(2), 100);
    } else if (!emailLog && passLog) {
        emailError.style.display = "block";
        passError.style.display = "none";
        document.getElementById("emailLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("passLog").style.borderBottom = "2px solid white";
        document.getElementById("emailIcon").style.color = "rgb(255, 86, 86)";
        document.getElementById("passIcon").style.color = "white";
        setTimeout(() => showAlert(2), 100);
    } else if (emailLog && !passLog) {
        emailError.style.display = "none";
        passError.style.display = "block";
        document.getElementById("passLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("emailLog").style.borderBottom = "2px solid white";
        document.getElementById("passIcon").style.color = "rgb(255, 86, 86)";
        document.getElementById("emailIcon").style.color = "white";
        setTimeout(() => showAlert(2), 100);
    } else if (emailLog === "admin@gmail.com" && passLog === "admin") {
        emailError.style.display = "none";
        passError.style.display = "none";
        document.getElementById("emailLog").style.borderBottom = "2px solid white";
        document.getElementById("passLog").style.borderBottom = "2px solid white";
        document.getElementById("emailIcon").style.color = "white";
        document.getElementById("passIcon").style.color = "white";

        window.location.href = "home.html";
        localStorage.setItem("isLoggedIn", "true");
    } else if (emailLog !== "admin@gmail.com" && passLog === "admin") {
        emailError.style.display = "block";
        passError.style.display = "none";
        document.getElementById("emailLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("passLog").style.borderBottom = "2px solid white";
        document.getElementById("emailIcon").style.color = "rgb(255, 86, 86)";
        document.getElementById("passIcon").style.color = "white";
        setTimeout(() => showAlert(5), 100);
    } else if (emailLog === "admin@gmail.com" && passLog !== "admin") {
        emailError.style.display = "none";
        passError.style.display = "block";
        document.getElementById("emailLog").style.borderBottom = "2px solid white";
        document.getElementById("passLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("emailIcon").style.color = "white";
        document.getElementById("passIcon").style.color = "rgb(255, 86, 86)";
        setTimeout(() => showAlert(5), 100);
    } else {
        emailError.style.display = "block";
        passError.style.display = "block";
        document.getElementById("emailLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("passLog").style.borderBottom = "2px solid rgb(255, 86, 86)";
        document.getElementById("emailIcon").style.color = "rgb(255, 86, 86)";
        document.getElementById("passIcon").style.color = "rgb(255, 86, 86)";
        setTimeout(() => showAlert(5), 100);
    }
}





// Displaying for checkout
let selectedItem;

function buy(flavor, itemName, price, imageUrl, description, index) {
    selectedItem = {
        flavor: flavor,
        name: itemName,
        price: price,
        image: imageUrl,
        description: description,
        index: index
    };

    if (selectedItem) {
        const selectedItemDiv = document.getElementById('selected-item');

        selectedItemDiv.classList.remove('fade-in');

        selectedItemDiv.innerHTML = `
            <img src="${selectedItem.image}" alt="${selectedItem.name}" class="item-img">
            <h2 class="item-name" id='name1'>${selectedItem.name}</h2>
            <h2 class="item-name" id='name2'>${selectedItem.name}</h2>
            <h2 class="item-name" id='name3'>${selectedItem.name}</h2>
            <p class="item-desc">${selectedItem.description}</p>
        `;

        void selectedItemDiv.offsetWidth;
        selectedItemDiv.classList.add('fade-in');

        document.getElementById('checkout').style.display = 'flex';
        document.getElementById('close').style.display = 'block';
        window.location.href = "#top";
    }

    document.getElementById('flavor').value = selectedItem.flavor;
    document.getElementById('price').value = '₱' + selectedItem.price.toFixed(2);

    document.getElementById("payment").addEventListener("input", function calculateChange() {
        const price = selectedItem.price;
        const payment = parseFloat(document.getElementById('payment').value);
        if (isNaN(payment) || payment < price || payment === "") {
            document.getElementById("change").value = '₱0.00';
        } else {
            var change = payment - price;
            document.getElementById("change").value = '₱' + change.toFixed(2);
        }
    });

    const ingredients = document.querySelectorAll('.ingredients');
    ingredients.forEach(function (checkbox) {
        checkbox.checked = false; // Uncheck all ingredients first
    });

    if (selectedItem.flavor === "Espresso") {
        document.getElementById("espresso").checked = true;
        document.getElementById("water").checked = true;
    } else if (selectedItem.flavor === "Cappuccino") {
        document.getElementById("espresso").checked = true;
        document.getElementById("steamed-milk").checked = true;
        document.getElementById("milk-foam").checked = true;
    } else if (selectedItem.flavor === "Café Mocha") {
        document.getElementById("chocolate-syrup").checked = true;
        document.getElementById("steamed-milk").checked = true;
        document.getElementById("cocoa-powder").checked = true;
        document.getElementById("espresso").checked = true;
        document.getElementById("whipped-cream").checked = true;
    } else if (selectedItem.flavor === "Flat White") {
        document.getElementById("espresso").checked = true;
        document.getElementById("steamed-milk").checked = true;
    } else if (selectedItem.flavor === "Caramel Macchiato") {
        document.getElementById("vanilla-syrup").checked = true;
        document.getElementById("caramel-sauce").checked = true;
        document.getElementById("espresso").checked = true;
        document.getElementById("steamed-milk").checked = true;
    } else if (selectedItem.flavor === "Iced Americano") {
        document.getElementById("espresso").checked = true;
        document.getElementById("cold-water").checked = true;
        document.getElementById("ice-cubes").checked = true;
    } else if (selectedItem.flavor === "Latte") {
        document.getElementById("espresso").checked = true;
        document.getElementById("steamed-milk").checked = true;
        document.getElementById("milk-foam").checked = true;
    } else if (selectedItem.flavor === "Irish Coffee") {
        document.getElementById("espresso").checked = true;
        document.getElementById("irish-whiskey").checked = true;
        document.getElementById("brown-sugar").checked = true;
        document.getElementById("whipped-cream").checked = true;
    } else if (selectedItem.flavor === "Affogato") {
        document.getElementById("espresso").checked = true;
        document.getElementById("vanilla-ice-cream").checked = true;
    } else if (selectedItem.flavor === "Café au Lait") {
        document.getElementById("espresso").checked = true;
        document.getElementById("steamed-milk").checked = true;
    } else if (selectedItem.flavor === "Cortado") {
        document.getElementById("espresso").checked = true;
        document.getElementById("warm-milk").checked = true;
    } else if (selectedItem.flavor === "Doppio") {
        document.getElementById("espresso").checked = true;
    }
}





// nav bar
let sections = document.querySelectorAll('section'); // Define sections
let navLinks = document.querySelectorAll('header nav a'); // All nav links

window.onscroll = () => {
    let scrollPos = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.scrollHeight;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Adjust for any header or fixed nav
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Get the id of the section

        // Check if the current scroll position is within the section
        if (scrollPos >= offset && scrollPos < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove 'active' from all links
            });

            // Add 'active' class to the nav link with a matching href
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active'); // Add 'active' class to the correct link
            }
        }
    });

    // Check if the user has reached the bottom of the page
    if (windowHeight + scrollPos >= documentHeight - 10) {
        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove 'active' from all links
        });
        let contactLink = document.querySelector('header nav a[href*="contact"]');
        if (contactLink) {
            contactLink.classList.add('active'); // Highlight the contact link
        }
    }
};