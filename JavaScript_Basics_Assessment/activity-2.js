const name = prompt('What is your name?');

if (name.length > 4) {

    alert('Your name is greater than four characters!');

}

else if (name.length === 4)  {

    alert('Your name is exactly four characters!');

}

else {

    alert('Your name is fewer than four characers!');

}