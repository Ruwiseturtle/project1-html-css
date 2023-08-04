(() => {
  // Посилання на backdrop
  const backdrop = document.querySelector('#backdrop');
  // Посилання на модалку та кнопки для Order
  const order = {
    modalOrder: document.querySelector('#modal-order'),
    openOrderBtn: document.querySelector('#order-open'),
    closeOrderBtn: document.querySelector('#order-close'),
  };
  // Посилання на модалку та кнопки для Send
  const send = {
    modalSend: document.querySelector('#modal-send'),
    openSendBtn: document.querySelector('#send-open'),
    closeSendBtn: document.querySelector('#send-close'),
  };

  // слухачі для кнопок Order
  order.openOrderBtn.addEventListener('click', toggleOrder);
  order.closeOrderBtn.addEventListener('click', toggleOrder);
  // слухачі для кнопок Send
  send.openSendBtn.addEventListener('click', toggleSend);
  send.closeSendBtn.addEventListener('click', toggleSend);

  // toggle для Backdrop та блокування скрола у body
  function toggleBackdrop() {
    document.body.classList.toggle('modal-open');
    backdrop.classList.toggle('is-hidden');
  }

  // toggle для Order
  function toggleOrder() {
    toggleBackdrop();
    order.modalOrder.classList.toggle('is-hidden');
  }
  // toggle для Send
  function toggleSend() {
    toggleBackdrop();
    send.modalSend.classList.toggle('is-hidden');
  }
})();
