const zxcvbn = require('zxcvbn');


module.exports = password => {
    
    const score = zxcvbn(password).score;

    if (score < 2) {
      return Promise.reject({
        message: "El password es muy debil.",
        score
      });
    }

    return Promise.resolve({
        message: "El password tiene una fortaleza buena.",
        score
    });
    
  };
  