<?php

namespace App\Helpers;

use Cache;
use Carbon\Carbon;
use GuzzleHttp\Client;

class Copyright
{
    /**
     * @var \GuzzleHttp\Client
     */
    protected $creativeCommonsApi;

    /**
     * XML response from Creative Commons API
     *
     * @var SimpleXMLElement
     */
    protected $creativeCommonsLicense;

    /**
     * Copyright text
     *
     * @var string
     */
    protected $rights;

    /**
     * @var array
     */
    protected $attributes = [];

    public function __construct($copyrightText)
    {
        $this->rights             = $copyrightText;
        $this->creativeCommonsApi = new Client(['base_uri' => '//api.creativecommons.org/rest/1.5/']);
        $this->boot();
    }

    /**
     * Boot instance of class and populate license information.
     *
     * @return void
     */
    public function boot()
    {
        if ($this->isCreativeCommons()) {
            $license       = $this->getCreativeCommonsLicense()->html;
            $this->image   = $this->toArray($license->a['0']->img)['@attributes'];
            $this->license = $this->toArray($license->a)['1'];
            $this->uri     = $this->rights;
        } else {
            $this->license = $this->rights;
        }
    }

    /**
     * Set rights property.
     *
     * @param string $copyrightText
     */
    public function setRights($copyrightText)
    {
        return $this->rights = $copyrightText;
    }

    /**
     * Detect whether or not this license is a creative commons license.
     *
     * @return boolean
     */
    public function isCreativeCommons()
    {
        return false === strpos($this->rights, '//creativecommons.org') ? false : true;
    }

    /**
     * Dynamically retrieve attributes on the model.
     *
     * @param  string  $key
     * @return mixed
     */
    public function __get($key)
    {
        return $this->attributes[$key];
    }

    /**
     * Dynamically set attributes on the model.
     *
     * @param  string  $key
     * @param  mixed   $value
     * @return void
     */
    public function __set($key, $value)
    {
        $this->attributes[$key] = $value;
    }

    /**
     * Converts the object to a string.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->license;
    }

    /**
     * Get license details from Creative Commons API
     *
     * @return  SimpleXMLElement
     */
    protected function getCreativeCommonsLicense()
    {
        if (!$this->isCreativeCommons()) {
            return false;
        }

        $licenseDetails = Cache::remember(
            $this->rights,
            Carbon::now()->addWeek(),
            function () {
                $response = $this->creativeCommonsApi->get('details', ['query' =>
                    [
                        'license-uri' => $this->rights,
                    ],
                ]);

                return $response->getBody()->__toString();
            }
        );

        return $this->creativeCommonsLicense = simplexml_load_string($licenseDetails);
    }

    /**
     * Convert xml to an array
     *
     * @param  SimpleXMLElement $xml
     * @return array
     */
    protected function toArray($xml)
    {
        $json = json_encode($xml);
        return json_decode($json, true);
    }
}
