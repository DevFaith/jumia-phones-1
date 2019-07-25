<?php

use App\Core\App;
use App\Core\Helpers\Connection;
use App\Core\Helpers\QueryBuilder;

App::bind('config', require '../config.php');

App::bind('database', new QueryBuilder(
    Connection::make(App::get('config')['database'])
));
