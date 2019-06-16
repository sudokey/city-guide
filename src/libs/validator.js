import validator from 'validator';
import { FIELD_ERROR_REQUIRED, FIELD_ERROR_FORMAT } from './constants';

export default class Validator {
  static validate(data, rules) {
    const fields = Object.keys(data);
    const errors = {};

    fields.forEach((field) => {
      const rule = rules[field];

      if (!rule) {
        return;
      }

      if (Array.isArray(rule) && typeof rule[0] === 'function') {
        const err = rule.map(r => r(data[field])).filter(i => Boolean(i));
        errors[field] = err.length ? err[0] : null;
      } else if (Array.isArray(rule) && Array.isArray(rule[0])) {
        errors[field] = data[field].map((value) => {
          const err = rule[0].map(r => r(value).filter(i => Boolean(i)));
          return err.length ? err[0] : null;
        });
      } else if (Array.isArray(rule) && typeof rule[0] === 'object') {
        errors[field] = data[field].map((obj) => {
          const keys = Object.keys(rule[0]);
          const errors = {};
          keys.forEach((key) => {
            const err = rule[0][key].map(r => r(obj[key])).filter(i => Boolean(i));
            errors[key] = err.length ? err[0] : null;
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

  static getValidatorFunctions() {
    return {
      reuqired: (val) => {
        if (!val || !val.length) {
          return FIELD_ERROR_REQUIRED;
        }
        return null;
      },
      url: (val) => {
        if (val) {
          return validator.isURL(val) ? null : FIELD_ERROR_FORMAT;
        }
        return null;
      },
    };
  }

  static validateCategory(categoryData) {
    const { reuqired, url } = Validator.getValidatorFunctions();
    return Validator.validate(categoryData, {
      name: [reuqired],
      iconUrl: [reuqired, url],
    });
  }
}
