(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-buy-open]'),
    closeModalBtn: document.querySelector('[modal-buy-close]'),
    modal: document.querySelector('[modal-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
