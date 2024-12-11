# Issuelab

## Setup

This project depends on ruby gems and npm packages for compiling assets. Make sure you have ruby, the bundler gem, and nodejs installed on your system.

    # First, our global dependencies
    $ npm install -g gulp bower

    # Now, our project packages
    $ bundle install
    $ npm install
    $ composer install
    $ bower install
    $ gulp --production

## Building assets

Use gulp to build assets. This runs compass to compile sass to css, browserify to compile javascript modules into one file, etc

    # Build development assets
    $ gulp

    # Build production assets
    $ gulp --production

    # Watch files and rebuild assets upon file changes, and reload browser using browsersync (http://localhost:3000)
    $ gulp watch

    # Watch files and run tests when files change
    $ gulp tdd

    # Watch files, rebuild assets and run tests when files change
    $ gulp watch --tdd

## Deployment

    $ gulp --deploy

This will do the following

- Run `gulp --production` to build assets
- Copy up assets to the `public/build/` folder of issuelab-dev.org
    - This requires you have `issuelab` configured in your ssh agent, for example:

            Host issuelab
                HostName issuelab-dev.org
                User issuelab
                IdentityFile ~/.ssh/id_rsa

- `git push beanstalk master` which will push code updates to the beanstalk git repo and update code on issuelab-dev.org server over sftp
    - To add beanstalk as a git remote:

            git remote add beanstalk git@issuelab.git.beanstalkapp.com:/issuelab/issuelab.git

    - You will need to add your ssh key through beanstalk, first.

**Note:** if you need to install additional composer packages, or run database migrations, you will need to ssh to the server and run those directly


## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
