function clickAlert() {
  var firstName = document.getElementsByName("firstname")[0].value;
  var date_value = document.getElementsByName("date_value")[0].value;
  var arr= ["10:00 am to 11:00 am","11:00 am to 12:00 noon","12 noon to 1 pm","1 pm to 2 pm","2 pm to 3 pm","3 pm to 4 pm","4 pm to 5 pm"]
  var value= arr[Math.floor(Math.random() * arr.length)];
  alert(" Greetings "+firstName+"!\r\n Your appointment has been booked.\r\n Your slot : "+date_value+", "+value);

}
