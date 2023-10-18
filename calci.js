<!DOCTYPE html>
<html>
<head>
    <title>Scientific Calculator</title>
    <style>
        input[type="button"] {
            width: 50px;
            height: 50px;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1>Scientific Calculator</h1>
    <input type="text" id="display" readonly>
    <table>
        <tr>
            <td><input type="button" value="7" onclick="appendToDisplay('7')"></td>
            <td><input type="button" value="8" onclick="appendToDisplay('8')"></td>
            <td><input type="button" value="9" onclick="appendToDisplay('9')"></td>
            <td><input type="button" value="/" onclick="appendToDisplay('/')"></td>
            <td><input type="button" value="sqrt" onclick="calculateSqrt()"></td>
        </tr>
        <tr>
            <td><input type="button" value="4" onclick="appendToDisplay('4')"></td>
            <td><input type="button" value="5" onclick="appendToDisplay('5')"></td>
            <td><input type="button" value="6" onclick="appendToDisplay('6')"></td>
            <td><input type="button" value="-" onclick="appendToDisplay('-')"></td>
            <td><input type="button" value="sin" onclick="calculateSin()"></td>
        </tr>
        <tr>
            <td><input type="button" value="1" onclick="appendToDisplay('1')"></td>
            <td><input type="button" value="2" onclick="appendToDisplay('2')"></td>
            <td><input type="button" value="3" onclick="appendToDisplay('3')"></td>
            <td><input type="button" value="+" onclick="appendToDisplay('+')"></td>
            <td><input type="button" value="cos" onclick="calculateCos()"></td>
        </tr>
        <tr>
            <td><input type="button" value="C" onclick="clearDisplay()"></td>
            <td><input type="button" value="0" onclick="appendToDisplay('0')"></td>
            <td><input type="button" value="=" onclick="calculateResult()"></td>
            <td><input type="button" value="*" onclick="appendToDisplay('*')"></td>
            <td><input type="button" value="tan" onclick="calculateTan()"></td>
        </tr>
    </table>

    <script>
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculateResult() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

        function calculateSqrt() {
            const display = document.getElementById('display');
            try {
                display.value = Math.sqrt(eval(display.value));
            } catch (error) {
                display.value = 'Error';
            }
        }

        function calculateSin() {
            const display = document.getElementById('display');
            try {
                display.value = Math.sin(eval(display.value));
            } catch (error) {
                display.value = 'Error';
            }
        }

        function calculateCos() {
            const display = document.getElementById('display');
            try {
                display.value = Math.cos(eval(display.value));
            } catch (error) {
                display.value = 'Error';
            }
        }

        function calculateTan() {
            const display = document.getElementById('display');
            try {
                display.value = Math.tan(eval(display.value));
            } catch (error) {
                display.value = 'Error';
            }
        }
    </script>
</body>
</html>
