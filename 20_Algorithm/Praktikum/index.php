<?php
    if(isset($_POST['bilangan'])) {
        $bilangan = $_POST['bilangan'];
        $dibagi = 0;
        // melakukan perulangan
        // melakukan pembagian menggunakan looping
        // jika hasil bagi 0 atau habis dibagi maka $dibagi bertambah
        for ($i = 1; $i <= $bilangan; $i++) {
          if ($bilangan % $i == 0) {
             $dibagi=$dibagi+1;
          }
        }
        // seperti penjelasan jika bilangan prima hanya bisa dibagi 2 kali
        // oleh angka dibawahnya
        if ($dibagi == 2) {
          echo $bilangan . " adalah bilangan prima";
        } else {
          echo $bilangan . " bukan bilangan prima";
        }
    }   
?>