<?php


class AuthControllerTest extends TestCase
{

    public function testGetRegisterPage(){
      $this->action('GET', 'Auth\AuthController@getRegister');

      $this->assertResponseStatus(200);
    }

    public function testGetLoginPage(){
      $this->action('GET', 'Auth\AuthController@getLogin');

      $this->assertResponseStatus(200);
    }

    public function testGetRegisterPageWithSession(){
       $this
       ->withSession(['auth_mode' => 'resource_creation'])
       ->action('GET', 'Auth\AuthController@getRegister');

      $this->assertResponseStatus(200);
      $this->assertViewHas('auth_mode', 'resource_creation');
      $this->assertViewHas('login_form_options', array('redirect' => '/resource/create'));
    }

    public function testGetLoginPageWithSession(){
       $this
       ->withSession(['auth_mode' => 'resource_creation'])
       ->action('GET', 'Auth\AuthController@getLogin');

      $this->assertResponseStatus(200);
      $this->assertViewHas('auth_mode', 'resource_creation');
      $this->assertViewHas('login_form_options', array('redirect' => '/resource/create'));
    }
}
