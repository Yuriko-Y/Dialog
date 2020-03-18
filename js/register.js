$(function () {
    $('#selected__small').hide();
    // $('#selected__construction').hide();
    // $('#selected__db').hide();

    $('.js-modal-open').on('click', function () {
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });

});
function selected() {

    var select1 = document.forms.registerForm.mainCategory; //変数select1を宣言
    var select2 = document.forms.registerForm.subCategory; //変数select2を宣言
    select2.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
    if (select1.options[select1.selectedIndex].value == "development") {
        select2.options[0] = new Option("Java");
        select2.options[1] = new Option("Java Silver");
        select2.options[2] = new Option("JSP/Servlet");
    }
    else if (select1.options[select1.selectedIndex].value == "construction") {
        select2.options[0] = new Option("Linux");
    }
    else if (select1.options[select1.selectedIndex].value == "db") {
        select2.options[0] = new Option("SQL基本文法");
        select2.options[1] = new Option("MySQL");
    } else if (select1.options[select1.selectedIndex].value == "extra") {
        select2.options[0] = new Option("その他");

    }

    console.log(select2.options[select2.selectedIndex].value);
}
function checkRegister() {
    var input_url = document.registerForm.registerUrl.value;
    var result = input_url.indexOf('https://qiita.com');
    var araay = input_url.split('/');
    var itemId = araay[araay.length - 1];
    var itemIdLength = itemId.length;
    // var option = document.getElementById("selected__smallCategory").value
    // var radios = document.registerForm.registerCategory.value;
    var password = document.registerForm.pass.value;

    // URLのチェック
    if (input_url == "") {
        alert("登録したいURLを入力してください。");
        return false;
    } else if (result == -1) {
        alert('QiitaのURLを入力してください。')
        return false;
    } else if (araay.length != 6) {
        alert('Qiitaの記事のURLを正しく入力してください。')
        return false;
    } else if (itemIdLength != 20) {
        alert('Qiitaの記事のURLを正しく入力してください。')
        return false;
    } else if (option == "") {
        alert('カテゴリーを選択してください。')
        return false;
    } else if (password == "") {
        alert('パスワードを入力してください。')
        return false;
    } else {
        alert('このQiita記事を登録します!!');
        return true;
    }

}


