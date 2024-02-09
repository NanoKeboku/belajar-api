<?php
echo 'Decimal :';
var_dump(1e34);


echo 'Nama : ';
echo 'Nando';
echo "\n";

echo "Nama : ";
echo "Alhambra\t Ferdi\t Nando\n";


// here doc
echo <<<EKO
gaboleh di space <<<EKO nya
jadi giniya


EKO;


// nowdoc
echo <<<'EKO'
gaboleh di space <<<EKO nya
jadi giniya


EKO;


// ini variable
$nama = 'Nando';

// ini variable variables
$$nama = 'keren';

echo $$nama;

//data kosong
$data_null = null; 

echo "\n";
// cek data null
$dataIsi = 3;
var_dump(is_null($dataIsi));

//unset untuk menghapus variable
$iniada = 1;
unset($iniada);
echo $iniada;


//cek data juga "isset"
$cek = 1;
var_dump(isset($cek));