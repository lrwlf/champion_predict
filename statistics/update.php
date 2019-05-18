<?php
header('Content-Type: application/json;charset=utf-8');
$con = mysqli_connect("bdm285551520.my3w.com","bdm285551520","Kangxu199551","bdm285551520_db");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }
  mysqli_query($con,"set character set 'utf8'");
  mysqli_query($con,"set names 'utf8'");
  $id = $_POST["id"];

  if($id==-1)
  {
      $sql = "SELECT uniname FROM predict_champion_times where id = -1";
      $result = mysqli_query($con, $sql);
      while($row = mysqli_fetch_assoc($result))
      {
        echo $row['uniname'];
      }
  }
  else if($id==-2)
  {
      $sql = "delete FROM predict_champion_times where id = -1";
      mysqli_query($con, $sql);
  }
  else
    mysqli_query($con,"UPDATE predict_champion_times SET times=times+1  WHERE id = $id");
  mysqli_close($con);
?>