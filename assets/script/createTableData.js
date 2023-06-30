
function createTableData(personasObj) {
    // テーブルのユーザーデータ出力領域を取得
    const clientList = document.querySelector("tbody");
    // リストは都度初期化
    while(clientList.firstChild) {
        clientList.firstChild.remove()
    }
    // 渡されたオブジェクトの分だけリストデータの作成
    personasObj.map((person) => {
        // テーブルデータの要素作成
        const tableRow          = document.createElement("tr")
        const clientId          = document.createElement("td")
        const clientName        = document.createElement("td")
        const clientKanaName    = document.createElement("td")
        const clientGender      = document.createElement("td")
        const clientMail        = document.createElement("td")
        const clientPhone       = document.createElement("td")
        const clientAddress     = document.createElement("td")
        const clientWorkPlace   = document.createElement("td")
        const clientHouseHold   = document.createElement("td")
        // 更新ボタンの要素作成
        const updateBtnTd       = document.createElement("td")
        const updateBtnLink     = document.createElement("a")
        const updateBtn         = document.createElement("button")
        // 削除ボタンの要素作成
        const deleteBtnTd       = document.createElement("td")
        const deleteBtnLink     = document.createElement("a")
        const deleteBtn         = document.createElement("button")
        // ユーザーデータから値を入れる
        clientId.innerHTML          = person["id"]
        clientName.innerHTML        = person["name"]
        clientKanaName.innerHTML    = person["kana_name"]
        clientGender.innerHTML      = person["gender"]
        clientMail.innerHTML        = person["email"]
        clientPhone.innerHTML       = person["phone"]
        clientAddress.innerHTML     = person["address"]
        clientWorkPlace.innerHTML   = person["workplace"]
        clientHouseHold.innerHTML   = person["household"]
        updateBtn.innerHTML         = "更新"
        deleteBtn.innerHTML         = "削除"
        // 更新ボタンの作成
        updateBtnLink.setAttribute("href", `/edit/${clientId.innerHTML}`)
        updateBtnLink.appendChild(updateBtn)
        updateBtnTd.appendChild(updateBtnLink)
        // 削除ボタンの作成
        deleteBtnLink.setAttribute("href", `/delete/${clientId.innerHTML}`)
        deleteBtnLink.appendChild(deleteBtn)
        deleteBtnTd.appendChild(deleteBtnLink)

        // テーブルの列へデータの追加
        tableRow.appendChild(clientId);
        tableRow.appendChild(clientName);
        tableRow.appendChild(clientKanaName);
        tableRow.appendChild(clientGender);
        tableRow.appendChild(clientMail);
        tableRow.appendChild(clientPhone);
        tableRow.appendChild(clientAddress);
        tableRow.appendChild(clientWorkPlace);
        tableRow.appendChild(clientHouseHold);
        tableRow.appendChild(updateBtnTd);
        tableRow.appendChild(deleteBtnTd);

        // テーブルへ列の追加
        clientList.appendChild(tableRow);
    });
}

export { createTableData }
