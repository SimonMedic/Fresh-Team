(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-subscribe-open]'),
    closeModalBtn: document.querySelector('[modal-subscribe-close]'),
    modal: document.querySelector('[modal-subscribe]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
