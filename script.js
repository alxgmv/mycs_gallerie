// image enlargment

let bigImage = document.querySelector('.img-left-block');
let info = document.querySelector('.info_area');
bigImage.addEventListener('mouseenter', function() {
  info.style.display = 'none';
});
bigImage.addEventListener('mouseleave', function() {
  setTimeout(function() {
    info.style.display = 'block';
  }, 300);
});

// edit UUID

let uuid_edit = document.querySelector('#uuid_edit');
let uuid_text = document.querySelector('#uuid_text');
uuid_edit.addEventListener('click', function() {
  uuid_text.setAttribute('contenteditable', true);
  uuid_text.style.backgroundColor = 'white';
});

let uuid_save = document.querySelector('#uuid_save');
uuid_save.addEventListener('click', function() {
  uuid_text.setAttribute('contenteditable', false);
  localStorage.setItem('uuid_text', uuid_text.innerHTML);
  uuid_text.style.backgroundColor = 'lightgrey';
});

let uuid_delete = document.querySelector('#uuid_delete');
uuid_delete.addEventListener('click', function() {
  uuid_text.setAttribute('contenteditable', false);
  uuid_text.textContent = '';
  uuid_text.style.backgroundColor = 'lightgrey';
});

//edit campaign

let camp_edit = document.querySelector('#camp_edit');
let camp_text = document.querySelector('#camp_text');
camp_edit.addEventListener('click', function() {
  camp_text.setAttribute('contenteditable', true);
  camp_text.style.backgroundColor = 'white';
});

let camp_save = document.querySelector('#camp_save');
camp_save.addEventListener('click', function() {
  camp_text.setAttribute('contenteditable', false);
  localStorage.setItem('camp_text', camp_text.innerHTML);
  camp_text.style.backgroundColor = 'lightgrey';
});

let camp_delete = document.querySelector('#camp_delete');
camp_delete.addEventListener('click', function() {
  camp_text.setAttribute('contenteditable', false);
  camp_text.textContent = '';
  camp_text.style.backgroundColor = 'lightgrey';
});

//edit description

let desc_edit = document.querySelector('#desc_edit');
let desc_text = document.querySelector('#desc_text');
desc_edit.addEventListener('click', function() {
  desc_text.setAttribute('contenteditable', true);
  desc_text.style.backgroundColor = 'white';
});

let desc_save = document.querySelector('#desc_save');
desc_save.addEventListener('click', function() {
  desc_text.setAttribute('contenteditable', false);
  localStorage.setItem('desc_text', desc_text.innerHTML);
  desc_text.style.backgroundColor = 'lightgrey';
});

let desc_delete = document.querySelector('#desc_delete');
desc_delete.addEventListener('click', function() {
  desc_text.setAttribute('contenteditable', false);
  desc_text.textContent = '';
  desc_text.style.backgroundColor = 'lightgrey';
});

let intImgPopup = document.querySelector('.new_int_img');

intImgPopup.addEventListener('click', function() {
  window.open('index_2.html','','width=520,height=550,left=500,top=100');
})
