<?php

$database = require 'bootstrap.php';

require 'src/entity/Customer.php';

$customers = $database->selectAll('customer', Customer::class);

require 'assets/views/index.view.php';