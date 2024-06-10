

const emailValidator = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@hotmail\.com$/;
    return regex.test(email);
  };

  const nameValidator = (name) => {
    const regex = /^[a-zA-Z]{1,50}$/; // Solo letras, máximo 50 caracteres
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
  