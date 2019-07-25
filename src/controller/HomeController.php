<?php

require '../src/entity/Customer.php';

$customers = $app['database']->selectAll('customer', Customer::class);

require '../assets/views/index.view.php';