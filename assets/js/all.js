"use strict";

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
//# sourceMappingURL=all.js.map
