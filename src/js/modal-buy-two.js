(() => {
    const refs = {
      openModalBtn: document.querySelector('[modal-buy-open-two]'),
      closeModalBtn: document.querySelector('[modal-buy-close-two]'),
      modal: document.querySelector('[modal-buy-two]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();