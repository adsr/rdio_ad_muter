#!/usr/bin/env php
<?php
while (true) {
    if (($len_data = fread(STDIN, 4)) === false) {
        exit(1);
    }
    $len_arr = unpack('i', $len_data);
    $len = (int)current($len_arr);
    if (($json = fread(STDIN, $len)) === false) {
        exit(1);
    }
    if (($arr = json_decode($json, true)) === false) {
        exit(1);
    }
    $cmd = empty($arr['mute']) ? 'unmute' : 'mute';
    shell_exec("amixer -D pulse set Master 1+ $cmd");
}
