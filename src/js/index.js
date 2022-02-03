let count = 0;
function addCards() {
    console.log('hello');
    let profileCard = document.createElement('profile-component');
    profileCard.setAttribute('fullname' , `Firstname Middlename Lastname${count+1}`);
    profileCard.setAttribute('email', `emailtest@gmail.com${count+1}`);
    profileCard.setAttribute('phone', `6181234567${count+1}`);
    profileCard.setAttribute('pictureurl' , 'assets/profilepic.png');
    profileCard.setAttribute('class' , 'profile-component');
    document.getElementById("card-container").appendChild(profileCard);

}