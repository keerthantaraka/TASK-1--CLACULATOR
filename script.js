let result = "0";

function appendToResult(value) {
    if (result === "0") {
        result = value;
    } else {
        result += value;
    }
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "0";
    document.getElementById("result").value = result;
}

function calculate() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
        result = "0";
    }
}
function backspace(){
    result = document.getElementById("result").value;
    if (result.length > 0) {
        result = result.slice(0, -1);
        document.getElementById("result").value = result;
    }
}