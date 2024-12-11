<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class LaravelRequest implements RequestInterface
{
    /**
     * Request instance we are decorating
     *
     * @var \Illuminate\Http\Request
     */
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Return the subdomain string that proceeds the main site domain
     *
     * @return string
     */
    public function subdomain()
    {
        $host       = explode('.', $this->request->getHost());
        $domain     = false !== array_search('issuelab-dev', $host, true) ? 'issuelab-dev' : 'issuelab';
        $subdomains = array_slice($host, 0, array_search($domain, $host));

        return implode('.', $subdomains);
    }

    public function host()
    {
        $host = explode('.', $this->request->getHost());

        return implode('.', array_slice($host, -2, 2));
    }
}
