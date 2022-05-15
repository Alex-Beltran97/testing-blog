function handleSubmit (event) {
  event.preventDefault();
  
  const $btnMailTo = document.getElementById('sendAnEmail');

  const form = new FormData(this);

  if(!form.get('name').trim()||!form.get('email')||!form.get('comment').trim()){
    alert('No puedes dejar campos en blanco')
  }else{
    $btnMailTo.setAttribute('href',
    `mailto:raffriff097@gmail.com?subject=${form.get('name')} - ${form.get('email')}&body=${form.get('comment')}&`);
  
    $btnMailTo.click(); 

    this.reset();
  }
};

const getForm = ()=>{
  const $form = document.getElementById('form');
  $form.addEventListener('submit',handleSubmit);
};
export default getForm;
