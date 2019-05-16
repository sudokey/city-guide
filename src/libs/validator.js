export default class Validator {
  static validate(data, rules) {
    const fields = Object.keys(data);
    const errors = {};

    fields.forEach((field) => {
      const rule = rules[field];

      if (!rule) {
        return;
      }

      if (typeof rule === 'function') {
        errors[field] = rule(data[field]);
      } else if (Array.isArray(rule) && typeof rule[0] === 'function') {
        errors[field] = data[field].map(value => rule[0](value));
      } else if (Array.isArray(rule) && typeof rule[0] === 'object') {
        errors[field] = data[field].map((obj) => {
          const keys = Object.keys(rule[0]);
          const errors = {};
          keys.forEach((key) => {
            errors[key] = rule[0][key](obj[key]);
          });
          return errors;
        });
      }
    });

    return {
      errors,
      isValid: Validator.isValid(errors),
    };
  }

  static isValid(errors) {
    const fields = Object.values(errors);

    for (let i = 0; i < fields.length; i++) {
      if (Array.isArray(fields[i]) && typeof fields[i][0] === 'object') {
        for (let j = 0; j < fields[i].length; j++) {
          if ((Object.values(fields[i][j])).filter(d => !!d).length) {
            return false;
          }
        }
      } else if (Array.isArray(fields[i])) {
        if (fields[i].filter(d => !!d).length) {
          return false;
        }
      } else if (fields[i]) {
        return false;
      }
    }

    return true;
  }
}
