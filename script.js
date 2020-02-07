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
uuidEdit.addEventListener('click', function() {
  uuidText.setAttribute('contenteditable', true);
  uuidText.style.backgroundColor = 'white';
});

let uuidSave = document.querySelector('#uuid_save');
uuidSave.addEventListener('click', function() {
  uuidText.setAttribute('contenteditable', false);
  localStorage.setItem('uuid_text', uuidText.innerHTML);
  uuidText.style.backgroundColor = 'lightgrey';
});

let uuidDelete = document.querySelector('#uuid_delete');
uuidDelete.addEventListener('click', function() {
  uuidText.setAttribute('contenteditable', false);
  uuidText.textContent = '';
  uuidText.style.backgroundColor = 'lightgrey';
});

//edit campaign

let campEdit = document.querySelector('#camp_edit');
let campText = document.querySelector('#camp_text');
campEdit.addEventListener('click', function() {
  campText.setAttribute('contenteditable', true);
  campText.style.backgroundColor = 'white';
});

let campSave = document.querySelector('#camp_save');
campSave.addEventListener('click', function() {
  campText.setAttribute('contenteditable', false);
  localStorage.setItem('camp_text', campText.innerHTML);
  campText.style.backgroundColor = 'lightgrey';
});

let campDelete = document.querySelector('#camp_delete');
campDelete.addEventListener('click', function() {
  campText.setAttribute('contenteditable', false);
  campText.textContent = '';
  campText.style.backgroundColor = 'lightgrey';
});

//edit description

let descEdit = document.querySelector('#desc_edit');
let descText = document.querySelector('#desc_text');
descEdit.addEventListener('click', function() {
  descText.setAttribute('contenteditable', true);
  descText.style.backgroundColor = 'white';
});

let descSave = document.querySelector('#desc_save');
descSave.addEventListener('click', function() {
  descText.setAttribute('contenteditable', false);
  localStorage.setItem('desc_text', descText.innerHTML);
  descText.style.backgroundColor = 'lightgrey';
});

let descDelete = document.querySelector('#desc_delete');
descDelete.addEventListener('click', function() {
  descText.setAttribute('contenteditable', false);
  descText.textContent = '';
  descText.style.backgroundColor = 'lightgrey';
});

 // add interior Image

(function add_interior_image() {
  let intImgClick = document.querySelector('.new_int_img');
  intImgClick.addEventListener('click', function() {
    interiorImageUpload();
  });
})();
let intImgWindow;
let mainPage = document.querySelector('body');
function interiorImageUpload() {
  intImgWindow = window.open('index_intImage.html','','width=520,height=850,left=500,top=0');
};
function mainDisable() {
  if (intImgWindow && !intImgWindow.closed) {
    intImgWindow.focus();
    mainPage.addEventListener('click', function() {
      intImgWindow.focus();
    });
    mainPage.classList.add('cover');
  } else if (intImgWindow.closed) {
    mainPage.classList.remove('cover');

  };
};
function mainEnable () {
  
}
// add product Image

let prodImgPopup = document.querySelector('.new_prod_img');
prodImgPopup.addEventListener('click', function() {
  window.open('index_3.html','','width=520,height=550,left=500,top=100');
})

// add video/animation


let animVidPopup = document.querySelector('.new_anim');
animVidPopup.addEventListener('click', function() {
  window.open('index_4.html','','width=520,height=550,left=500,top=100');
})
