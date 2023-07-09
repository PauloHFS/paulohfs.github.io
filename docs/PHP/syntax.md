# PHP Syntax

This are my notes that I take during this course:

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

```php showLineNumbers
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

```php showLineNumbers
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

```php showLineNumbers
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

```php showLineNumbers
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

```php showLineNumbers
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

## Math Functions

```php showLineNumbers
<?php
    echo pi(); // 3.1415926535898
    echo min(0, 150, 30, 20, -8, -200); // -200
    echo max(0, 150, 30, 20, -8, -200); // 150
    echo abs(-6.7); // 6.7
    echo sqrt(64); // 8
    echo round(0.60); // 1
    echo round(0.49); // 0
    echo rand(); // random number
    echo rand(10, 100); // random number between 10 and 100 
    echo floor(0.60); // 0
    echo ceil(0.60); // 1
    echo pow(2, 3); // 8 
?>
```

## if condition

```php showLineNumbers
<?php
    $t = date("H");

    if ($t < "18") {
        echo "Have a good day!";
    } elseif ($t == "12") {
        echo "Have a good lunch!";
    } else {
        echo "Have a good night!";
    }
?>
```

## logical operators

```php showLineNumbers
<?php
    $x = 100;  
    $y = 50;
    $wordNotExists = false;

    if ($x == 100 && $y == 50) {
        echo "Hello world!";
    }

    if ($x == 100 || $y == 80) {
        echo "Hello world!";
    }

    if (!$wordNotExists) {
        echo "Hello world!";
    } 
?>
```

## loops

### switch

```php showLineNumbers
<?php
    $favcolor = "red";

    switch ($favcolor) {
        case "red":
            echo "Your favorite color is red!";
            break;
        case "blue":
            echo "Your favorite color is blue!";
            break;
        case "green":
            echo "Your favorite color is green!";
            break;
        default:
            echo "Your favorite color is neither red, blue, nor green!";
    }
?>
```

### while

```php showLineNumbers
<?php
    $x = 1;

    while($x <= 5) {
        echo "The number is: $x <br>";
        $x++;
    }
?>
```

### do while

```php showLineNumbers
<?php
    $x = 1;

    do {
        echo "The number is: $x <br>";
        $x++;
    } while ($x <= 5);
?>
```

### for

```php showLineNumbers
<?php
    for ($x = 0; $x <= 10; $x++) {
        echo "The number is: $x <br>";
    }
?>
```

### foreach

```php showLineNumbers
<?php
    $colors = array("red", "green", "blue", "yellow");

    foreach ($colors as $color) {
        echo "$color <br>";
    }
?>
```

## Arrays

```php showLineNumbers
<?php

    $food = array("Pizza", "Hamburger", "Hot dog", "Pasta");

    echo $food[0]; // Pizza
    echo $food[1]; // Hamburger

    $food[0] = "Sushi";

    echo $food[0]; // Sushi

    array_push($food, "Ice cream"); // add a new element to the array

    echo count($food); // 5

    array_pop($food); // remove the last element of the array

    array_shift($food); // remove the first element of the array

    array_unshift($food, "Pizza"); // add a new element to the beginning of the array

    $new_array = array_reverse($food); // reverse the order of the array 
?>
```

## Associative Arrays

```php showLineNumbers
<?php
    $ages = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

    echo "Peter is " . $ages['Peter'] . " years old."; // Peter is 35 years old.

    $ages['Peter'] = "40";

    $keys = array_keys($ages); // return all the keys of the array
    $values = array_values($ages); // return all the values of the array

    array_flip($ages); // flip the keys with the values


    foreach($ages as $name => $age) {
        echo "Key=" . $name . ", Value=" . $age;
    }
?>
```
