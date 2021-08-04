if (document.title === "首頁"){
  const confirmGroup = document.querySelector('.confirmGroup');
  const authorReply = document.querySelector('.author-reply');
  const authorEdit = document.querySelector('.author-edit');
  const assignment = document.querySelector('.assignment-card');
  const replyBtn = document.querySelector('.replyBtn');
  const cancelBtn = document.querySelector('.cancelBtn');

  replyBtn.addEventListener('click', function () {
    confirmGroup.classList.add('d-none');
    assignment.classList.add('hideStyle');
    authorReply.classList.add('d-none');
    authorEdit.classList.add('d-block');
  })

  cancelBtn.addEventListener('click', function () {
    confirmGroup.classList.remove('d-none');
    authorReply.classList.remove('d-none');
    assignment.classList.remove('hideStyle');
    authorEdit.classList.remove('d-block');
  })
} else if (document.title === "管理頁"){
  /* update modal */
  const accountName = document.querySelector('#name');
  const email = document.querySelector('#email');
  const modalTitle = document.querySelector('.modal-title');
  const accessLevel = document.querySelector('.accessLevel');
  const isVerified = document.querySelector('.isVerified');
  const notVerified = document.querySelector('.notVerified');
  const isDectivate = document.querySelector('.isDectivate');
  const newModal = document.querySelector('.newModal');
  const editModal = document.querySelector('.editModal');

  newModal.addEventListener('click', function () {
    removeSet();
    title('new');
    accountName.value = "";
    email.value = "";
    accessLevel.value = "";
    notVerified.classList.add('d-block');
  });

  editModal.addEventListener('click', function(){
    removeSet();
    // 標題名稱
    title('edit');
    // 個人資料
    accountName.value = "Emir Wicks";
    email.value = "emir.wicks@mail.com";
    accountName.classList.add('readonlyStyle');
    email.classList.add('readonlyStyle');
    // verified
    isVerified.classList.add('d-block');
    // Access Level
    accessLevel.value = "admin";
    // isDectivate
    isDectivate.classList.add('d-block');
  })

  // title name
  function title(value) {
    if (value === 'new') {
      modalTitle.textContent = 'New Admin';
    } else if (value === 'edit') {
      modalTitle.textContent = 'Edit Admin';
    }
  }

  // remove
  function removeSet(){
    accountName.classList.remove('readonlyStyle');
    email.classList.remove('readonlyStyle');
    notVerified.classList.remove('d-block');
    isVerified.classList.remove('d-block');
    isDectivate.classList.remove('d-block');
  }
}


