
console.log(document.querySelector('#btn1'));

try {
    /* document.querySelector('#create-an-account').onclick = () => {
        console.log(document.querySelector('#create-an-account'));
    } */


    document.querySelector('#create-an-account').onclick = () => {
        document.querySelector('.modal-container').classList.add('modal-container--is-visible');
        document.querySelector('.modal--create-an-account').classList.add('modal-create-an-account--visible');
        console.log('Open Create an account');
    }

    document.querySelector('.modal__close--create-an-account').onclick = () => {
             document.querySelector('.modal-container').classList.remove('modal-container--is-visible');
             document.querySelector('.modal--create-an-account').classList.remove('modal-create-an-account--visible');
             console.log('Close Create an account');
         } 

}
catch {
    console.log("#create-an-account has doesn`t find");
}











try {
    /* document.querySelector('#create-an-account').onclick = () => {
        console.log(document.querySelector('#create-an-account'));
    } */


    document.querySelector('#profile').onclick = () => {
        document.querySelector('.modal-container').classList.add('modal-container--is-visible');
        document.querySelector('.modal--profile').classList.add('modal-profile--visible');
        console.log('Open Profile');
    }

    document.querySelector('.modal__close-profile').onclick = () => {
        document.querySelector('.modal-container').classList.remove('modal-container--is-visible');
        document.querySelector('.modal--profile').classList.remove('modal-profile--visible');
        console.log('Close Profile');
    }
}
catch {
    console.log("#profile has doesn`t find");
}


console.log("test");