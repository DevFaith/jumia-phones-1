<?php

namespace App\Controller;

use App\Core\App;
use App\Core\Helpers\{Controller, Parser, Request};

class HomeController extends Controller
{
    public function index()
    {
        $phones = App::get('database')
            ->from('customer')
            ->findBy('phone');

        $phones = (new Parser(App::get('validators')))
            ->normalize($phones);
        
        if (sizeof(Request::all()) > 0) {
            $phones = $this->filter($phones, Request::all());
        }

        return $this->view('index', compact('phones'));
    }

    protected function filter($phones, $request)
    {
        foreach($request as $key => $filter)
        {
            array_filter($phones, function($v, $k) use ($key, $filter) {
                return ($v[$key] != $filter);
            }, ARRAY_FILTER_USE_BOTH);
        }

        return $phones;
    }
}
