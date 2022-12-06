console.log(document.querySelector('#menu__button--control-arrov-open'));

try {
    /* document.querySelector('#create-an-account').onclick = () => {
        console.log(document.querySelector('#create-an-account'));
    } */


    document.querySelector('#menu__button--control-arrov-open').onclick = () => {
        document.querySelector('.menu__text').classList.add('menu__text--visible');
        document.querySelector('.menu__icon--control-arrov-open').classList.add('menu__icon--control-arrov-open--hide');
        document.querySelector('.menu__icon--control-arrov-close').classList.add('menu__icon--control-arrov-close--visible');
        console.log('Open Aside Menu');
    }
}
catch {
    console.log("#menu__button--control-arrov-open has not find");
}

try {
   /*  document.querySelector('.modal__close--create-an-account').onclick = () => {
        document.querySelector('.modal-container').classList.remove('modal-container--is-visible');
        document.querySelector('.modal--create-an-account').classList.remove('modal-create-an-account--visible');
        console.log('Close Create an account');
    } */

    document.querySelector('#menu__button--control-arrov-close').onclick = () => {
        document.querySelector('.menu__text').classList.remove('menu__text--visible');
        document.querySelector('.menu__icon--control-arrov-open').classList.remove('menu__icon--control-arrov-open--hide');
        document.querySelector('.menu__icon--control-arrov-close').classList.remove('menu__icon--control-arrov-close--visible');
        console.log('Close Aside Menu');
    }

}
catch {
    console.log("#menu__button--control-arrov-close has not find");
}

