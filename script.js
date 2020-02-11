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

let uuidEdit = document.querySelector('#uuid_edit');
let uuidText = document.querySelector('#uuid_text');
let uuidSave = document.querySelector('#uuid_save');
let uuidDelete = document.querySelector('#uuid_delete');
let uuidCancel = document.querySelector('#uuid_cancel');
uuidSave.style.visibility = 'hidden';
uuidDelete.style.visibility = 'hidden';
uuidCancel.style.visibility = 'hidden';

uuidEdit.addEventListener('click', function() {
  uuidText.setAttribute('contenteditable', true);
  uuidText.style.backgroundColor = 'white';
  uuidEdit.style.visibility = 'hidden';
  uuidSave.style.visibility = 'visible';
  uuidDelete.style.visibility = 'visible';
  uuidCancel.style.visibility = 'visible';
});

uuidSave.addEventListener('click', function() {
  uuidText.setAttribute('contenteditable', false);
  localStorage.setItem('uuid_text', uuidText.innerHTML);
  uuidText.style.backgroundColor = 'lightgrey';
  uuidEdit.style.visibility = 'visible';
  uuidSave.style.visibility = 'hidden';
  uuidDelete.style.visibility = 'hidden';
  uuidCancel.style.visibility = 'hidden';
});

uuidDelete.addEventListener('click', function() {
  uuidText.textContent = '';
});

uuidCancel.addEventListener('click', function() {
  uuidText.setAttribute('contenteditable', false);
  uuidText.textContent = localStorage.uuid_text;
  uuidText.style.backgroundColor = 'lightgrey';
  uuidEdit.style.visibility = 'visible';
  uuidSave.style.visibility = 'hidden';
  uuidDelete.style.visibility = 'hidden';
  uuidCancel.style.visibility = 'hidden';
});
window.onload = function() {
  let x = localStorage.uuid_text;
  if (x && x!==null) {
    uuidText.textContent = x;
  }
}

//edit campaign

let campEdit = document.querySelector('#camp_edit');
let campText = document.querySelector('#camp_text');
let campSave = document.querySelector('#camp_save');
let campDelete = document.querySelector('#camp_delete');
let campCancel = document.querySelector('#camp_cancel');
campSave.style.visibility = 'hidden';
campDelete.style.visibility = 'hidden';
campCancel.style.visibility = 'hidden';

campEdit.addEventListener('click', function() {
  campText.setAttribute('contenteditable', true);
  campText.style.backgroundColor = 'white';
  campEdit.style.visibility = 'hidden';
  campSave.style.visibility = 'visible';
  campDelete.style.visibility = 'visible';
  campCancel.style.visibility = 'visible';
});

campSave.addEventListener('click', function() {
  campText.setAttribute('contenteditable', false);
  localStorage.setItem('camp_text', campText.innerHTML);
  campText.style.backgroundColor = 'lightgrey';
  campEdit.style.visibility = 'visible';
  campSave.style.visibility = 'hidden';
  campDelete.style.visibility = 'hidden';
  campCancel.style.visibility = 'hidden';
});

campDelete.addEventListener('click', function() {
  campText.textContent = '';
});

campCancel.addEventListener('click', function() {
  campText.setAttribute('contenteditable', false);
  campText.textContent = localStorage.camp_text;
  campText.style.backgroundColor = 'lightgrey';
  campEdit.style.visibility = 'visible';
  campSave.style.visibility = 'hidden';
  campDelete.style.visibility = 'hidden';
  campCancel.style.visibility = 'hidden';
});
window.onload = function() {
  let x = localStorage.camp_text;
  if (x && x!==null) {
    campText.textContent = x;
  }
}

//edit description

let descEdit = document.querySelector('#desc_edit');
let descText = document.querySelector('#desc_text');
let descSave = document.querySelector('#desc_save');
let descDelete = document.querySelector('#desc_delete');
let descCancel = document.querySelector('#desc_cancel');
descSave.style.visibility = 'hidden';
descDelete.style.visibility = 'hidden';
descCancel.style.visibility = 'hidden';

descEdit.addEventListener('click', function() {
  descText.setAttribute('contenteditable', true);
  descText.style.backgroundColor = 'white';
  descEdit.style.visibility = 'hidden';
  descSave.style.visibility = 'visible';
  descDelete.style.visibility = 'visible';
  descCancel.style.visibility = 'visible';
});

descSave.addEventListener('click', function() {
  descText.setAttribute('contenteditable', false);
  localStorage.setItem('desc_text', descText.innerHTML);
  descText.style.backgroundColor = 'lightgrey';
  descEdit.style.visibility = 'visible';
  descSave.style.visibility = 'hidden';
  descDelete.style.visibility = 'hidden';
  descCancel.style.visibility = 'hidden';
});

descDelete.addEventListener('click', function() {
  descText.textContent = '';
});

descCancel.addEventListener('click', function() {
  descText.setAttribute('contenteditable', false);
  descText.textContent = localStorage.desc_text;
  descText.style.backgroundColor = 'lightgrey';
  descEdit.style.visibility = 'visible';
  descSave.style.visibility = 'hidden';
  descDelete.style.visibility = 'hidden';
  descCancel.style.visibility = 'hidden';
});
window.onload = function() {
  let x = localStorage.desc_text;
  if (x && x!==null) {
    descText.textContent = x;
  }
}

 // add interior Image

let intImgClick = document.querySelector('.new_int_img');
let mainPage = document.querySelector('.main_page');
let intImgWindow = document.querySelector('.int_image_pop-up');
let uploadBtn = document.querySelector('#upload-btn');
let cancelBtn = document.querySelector('#cancel-btn');

intImgClick.addEventListener('click', function() {
  intImgWindow.style.display = 'block';
  mainPage.classList.toggle('cover');
});

uploadBtn.addEventListener('click', function() {
  intImgWindow.style.display = 'none';
  mainPage.classList.toggle('cover');
});
cancelBtn.addEventListener('click', function() {
  intImgWindow.style.display = 'none';
  mainPage.classList.toggle('cover');
})

// add product Image

// let prodImgPopup = document.querySelector('.new_prod_img');
// prodImgPopup.addEventListener('click', function() {
//   window.open('index_3.html','','width=520,height=550,left=500,top=100');
// })

// add video/animation


// let animVidPopup = document.querySelector('.new_anim');
// animVidPopup.addEventListener('click', function() {
//   window.open('index_4.html','','width=520,height=550,left=500,top=100');
// })
