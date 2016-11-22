<?php

class form
{
    /**
     * @var mysqli
     */
	private $_con;

	private $_host = 'localhost';
	private $_user = 'root';
	private $_pass = '12345678';
	private $_db   = 'gotcha_site';

	private function _connect()
	{
		$this->_con = new mysqli( $this->_host, $this->_user, $this->_pass, $this->_db );

		if ( $this->_con->connect_errno )
		{
		    exit( "Connect failed: " . $this->_con->connect_error );
		}
	}

    private function _close()
    {
        $this->_con->close();
    }

    private function _query( $query )
    {
        $this->_connect();

        $result = $this->_con->query( $query );

        $this->_close();

        return $result;
    }

	public function save( $data )
	{
		$query = "INSERT INTO contact (name,email,subject,message) VALUES ( '$data[name]', '$data[email]', '$data[subject]', '$data[comment]' )";

        if ( $this->_query( $query ) )
        {
            echo 'Ok';
        }
        else
        {
            exit( "Connect failed: " . $this->_con->connect_error );
        }
	}
}

//    $result->close();

$form = new form();
$form->save($_POST);
