<?php

namespace App\Controller;

use App\Core\App;
use App\Core\Helpers\Controller;
use App\Entity\Customer;

class HomeController extends Controller
{
    public function index()
    {
        $customers = App::get('database')
            ->selectAll('customer', Customer::class);

        
        return $this->view('index', compact('customers'));
    }
}
