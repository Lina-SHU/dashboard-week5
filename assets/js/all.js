"use strict";

if (document.title === "首頁") {
  var confirmGroup = document.querySelector('.confirmGroup');
  var authorReply = document.querySelector('.author-reply');
  var authorEdit = document.querySelector('.author-edit');
  var assignment = document.querySelector('.assignment-card');
  var replyBtn = document.querySelector('.replyBtn');
  var cancelBtn = document.querySelector('.cancelBtn');
  replyBtn.addEventListener('click', function () {
    confirmGroup.classList.add('d-none');
    assignment.classList.add('hideStyle');
    authorReply.classList.add('d-none');
    authorEdit.classList.add('d-block');
  });
  cancelBtn.addEventListener('click', function () {
    confirmGroup.classList.remove('d-none');
    authorReply.classList.remove('d-none');
    assignment.classList.remove('hideStyle');
    authorEdit.classList.remove('d-block');
  });
} else if (document.title === "管理頁") {
  // title name
  var title = function title(value) {
    if (value === 'new') {
      modalTitle.textContent = 'New Admin';
    } else if (value === 'edit') {
      modalTitle.textContent = 'Edit Admin';
    }
  }; // remove


  var removeSet = function removeSet() {
    accountName.classList.remove('readonlyStyle');
    email.classList.remove('readonlyStyle');
    notVerified.classList.remove('d-block');
    isVerified.classList.remove('d-block');
    isDectivate.classList.remove('d-block');
  };

  /* update modal */
  var accountName = document.querySelector('#name');
  var email = document.querySelector('#email');
  var modalTitle = document.querySelector('.modal-title');
  var accessLevel = document.querySelector('.accessLevel');
  var isVerified = document.querySelector('.isVerified');
  var notVerified = document.querySelector('.notVerified');
  var isDectivate = document.querySelector('.isDectivate');
  var newModal = document.querySelector('.newModal');
  var editModal = document.querySelector('.editModal');
  newModal.addEventListener('click', function () {
    removeSet();
    title('new');
    accountName.value = "";
    email.value = "";
    accessLevel.value = "";
    notVerified.classList.add('d-block');
  });
  editModal.addEventListener('click', function () {
    removeSet(); // 標題名稱

    title('edit'); // 個人資料

    accountName.value = "Emir Wicks";
    email.value = "emir.wicks@mail.com";
    accountName.classList.add('readonlyStyle');
    email.classList.add('readonlyStyle'); // verified

    isVerified.classList.add('d-block'); // Access Level

    accessLevel.value = "admin"; // isDectivate

    isDectivate.classList.add('d-block');
  });
}
//# sourceMappingURL=all.js.map
