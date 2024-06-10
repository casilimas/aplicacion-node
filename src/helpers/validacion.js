

const emailValidator = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const nameValidator = (name) => {
    const regex = /^[a-zA-Z\s]{1,50}$/;
    return regex.test(name);
  };

  const idValidator = (id) => {
    const regex = /^[0-9]{1,11}$/;
    return regex.test(id);
  };

  module.exports = {
    emailValidator,
    nameValidator,
    idValidator
  };


  /*
    https://es.stackoverflow.com/search?q=expresiones+regulares+para+email
    Se corrigió linea 4 el error en las expresiones regulares para correos electrónicos para aceptar todos 
    los dominios.
    Adicionalmente, en la línea 9, se modificó la validación para aceptar espacios en los campos nombres y 
    apellidos.
  */
 