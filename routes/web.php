<?php

foreach (glob(__DIR__ . '/web-routes/*.php') as $web) {
    require_once $web;
}
