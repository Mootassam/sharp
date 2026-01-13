import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import FormErrors from './FormErrors';
import Message from 'src/view/shared/message';

export function InputFormItem(props) {
  const {
    label,
    description,
    name,
    hint,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    externalErrorMessage,
    disabled,
    endAdornment,
    className
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();

  if (externalErrorMessage) {
    Message.error(externalErrorMessage);
  }
  
  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,  
  );

  return (
    <>
      <style>
        {`
          .input-form-item {
            margin-bottom: 18px;
            width: 100%;
          }
          
          .input-label {
            display: block;
            font-size: 0.9rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 6px;
            line-height: 1.3;
          }
          
          .input-label.required:after {
            content: ' *';
            color: #ff416c;
          }
          
          .input-wrapper {
            position: relative;
            width: 100%;
          }
          
          .input-field {
            width: 100%;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            padding: 11px 14px;
            font-size: 0.95rem;
            color: white;
            transition: all 0.2s ease;
            outline: none;
            font-family: inherit;
          }
          
          .input-field:focus {
            border-color: #00c6ff;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 2px rgba(0, 198, 255, 0.1);
          }
          
          .input-field.__danger {
            border-color: #ff416c;
            background: rgba(255, 65, 108, 0.05);
          }
          
          .input-field.__danger:focus {
            border-color: #ff416c;
            box-shadow: 0 0 0 2px rgba(255, 65, 108, 0.1);
          }
          
          .input-field:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            background: rgba(255, 255, 255, 0.04);
          }
          
          .input-field::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }
          
          .input-with-adornment {
            display: flex;
            align-items: center;
          }
          
          .input-field.has-adornment {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: none;
            flex: 1;
          }
          
          .input-adornment {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-left: none;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            padding: 11px 14px;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 44px;
          }
          
          .input-adornment.__danger {
            border-color: #ff416c;
            background: rgba(255, 65, 108, 0.05);
          }
          
          .error-message {
            color: #ff416c;
            font-size: 0.8rem;
            margin-top: 5px;
            display: block;
            line-height: 1.3;
          }
          
          .input-hint {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.8rem;
            margin-top: 5px;
            display: block;
            line-height: 1.3;
          }
          
          .input-description {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.85rem;
            margin-bottom: 8px;
            line-height: 1.3;
          }
        `}
      </style>

      <div className="input-form-item">
        {Boolean(label) && (
          <label
            className={`input-label ${required ? 'required' : ''}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        
        {description && (
          <div className="input-description">{description}</div>
        )}
        
        <div className="input-wrapper">
          {endAdornment ? (
            <div className="input-with-adornment">
              <input
                className={`input-field has-adornment ${
                  errorMessage ? '__danger' : ''
                } ${className || ''}`}
                id={name}
                name={name}
                type={type}
                ref={register}
                onChange={(event) => {
                  props.onChange && props.onChange(event.target.value);
                }}
                onBlur={(event) => {
                  props.onBlur && props.onBlur(event);
                }}
                placeholder={placeholder || undefined}
                autoFocus={autoFocus || undefined}
                autoComplete={autoComplete || undefined}
                disabled={disabled}
              />
              <div className={`input-adornment ${errorMessage ? '__danger' : ''}`}>
                {endAdornment}
              </div>
            </div>
          ) : (
            <input
              className={`input-field ${errorMessage ? '__danger' : ''} ${className || ''}`}
              id={name}
              name={name}
              type={type}
              ref={register}
              onChange={(event) => {
                props.onChange && props.onChange(event.target.value);
              }}
              onBlur={(event) => {
                props.onBlur && props.onBlur(event);
              }}
              placeholder={placeholder || undefined}
              autoFocus={autoFocus || undefined}
              autoComplete={autoComplete || undefined}
              disabled={disabled}
            />
          )}
        </div>
        
        {errorMessage && (
          <span className="error-message">{errorMessage}</span>
        )}
        
        {Boolean(hint) && !errorMessage && (
          <span className="input-hint">{hint}</span>
        )}
      </div>
    </>
  );
}

InputFormItem.defaultProps = {
  type: 'text',
  required: false,
};

InputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  endAdornment: PropTypes.any,
  onChange: PropTypes.any,
  className: PropTypes.string,
};

export default InputFormItem;