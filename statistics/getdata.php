<?php
header('Content-Type: application/json;charset=utf-8');
$con = mysqli_connect("bdm285551520.my3w.com","bdm285551520","Kangxu199551","bdm285551520_db");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }
  mysqli_query($con,"set character set 'utf8'");
  mysqli_query($con,"set names 'utf8'");
$sql = "SELECT uniname,times FROM predict_champion_times where id!=-1 ";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) > 0) {
    // 输出数据
    echo "[";
    $count = 0;
    while($row = mysqli_fetch_assoc($result)) {
    	if($count==1)
    	{
    		echo ",";
    	}
    	else{
    		$count++;
    	}
        echo "{ \"uniname\" : \" " . $row["uniname"]. "\", \"times\": " . $row["times"]."}";
    }
    echo "]";
} else {
    echo "0";
}

?>