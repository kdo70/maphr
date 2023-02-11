<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class SecureMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (request()->getScheme() == 'https') {
            URL::forceScheme('https');
        }
        return $next($request);
    }
}
