const btnUp = {
  btn: document.querySelector('.go-top'),
  show() {
    this.btn.classList.add('show');
  },
  hide() {
    this.btn.classList.remove('show');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        this.show();
      } else {
        this.hide();
      }
    });
    document.querySelector('.go-top').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
