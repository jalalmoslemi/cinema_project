<?php

foreach (glob(__DIR__ . '/web-routes/*.php') as $web) {
    require_once $web;
}

foreach (glob(__DIR__ . '/web-routes/admin/*.php') as $web) {
    require_once $web;
}