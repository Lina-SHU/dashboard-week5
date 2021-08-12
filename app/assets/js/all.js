if (document.title === "Assignment"){
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
} else if (document.title === "Admin"){
  /* collapse */
  const collapseBtn = document.querySelector('.collapseBtn');
  const expandMore = document.querySelector('.expandMore');
  const expandLess = document.querySelector('.expandLess');

  collapseBtn.addEventListener('click', function(){
    expandLess.classList.toggle('d-block');
    expandMore.classList.toggle('d-none');
  })

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
    person('new');
    verified('new');
    access('new');
  });

  editModal.addEventListener('click', function(){
    removeSet();
    title('edit');
    person('edit');
    verified('edit');
    access('edit');
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
  // 個人資料
  function person(value){
    if (value === 'new') {
      accountName.value = "";
      email.value = "";
    } else if (value === 'edit') {
      accountName.value = "Emir Wicks";
      email.value = "emir.wicks@mail.com";
      accountName.setAttribute('readonly', true);
      email.setAttribute('readonly', true);
    }
  }
  // verified
  function verified(value) {
    if (value === 'new') {
      notVerified.classList.add('d-block');
    } else if (value === 'edit') {
      isVerified.classList.add('d-block');
    }
  }

  // accessLevel
  function access(value) {
    if (value === 'new') {
      accessLevel.value = "";
    } else if (value === 'edit') {
      accessLevel.value = "admin";
    }
  }

  // remove
  function removeSet(){
    accountName.removeAttribute('readonly');
    email.removeAttribute('readonly');
    notVerified.classList.remove('d-block');
    isVerified.classList.remove('d-block');
    isDectivate.classList.remove('d-block');
  }
}


