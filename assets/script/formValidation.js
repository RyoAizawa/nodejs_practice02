function formValidation() {
    const name = document.getElementsByName("name")[0];
    const kana_name = document.getElementsByName("kana_name")[0];
    const gender = document.getElementsByName("gender");
    const email = document.getElementsByName("email")[0];
    const phone = document.getElementsByName("phone")[0];
    const address = document.getElementsByName("address")[0];
    const workplace = document.getElementsByName("workplace")[0];
    const household = document.getElementsByName("household")[0];

    const nameError = document.getElementById("nameError")
    const kana_nameError = document.getElementById("kana_nameError")
    const genderError = document.getElementById("genderError")
    const emailError = document.getElementById("emailError")
    const phoneError = document.getElementById("phoneError")
    const addressError = document.getElementById("addressError")
    const workplaceError = document.getElementById("workplaceError")
    const householdError = document.getElementById("householdError")
    let error = false;

    // エラーメッセージの初期化
    nameError.innerHTML = "";
    kana_nameError.innerHTML = "";
    genderError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    addressError.innerHTML = "";
    workplaceError.innerHTML = "";
    householdError.innerHTML = "";

    // メールアドレス
    // (半角英数で始まる)＋(半角英数と_と.は入力可)＋(@)＋(半角英数と_と.は入力可)＋(.を挟み1文字以上入力)
    const emailVal = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
    // 電話番号
    const phoneVal = /^0\d{9,10}$/;
    // 世帯数
    const householdVal = /^[0-9]/

    // 名前が入力されているかチェック
    if (name.value === "") {
        nameError.innerHTML = "名前を入力してください。";
        error = true;
    };
    // フリガナが入力されているかチェック
    if (kana_name.value === "") {
        kana_nameError.innerHTML = "フリガナを入力してください。";
        error = true;
    };
    // 性別の選択がされているかチェック
    let checked = false;
    gender.forEach(elem => { if (elem.checked) checked = true; });
    if (!checked) {
        genderError.innerHTML = "性別を選択してください";
        error = true;
    }

    // メールアドレス正しく入力されているかチェック
    if (email.value === "" || !email.value.match(emailVal)) {
        emailError.innerHTML = "メールアドレスを入力してください。";
        error = true;
    }
    // 電話番号が正しく入力されているかチェック
    if (phone.value === "" || !phone.value.match(phoneVal)) {
        phoneError.innerHTML = "電話番号を入力してください。";
        error = true;
    }
    // 住所が入力されているかチェック
    if (address.value === "") {
        addressError.innerHTML = "住所を入力してください。";
        error = true;
    }
    // 都道府県が選択されているかチェック
    for (let i = 0; i < workplace.options.length; i++) {
        if (workplace.options[i].selected) {
            if (workplace.options[i].value === "") {
                workplaceError.innerHTML = "都道府県を選択してください。";
                error = true;
            }
        }
    }
    // 世帯数が入力されているかチェック
    if (household.value === "" || !household.value.match(householdVal)) {
        householdError.innerHTML = "世帯人数を入力してください。";
        error = true;
    }
    if (error) return false;
    return true;
};

export { formValidation }
