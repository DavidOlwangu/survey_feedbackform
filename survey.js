function submitFeedback(){

    //Container to hold the values from the form
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById("feedbackText").value;

    const submitButton = document.getElementById('submitBtn');

    //Displays user information into HTML
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    //Alert message to confirm submission
    alert('Submission successful, ' + username + '!');

    //Clears initial values from the form
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('job').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('feedbackText').value = '';
    //Efficient way to reset the form we use queryselector and reset method
    //document.querySelector('form').reset();
    
    //Make hidden div(user info) visible
    document.getElementById('userInfo').style.display = 'block';

}

//Enter key event listener 
document.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        submitFeedback();
        }
    });

