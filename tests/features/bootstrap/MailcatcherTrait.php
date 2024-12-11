<?php

trait MailcatcherTrait
{
    /**
     * Instance of mailcatcher for email testing
     *
     * @var GuzzleHttp\Client
     */
    protected $mailcatcher;

    /**
     * @BeforeScenario
     */
    public function initMailcatcher()
    {
        $this->mailcatcher = new \GuzzleHttp\Client(['base_uri' => 'http://www.issuelab.test:1080']);
    }

    /**
     * @AfterScenario
     */
    public function resetMailCatcher()
    {
        $this->deleteAllEmails();
    }

    public function deleteAllEmails()
    {
        return $this->mailcatcher->delete('/messages');
    }

    public function getAllEmails()
    {
        $response = $this->mailcatcher->get('/messages');
        $emails   = $response->getBody()->__toString();
        if (empty($emails)) {
            $this->fail('No messages returned.');
        }
        return json_decode($emails);
    }

    public function getLastEmail()
    {
        $emailId = $this->getAllEmails()[0]->id;
        $email   = $this->mailcatcher->get("/messages/{$emailId}.json")->getBody()->__toString();
        return json_decode($email);
    }

    public function assertEmailContains($body, $email)
    {
        $this->assertContains($body, $email->source);
    }

    public function assertNotEmailContains($body, $email)
    {
        $this->assertNotContains($body, $email->source);
    }

    public function assertEmailSentTo($recipient, $email)
    {
        $this->assertContains("<{$recipient}>", $email->recipients);
    }

    public function assertNotEmailSentTo($recipient, $email)
    {
        $this->assertNotContains("<{$recipient}>", $email->recipients);
    }
}
