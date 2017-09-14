<?php if(isset($_SESSION)) {
	session_destroy(); 
	$_SESSION = array();
} ?>
<?php
session_start ();
function loginForm() {
    echo '
    <div id="loginform">
    <form action="index.php" method="post">
        <p><b>Welcome to the chatroom!</b></p>
        <p>Please enter your name:</p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />
        <input type="submit" name="enter" id="enter" value="Enter" />
    </form>
    </div>
    ';
}
if (isset ( $_POST ['enter'] )) {
    if ($_POST ['name'] != "") {
        $_SESSION ['name'] = stripslashes ( htmlspecialchars ( $_POST ['name'] ) );
        $fp = fopen ( "log.html", 'a' );
        fwrite ( $fp, "<div class='msgln'><i>User " . $_SESSION ['name'] . " has joined the chat session.</i><br></div>" );
        fclose ( $fp );
    } else {
        echo '<span class="error">Please type in a name</span>';
    }
}

if (isset ( $_GET ['logout'] )) {

    $fp = fopen ( "log.html", 'a' );
    fwrite ( $fp, "<div class='msgln'><i>User " . $_SESSION ['name'] . " has left the chat session.</i><br></div>" );
    fclose ( $fp );

    session_destroy ();
    header ( "Location: index.php" );
}
?>
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
		<link rel="stylesheet" type="text/css" href="/style/style.css">
        <title>Chatroom</title>
    </head>
    <body>
    <?php
    if (! isset ( $_SESSION ['name'] )) {
        loginForm ();
    } else {
        ?>
        <div id="wrapper">
            <div id="menu">
                <p class="welcome">
                    Welcome, <b><?php echo $_SESSION['name']; ?></b>
                </p>
                <p class="logout">
                    <a id="exit" href="#">Leave Chat</a>
                </p>
                <div style="clear: both"></div>
            </div>
            <div id="chatbox"><?php
                if (file_exists ( "log.html" ) && filesize ( "log.html" ) > 0) {
                    $handle = fopen ( "log.html", "r" );
                    $contents = fread ( $handle, filesize ( "log.html" ) );
                    fclose ( $handle );

                    echo $contents;
                }
                ?></div>

            <form name="message" action="">
                <input name="usermsg" type="text" id="usermsg" size="63" /> <input
                    name="submitmsg" type="submit" id="submitmsg" value="Send" />
            </form>
        </div>
        <script type="text/javascript"
                src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
            });

            $(document).ready(function(){
                $("#exit").click(function(){
                    var exit = confirm("Are you sure you want to end the chat session?");
                    if(exit==true){window.location = 'index.php?logout=true';}
                });
            });

            $("#submitmsg").click(function(){
                var clientmsg = $("#usermsg").val();
                $.post("post.php", {text: clientmsg});
                $("#usermsg").attr("value", "");
                loadLog;
                return false;
            });

            function loadLog(){
                var oldscrollHeight = $("#chatbox").attr("scrollHeight") - 20;
                $.ajax({
                    url: "log.html",
                    cache: false,
                    success: function(html){
                        $("#chatbox").html(html);

                        var newscrollHeight = $("#chatbox").attr("scrollHeight") - 20;
                        if(newscrollHeight > oldscrollHeight){
                            $("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal');
                        }
                    },
                });
            }

            setInterval (loadLog, 1000);
        </script>
        <?php
    }
    ?>
		<?php session_destroy(); ?>
    <script type="text/javascript"
            src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
    <script type="text/javascript">
    </script>
    </body>
</html>