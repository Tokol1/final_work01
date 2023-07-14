
// クラス変更
window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

//safari対策
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};