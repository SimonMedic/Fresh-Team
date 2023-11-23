(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-review-open]'),
    closeModalBtn: document.querySelector('[modal-review-close]'),
    modal: document.querySelector('[modal-review]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
