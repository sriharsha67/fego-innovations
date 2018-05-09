<?php
if(isset($_POST['email']))
{
$email=$_POST['email'];
$msg="Customer subsribed:\n".$email;
$mailing=mail('reach@fegoinnovations.com','Become a Partner',$msg);
if($mailing)
{
echo 200;    
}
else
{
echo 400;    
}
}
?>