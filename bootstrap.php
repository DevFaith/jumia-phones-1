<?php

$config = require 'config.php';

require 'libs/Connection.php';
require 'libs/QueryBuilder.php';

return new QueryBuilder(
    Connection::make($config['database'])
);
