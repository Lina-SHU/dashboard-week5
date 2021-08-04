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
  }; // 個人資料


  var person = function person(value) {
    if (value === 'new') {
      accountName.value = "";
      email.value = "";
    } else if (value === 'edit') {
      accountName.value = "Emir Wicks";
      email.value = "emir.wicks@mail.com";
      accountName.setAttribute('readonly', true);
      email.setAttribute('readonly', true);
    }
  }; // verified


  var verified = function verified(value) {
    if (value === 'new') {
      notVerified.classList.add('d-block');
    } else if (value === 'edit') {
      isVerified.classList.add('d-block');
    }
  }; // accessLevel


  var access = function access(value) {
    if (value === 'new') {
      accessLevel.value = "";
    } else if (value === 'edit') {
      accessLevel.value = "admin";
    }
  }; // remove


  var removeSet = function removeSet() {
    accountName.removeAttribute('readonly');
    email.removeAttribute('readonly');
    notVerified.classList.remove('d-block');
    isVerified.classList.remove('d-block');
    isDectivate.classList.remove('d-block');
  };

  /* collapse */
  var collapseBtn = document.querySelector('.collapseBtn');
  var expandMore = document.querySelector('.expandMore');
  var expandLess = document.querySelector('.expandLess');
  collapseBtn.addEventListener('click', function () {
    expandLess.classList.toggle('d-block');
    expandMore.classList.toggle('d-none');
  });
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
    person('new');
    verified('new');
    access('new');
  });
  editModal.addEventListener('click', function () {
    removeSet();
    title('edit');
    person('edit');
    verified('edit');
    access('edit'); // isDectivate

    isDectivate.classList.add('d-block');
  });
}
//# sourceMappingURL=all.js.map
