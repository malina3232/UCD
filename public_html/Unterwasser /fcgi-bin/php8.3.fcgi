#!/bin/bash
PHPRC=$PWD/../etc/php8.3
export PHPRC
umask 022
PHP_FCGI_MAX_REQUESTS=99999
export PHP_FCGI_MAX_REQUESTS
exec /bin/php-cgi8.3
