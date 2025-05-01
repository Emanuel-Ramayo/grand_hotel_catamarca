const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_985sml3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Consulta enviada, te responderemos pronto');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});