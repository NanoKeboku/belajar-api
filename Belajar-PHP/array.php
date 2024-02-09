<?php
$values = array(1,2,3,1,'nama');
var_dump($values);
var_dump($values[3]);
var_dump($values[4]);

//update data
$values[0] = false;

//delete data index juga hilang
unset($values[1]);

//push data
$values[] = 3.14;
var_dump($values);

//count jumlah data
count($values);
var_dump(count($values)); 