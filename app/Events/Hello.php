<?php

namespace App\Events;

use Faker\Factory;
use Faker\Provider\es_VE\Company;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Queue\SerializesModels;

class Hello implements ShouldBroadcastNow
{
    use SerializesModels;

    protected string $name;

    public function __construct()
    {
        $this->name = Factory::create()->company();
    }

    public function broadcastWith()
    {
        return ['name' => $this->name];
    }
    public function broadcastOn()
    {
        return new Channel('public');
    }
}
