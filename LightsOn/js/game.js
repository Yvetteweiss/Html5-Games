var maxX, maxY;
var step = 0;
var count = 0;
function startGame() {
    maxX = $(X).val();
    maxY = $(Y).val();
    makeGrid(maxX, maxY);
    step = 0;
    count = 0;
    $('#step').html(step);
    $('#cong').html('');
}
function makeGrid(x, y) {
    $(".darkButton").remove();
    $(".lightButton").remove();
    $(".return").remove();
    var grid = document.getElementById('content');
    for (var i = 1; i <= x; i++) {
        for (var j = 1; j <= y; j++) {
            var button = createButton('bt' + i + j);
            grid.appendChild(button);
        }
        var ret = document.createElement('br');
        ret.className = "return";
        grid.appendChild(ret);
    }
    $(".darkButton").click(function () {
        changeButton(this.id);
        var x = this.id.charAt(2);
        var y = this.id.charAt(3);
        if (x - 1 > 0) {
            changeButton('bt' + (x - 1) + y);
        }
        if (y - 1 > 0) {
            changeButton('bt' + x + (y - 1));
        }
        var newX = 1 + parseInt(x);
        if (x + 1 <= maxX) {
            changeButton('bt' + newX + y);
        }
        var newY = 1 + parseInt(y);
        if (y + 1 <= maxY) {
            changeButton('bt' + x + newY);
        }
        step++;
        $('#step').html(step);
        if (count == maxX * maxY) {
            $('#cong').html('恭喜你已经打开所有的灯！');
        }
    });
}
function changeButton(id) {
    var button = document.getElementById(id);
    if (button.className === "darkButton") {
        count++;
        button.className = "lightButton";
    }
    else {
        count--;
        button.className = "darkButton";
    }
}
function createButton(id) {
    var button = document.createElement('button');
    button.id = id;
    button.className = "darkButton";
    return button;
}