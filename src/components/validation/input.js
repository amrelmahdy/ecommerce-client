import React from 'react';
import _isString from 'lodash/isString';
import _isEmpty from 'lodash/isEmpty'
import _isEqual from 'lodash/isEqual'

import { useTranslation } from 'react-i18next';
import validator from 'validator';
import { placeholder } from 'i18n-js';

export default ({ value, setValue, label, validations, validated, placeholder = "", ...props }) => {
    const { t } = useTranslation();

    const isValid = () => {
        let valid = true;
        validations.forEach(element => {
            if (_isEqual(element, validator.isEmpty)) {
                if (_isEmpty(value)) {
                    valid = false;
                } else {
                    valid = true;
                }
            } else {
                valid = element?.(value)
            }

        });

        return valid;
    }

    console.log("isValid", isValid())

    return <div className="form-group custom-validation" >
        <label>{t(label)} <span className="required">*</span></label>
        <input type="text" className="form-control" value={value} style={{ border: validated && !isValid() ?  '1px solid #e02b27' : '1px solid #dfdfdf' }} onChange={value => setValue?.(value)} placeholder={t(placeholder)} required {...props} />
        {/* <span style={{ visibility: validated && !isValid() ? 'visible' : 'hidden' }} className='helper-text'>This field is not valid</span> */}
    </div>
}

