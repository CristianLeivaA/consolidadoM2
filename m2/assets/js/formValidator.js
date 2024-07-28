var btnEnviar = document.getElementById('btn-enviar');

document.getElementById('contactForm').addEventListener("submit", (e)  => {

  e.preventDefault();
  const correoElectronico = document.getElementById('email-content');
  const nombrePersona = document.getElementById('name-content');
  const mensaje = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const seleccionNecesitas= document.getElementById('selec');
  const selecError = document.getElementById('selecError');
  const textarea = document.getElementById('msj');
  const msjError = document.getElementById('mjsError');

  const correoElectronicoValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  

  nameError.textContent = '';
  emailError.textContent = '';
  mensaje.textContent = '';
  selecError.textContent = '';
  msjError.textContent = '';
1 

  



  if (correoElectronico.value.trim() === "") {
    emailError.textContent = "Por favor, escribe tu correo electrónico.";
    correoElectronico.focus();
    return false;
  }
  if (!correoElectronicoValido(correoElectronico.value)) {
    emailError.textContent = "Por favor, escribe un correo electrónico válido";
    correoElectronico.focus();
    return false;
  }
    
  if (nombrePersona.value.trim() === "") {
    nameError.textContent = "Por favor, escribe tu nombre.";
    nombrePersona.focus();
    return false;
  }

  if (seleccionNecesitas.value === "") {
    selecError.textContent = "Selecciones una Opcion.";
    seleccionNecesitas.focus();
    return false;
  }
  if (textarea.value.trim() === "") {
    msjError.textContent = "Escribra el mensaje.";
    textarea.focus();
    return false;
  }

  document.getElementById('contactForm').reset();
  mensaje.textContent = 'Mensaje Enviado correctamente, nos pondremos en contacto luego.';
  return true; // Simular envío de formulario
  
});





