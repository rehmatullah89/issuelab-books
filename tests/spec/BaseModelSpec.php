<?php

namespace spec\App;

use App\BaseModel;
use PhpSpec\Laravel\LaravelObjectBehavior;

class BaseModelSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\BaseModel');
    }

    public function it_can_find_nested_model_attributes()
    {
        $attributes = [
          'title' => 'title',
          'attr2',
          'attr3',
          'linking_attr' => [
            0 => [ 'attr_key1' => 'attr_val1',
                   'linked_model' => ['linked_model_attr_key' => 'linked_model_attr_val']],
            1 => [ 'attr_key1' => 'attr_val1',
                   'linked_model' => ['linked_model_attr_key' => 'linked_model_attr_val']],
           ]
        ];

        $this->findModelAttributesForParam($attributes, 'linked_model')
             ->shouldReturn([
               0 => [ 'attributes' => ['linked_model_attr_key' => 'linked_model_attr_val'], 'association_attributes' => ['attr_key1' => 'attr_val1'] ],
               1 => [ 'attributes' => ['linked_model_attr_key' => 'linked_model_attr_val'], 'association_attributes' => ['attr_key1' => 'attr_val1'] ],
              ]);
    }

    public function it_can_find_model_attributes()
    {
        $attributes = [
          'attr1',
          'attr2',
          'attr3',
          'linked_model' => [
            0 => ['linked_model_attr_key' => 'linked_model_attr_val'],
            1 => ['linked_model_attr_key' => 'linked_model_attr_val'],
          ]
        ];

        $this->findModelAttributesForParam($attributes, 'linked_model')
             ->shouldReturn([
                  0 => ['attributes' => ['linked_model_attr_key' => 'linked_model_attr_val'], 'association_attributes' => false],
                  1 => ['attributes' => ['linked_model_attr_key' => 'linked_model_attr_val'], 'association_attributes' => false],
                ]);
    }
}
