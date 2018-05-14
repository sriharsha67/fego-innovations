/*General*/
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


function subscribe()
{
var val=document.getElementById('becomePartner').value;
/*
$.post('../subscribe.php',{email:val},function(d){
if(d==200)
{
alert('Thank you! We will get back to you soon.');    
}
else
{
alert('Please try again later.');        
}
});
*/
alert(val);
}
/*General*/