var out = ''

function print(data) {
    out += '<h2>' + data + '</h2>';
    document.getElementById('out').innerHTML = out;
}

function read(id) {
    return document.getElementById(id).value;
}

(function launch() {
    //promptTest();
    //confirmTest();
    //Calculator();
    //additor();
    ifElseTest();
})();

function promptTest() {
    var name1 = prompt('Please, enter your name:');
    var name2 = prompt('Please, enter your name:',
                            'enter your name here...');
    print('Hello, ' + name1 + ' and ' + name2 + '!');
}

function confirmTest() {
var name = prompt('Please, enter your name:');
var isAdult = confirm('Are you adult:');
print(name + (isAdult ? ' is adult ' : ' is not') + '!');
}

function ifElseTest() {
    var login = read('login');
    var password = read('password');
    print(login != '' && password != ''
                ? ('Login: ' + login +', password: ' + password)
                : 'Please, enter login and password values!');
    // admin login and password
    var adminlog = 'admin';
    var adminpass = 'admin';

    if(login != '' && password != '') {
        if(login == adminlog && password == adminpass) { // if true then ->
            /* -> */
            print('Hello, my Lord!&nbsp :)');
        } else { // if false then
            /* -> */
            print('Sorry, access denied');
        }
    }
}

function ternaryOperatorTest() {
    /*
     * Requirements: can be used as right value in assignment statement or
     *               as return value in a function.
     *  Syntax:
     *          if()                    else
     *      <condition> ? <if true> : <if false>
     *
     * Example:
     *      var a = 5;
     *      var b = 10;
     *      var min = a < b ? a : b; // min equal to a,
     *                               // if a less then b
     *                               // else equals to b
     *         if(a < b) {
     *              min = a;
     *         } else {
     *              min = b;
     *         }
     */
    var a = read('a');

    var b = read('b');
    if (a == '' || b == '') {
        print('Some values was not received');
    } else {
        var min = +a < +b ? +a : +b;    //define with ternary operator and
                                        // comparison of a and b values
        var max = +a > +b ? +a : +b;    //define with ternary operator and
                                        // comparison of a and b values
        print('min: ' + min + '<br>max: ' + max);
    }
}

/*
*Tack Calculator: *, /, +, -
 */

function additor() {
    var a = +(prompt("Please, enter your 'a'number:"));
    var b = +(prompt("Please, enter your 'b'number:"));
print('a('+ a + ') + b('+ b +') = ' + (a + b));
}