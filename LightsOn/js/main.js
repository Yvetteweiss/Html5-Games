$(document).ready(function () {
    $(startButton).click(function () {
        if (step > 0 && count > 0 && count < maxX * maxY) {
            if (confirm('你确定要重新开始游戏么？') === false)
                return;
        }
        if (isNaN($(X).val()) || isNaN($(Y).val())) {
            alert('横纵的单元格中只能输入数字。');
            return;
        }
        else if ($(X).val() < 4 || $(Y).val() < 4 || $(X).val() >= 10 || $(Y).val() >= 10) {
            alert('横纵的数量不能小于 4，且不能大于 9。');
            return;
        }
        startGame();
    });      
});