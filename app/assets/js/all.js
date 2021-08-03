const confirmGroup = document.querySelector('.confirmGroup');
const authorReply = document.querySelector('.author-reply');
const authorEdit = document.querySelector('.author-edit');
const assignment = document.querySelector('.assignment-card');
const replyBtn = document.querySelector('.replyBtn');
const cancelBtn = document.querySelector('.cancelBtn');

replyBtn.addEventListener('click', function(){
  confirmGroup.classList.add('d-none');
  assignment.classList.add('hideStyle');
  authorReply.classList.add('d-none');
  authorEdit.classList.add('d-block');
})

cancelBtn.addEventListener('click', function(){
  confirmGroup.classList.remove('d-none');
  authorReply.classList.remove('d-none');
  assignment.classList.remove('hideStyle');
  authorEdit.classList.remove('d-block');
})

