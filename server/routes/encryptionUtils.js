

// Función para validar la entrada
function validateInput(text) {
  // Expresión regular que solo permite letras minúsculas y espacios
  const regex = /^[a-z\s]+$/;
  if (!regex.test(text)) {
    throw new Error('El texto solo debe contener letras minúsculas y espacios.');
  }
  return text;
}

// Función de encriptación mejorada
function encrypt(text) {
  try {
    text = validateInput(text);
    const encryptionMap = {
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'ober',
      'u': 'ufat'
    };

    return text.split('').map(char => encryptionMap[char] || char).join('');
  } catch (error) {
    throw error;
  }
}

// Función de desencriptación mejorada
function decrypt(text) {
  try {
    validateInput(text);
    const decryptionMap = {
      'ai': 'a',
      'enter': 'e',
      'imes': 'i',
      'ober': 'o',
      'ufat': 'u'
    };

    return text.replace(/ai|enter|imes|ober|ufat/g, match => decryptionMap[match]);
  } catch (error) {
    throw error;
  }
}

// Exportar las funciones
module.exports = { encrypt, decrypt, validateInput };




// function encrypt(text) {
//     let word = text.split(" ");
//     let convertion = word.map((value) => {
//       value = value.split('');
//       return value.map((caracter) => {
//         if (caracter === "e") return "enter";
//         else if (caracter === "i") return "imes";
//         else if (caracter === "a") return "ai";
//         else if (caracter === "o") return "ober";
//         else if (caracter === "u") return "ufat";
//         else return caracter;
//       }).join("");
//     }).join(" ");
//     return convertion;
//   }
  
//   function decrypt(text) {
//     let word = text.split(" ");
//     let convertion = word.map((value) => {
//       value = value.replace(/enter/gi, "e");
//       value = value.replace(/imes/gi, "i");
//       value = value.replace(/ai/gi, "a");
//       value = value.replace(/ober/gi, "o");
//       value = value.replace(/ufat/gi, "u");
//       return value;
//     }).join(" ");
//     return convertion;
//   }
  
//   module.exports = { encrypt, decrypt };