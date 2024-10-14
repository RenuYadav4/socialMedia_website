// sidebar
const menuItems = document.querySelectorAll('.menu-item');

// messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.getElementById('message-search');

// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // remove previous
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').
                style.display = 'none';
        } else {
            document.querySelector('.notification-popup').
                style.display = 'block';
            document.querySelector('#notifications .notification-count').
                style.display = 'none';
        }
    })
})

// messages

// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// message card will be highlighted on clicking
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// Theme Display customization

// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// closes modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// remove active for fonts
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

// font
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        // change font size
        document.querySelector('html').style.fontSize = fontSize;
    })

})


// remove active for color
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primary = 252;
        } else if (color.classList.contains('color-2')) {
            primary = 52;
        } else if (color.classList.contains('color-3')) {
            primary = 352;
        } else if (color.classList.contains('color-4')) {
            primary = 152;
        } else if (color.classList.contains('color-5')) {
            primary = 282;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary);
    })
})


// theme background
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// ChangeBackground
const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',()=>{
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
window.location.reload();

});
Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});


// like
const heartIcons = document.querySelectorAll('.heart-icon');

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', () => {
        heartIcon.querySelector('i').classList.toggle('red');
    });
});

