# PHP

This are my notes that I take during this tutoria:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zZ6vybT1HQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

PHP is PHP HIPERTEXT PREPROCESSOR

PHP code is executed on the server, and the result is returned to the browser as plain HTML.

You can use XAMPP to run PHP on your computer.

XAMPP is a set of (X - cross platform, A - Apache Server, M - MySQL, P - PHP, P - Perl) tools that allow you to run a server on your computer.

PHP files have extension .php

## PHP Syntax

A PHP script can be placed anywhere in the document.

A PHP script starts with `<?php` and ends with `?>`

The must need first program in PHP:

```php
// index.php
/* comment */
<?php
    echo "Hello World!";
?>
```

this will return a html with `Hello World!` in the browser.

A .php file can contain HTML, CSS, JavaScript, and PHP code.

## PHP Variables

How to declare a variable in PHP:

```php
<?php
    $txt = "Hello World!"; // string
    $x = 5; // integer
    $y = 10.5; // float
    $z = true; // boolean

    echo $txt . " " . $x . " " . $y . "\n"; // ✅ concatenate the variables
    echo "$txt $x $y\n"; // ✅ same as above
    echo "{$txt} {$x} {$y}\n"; // ✅ same as above

    echo '$txt $x $y\n'; // 🛑 not show the variables
?>
```

## PHP Arithmetic operators

```php
<?php
    $x = 10;
    $y = 2;
    $z = null;

    $z = $x + $y; // 12
    $z = $x - $y; // 8
    $z = $x * $y; // 20
    $z = $x / $y; // 5
    $z = $x % $y; // 0
    $z = $x ** $y; // 100

    $x++; // 11
    $y--; // 1

    $z += $x; // 110
?>
```

## PHP Special Variables

The variables $_GET and $_POST are used to collect form-data.

$_GET the data is visible in the URL with is not secure, has a character limit, and should only be used for sending non-sensitive data, this can be saved in bookmarks with the values, and this requests can be cached with is better for a search page.

```php
    // index.php
    <form action="index.php" method="get">
        <input type="text" name="name"/>
        <input type="submit" value="send!">
    </form>
    
    // this will return the value of the input
    // the url will be something like this: http://localhost:8080/index.php?name=hello

    <?php
        echo $_GET['name'];
    ?>
```

$_POST the data is packaged inside the body of the HTTP request with is more secure, has no data limit, and can be used to send sensitive data, this can't be saved in bookmarks, and this requests can't be cached with is better for a login page.

```php
    // index.php
    <form action="index.php" method="post">
        <input type="text" name="name"/>
        <input type="submit" value="send!">
    </form>
    
    // this will return the value of the input
    // the url will be something like this: http://localhost:8080/index.php

    <?php
        echo $_POST['name'];
    ?>
```
