const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const overlay = $('.overlay')

const miniCart = $('.cart')
const headerCarticon = $('.cart-header-icon')
const closeMiniCartBtn = $('.cart-close-btn')
const preDropdowmBlog = $('.pre-dropdown-product')
const nextDropdowmBlog = $('.next-dropdown-product')
const blogsDropdownList = $('.blogs-dropdown-list')

const openSearch = $('.search-icon')
const blockSearch = $('.search')
const closeSearch = $('.close-search')
const bgSearch = $('.bg-search')

const headerDown = $('.header')

const authenForm = $('.authen-form')
const switchToRegister = $('.switch-register-btn')
const switchToLogin = $('.switch-login-btn')
const closeAuthenBtn = $$('.authen-close-modal')
const authenIcon = $('.authen-icon')
const loginForm = $('.authen-form .login-form')
const registerForm = $('.authen-form .register-form')

authenIcon.onclick = () => {
    overlay.style.display = 'block'
    loginForm.classList.add('active')
}

closeAuthenBtn.forEach(closeBtn => {
    closeBtn.onclick = () => {
        if($('.authen-form .login-form.active')) {
            $('.authen-form .login-form.active').classList.remove('active')
        }
        if($('.authen-form .register-form.active')) {
            $('.authen-form .register-form.active').classList.remove('active')
        }
        overlay.style.display = 'none'
    }
})

switchToRegister.onclick = () => {
    $('.authen-form .login-form.active').classList.remove('active')
    registerForm.classList.add('active')
}

switchToLogin.onclick = () => {
    $('.authen-form .register-form.active').classList.remove('active')
    loginForm.classList.add('active')
}

headerCarticon.onclick = function() {
    miniCart.style.transform = `translateX(0)`
    overlay.style.display = 'block'
}

closeMiniCartBtn.onclick = function () {
    miniCart.style.transform = `translateX(${380}px)`
    overlay.style.display = 'none'
}

preDropdowmBlog.onclick = () => {
    console.log('zz')
    blogsDropdownList.style.transform = `translateY(${255}px)`
}

nextDropdowmBlog.onclick = () => {
    console.log(blogsDropdownList)
    blogsDropdownList.style.transform = `translateY(${-100}px)`
}

openSearch.onclick = () => {
    blockSearch.style.transform = `translateY(${-532}px)`
    headerDown.style.marginTop = `${532}px`
    overlay.style.display = 'block'
}

closeSearch.onclick = () => {
    blockSearch.style.transform = `translateY(${-532}px)`
    headerDown.style.marginTop = `0`
    overlay.style.display = 'none'
}
