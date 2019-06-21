const addToMenu = () => {
  let menu_select = document.getElementById("menu_item");
  let price = document.getElementById("price").value;
  // console.log(menu_select);
  let raw_image = document.getElementById("my_image").value;
  let done_button = document.getElementById("form_button");
  if (menu_select == "" || price == "" || raw_image == "") return;

  let image = raw_image.substring(12);
  let menu_item = menu_select.options[menu_select.selectedIndex].text;
  // console.log(menu_item);
  let menu_table = document.getElementById("menu_table");
  menu_table.style.visibility = "visible";
  done_button.style.visibility = "visible";
  let row = menu_table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = menu_item;
  cell2.innerHTML = price;
  cell3.innerHTML = `<img src="img/${image}" alt="menu image" width="100"/>`;
  menu_item = "";
  price = "";
};


const addNewMenuOption = () => {
  let new_menu = document.getElementById("new_menu").value;
  let new_price = document.getElementById("new_price").value;
  let new_image = document.getElementById("new_image").files[0];
  //  console.log(URL.createObjectURL(new_image));
  let meal_options = document.getElementById("meal_options");
  if (new_menu == "" || new_price == "" || new_image == "") return;

  // let image = new_image.substring(12);
  let new_div = document.createElement("div");
  new_div.className = "meal-options-item";
  new_div.innerHTML = `<img src="${URL.createObjectURL(
    new_image
  )}" alt="${new_menu}" width="180" height="180"><h3>${new_menu}</h3>
    <h4>(&#8358;${new_price})</h4><div class="edit-delete"><button id="edit-button" onclick="openEditModal()">Edit</button><button id="delete-button" onclick="openDeleteModal()">Delete</button></div>`;
  // new_div.appendChild(new_item);
  meal_options.insertBefore(new_div, meal_options.childNodes[0]);
};

const showSideBar = () => {
  let side_bar = document.getElementById("my_sidebar");
  let main_div = document.getElementById("main_div");
  if (side_bar.style.display != "block") {
    side_bar.style.display = "block";
    side_bar.style.width = "58%";
  } else {
    side_bar.style.display = "none";
    side_bar.style.width = "0";
  }
  main_div.addEventListener("click", () => {
    side_bar.style.display = "none";
    side_bar.style.width = "0";
  });
};





const showNavItems = () => {
  let sub_nav = document.getElementById("sub_nav");
  let my_icon = document.getElementById("my_icon");
  if (sub_nav.className === "nav-sub" && my_icon.className === "icon") {
    sub_nav.className += " responsive";
    my_icon.className += " responsive";
  } else {
    sub_nav.className = "nav-sub";
    my_icon.className = "icon";
  }
};


//new

const hideSideBar = () =>{
  let mainDiv = document.getElementById('main-div');
  let navBar = document.getElementById('navbar');
  let sideBar = document.getElementById('side-b');
  if(mainDiv.style.marginLeft !== '0px' && navBar.style.left !== '0px' && sideBar.style.width !== '0px'){
    mainDiv.style.marginLeft = '0';
    navBar.style.left = '0';
    sideBar.style.width = '0';
  }else {
    mainDiv.style.marginLeft = '17%';
    navBar.style.left = '17%';
    sideBar.style.width = '17%';
  }
}

const hideSideBarMobile = () => {
  let myIcon = document.getElementById('my_icon1');
  let sideBar = document.getElementById('side-b');
  if(sideBar.style.width != ''){
    sideBar.style.width = '';
    myIcon.style.left = '';
  }else {
    sideBar.style.width = '48%';
    myIcon.style.left = '50%';
  }
}

const openLogOutModal = () => {
  let modal = document.getElementById("logout_modal");
  let close_button = document.getElementsByClassName("close")[0];
  let cancel_button = document.getElementById("cancel_logout");
  let logout = document.getElementById("do_logout");
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  cancel_button.onclick = () => {
    modal.style.display = "none";
  };
  logout.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const openNewPostModal = () => {
  let modal = document.getElementById("new_post_modal");
  let close_button = document.getElementsByClassName("close")[1];
  let cancel_button = document.getElementById("cancel_post");
  let view_posts = document.getElementById("view_posts");
  let desc = document.getElementById("desc").value;
  let location = document.getElementById("location").value;
  let price = document.getElementById("price").value;
  let post_item = document.getElementById("post_item");
  let selected_item = post_item.options[post_item.selectedIndex].text;
  let new_image = document.getElementById("my_image").files[0].name
  if(location ==''|| desc ==''|| price == '' || 
    selected_item =='Select...' ||new_image ==''){
    // console.log(desc,price,selected_item,location);
    return;
  }
    modal.style.display = "block";
    close_button.onclick = () => {
      modal.style.display = "none";
    };
    cancel_button.onclick = () => {
      modal.style.display = "none";
    };
    view_posts.onclick = () => {
      modal.style.display = "none";
    };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const changeName = () => {
  let new_image = document.getElementById("my_image").files[0].name;
  let upload_button = document.getElementById("upBtn");
  upload_button.innerHTML = new_image;
};

const openEditModal = () => {
  let modal = document.getElementById("edit_modal");
  let close_button = document.getElementsByClassName("close")[2];
  let cancel_button = document.getElementById("cancel_edit");
  let save_button = document.getElementById("save_edit");
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  cancel_button.onclick = () => {
    modal.style.display = "none";
  };
  save_button.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const openDeleteModal = () => {
  let modal = document.getElementById("delete_modal");
  let close_button = document.getElementById("close_delete");
  let cancel_button = document.getElementById("cancel_delete");
  let delete_button = document.getElementById("do_delete");
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  cancel_button.onclick = () => {
    modal.style.display = "none";
  };
  delete_button.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const openViewPostModal = () => {
  let modal = document.getElementById("post_modal");
  let close_button = document.getElementById("close_post_modal");
  modal.style.display = "block";
  close_button.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

const markAsSold = (id) =>{
  let btns = document.getElementsByClassName('mark-button');
  for (let btn of btns){
    if(btn.id.substring(4) == id && btn.innerHTML == 'Mark as sold'){
      btn.style.background= '#099200';
      btn.innerHTML= 'Sold!';
      break;
    }
    else if(btn.id.substring(4) == id && btn.innerHTML == 'Sold!'){
      btn.style.background= '#022024';
      btn.innerHTML= 'Mark as sold';
      break;
    }
  }
}

const filterCategory = () =>{
  let input, filter, post_items, a, i;
  input = document.getElementById("search_input");
  filter = input.value.toUpperCase();
  post_items = document.getElementsByClassName("post-item");

  for (let post_item of post_items) {
    text = post_item.getElementsByTagName("h3")[0];
    if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
      post_item.style.display = "";
    } else {
      post_item.style.display = "none";
    }
  }
}
