import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Input as ThemeInput, Label as ThemeLabel } from 'theme-ui';

const FieldWrapper = styled('div')(
  {
    display: 'flex',
    marginBottom: '1rem'
  },
  variant({
    prop: 'row',
    variants: {
      true: {
        flexDirection: 'row',
        alignItems: 'stretch'
      },
      false: {
        flexDirection: 'column'
      }
    }
  })
);

const HelpText = styled.small``;

const StyledInput = styled(ThemeInput)`
  ${({ theme, ...props }) => css`
    opacity: ${props.disabled && '0.65'};
    border-color: ${props.error && theme.colors.danger};
    &:focus {
      box-shadow: 0 0 4px 1px ${theme.colors.primary};
      outline: none;
    }
  `}
  ${(variant({
    prop: 'size',
    variants: {
      sm: {
        fontSize: 1,
        p: 1,
        mb: 2
      },
      md: {
        fontSize: 2,
        p: 2,
        mb: 3
      },
      lg: {
        fontSize: 4,
        p: 2,
        mb: 4
      }
    }
  }),
  variant({
    prop: 'row',
    variants: {
      true: {
        width: 'unset',
        flexBasis: '100%'
      },
      false: {
        flexDirection: 'column'
      }
    }
  }))}
`;

const StyledLabel = styled(ThemeLabel)(
  variant({
    prop: 'required',
    variants: {
      true: {
        '&::after': {
          content: '"*"',
          color: 'primary',
          ml: '2px'
        }
      }
    }
  }),
  variant({
    prop: 'size',
    variants: {
      sm: {
        fontSize: 1,
        m: 1
      },
      md: {
        fontSize: 2,
        m: 1
      },
      lg: {
        fontSize: 3,
        m: 2,
        ml: 1
      }
    }
  }),
  variant({
    prop: 'row',
    variants: {
      true: {
        width: 'unset',
        mr: 3,
        flex: '1 0 200px'
      },
      false: {
        flexDirection: 'column'
      }
    }
  })
);

function Input({
  disabled,
  helpText,
  label,
  input,
  meta: { touched, submitError, error: syncError } = {},
  name,
  placeholder,
  required,
  row,
  size
}) {
  const error = submitError || syncError;
  const hasError = !!(touched && error);

  return (
    <FieldWrapper row={row}>
      {label && (
        <StyledLabel htmlFor={name} row={row} required={required} size={size}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        name={name}
        placeholder={placeholder}
        row={row}
        size={size}
        error={hasError}
        disabled={disabled}
        {...input}
      />
      {helpText && <HelpText>{helpText}</HelpText>}
    </FieldWrapper>
  );
}

Input.propTypes = {
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    submitError: PropTypes.bool,
    syncError: PropTypes.bool
  }),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  row: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Input.defaultProps = {
  disabled: false,
  helpText: null,
  label: null,
  input: {},
  meta: {},
  placeholder: null,
  required: false,
  row: false,
  size: 'md'
};

export default Input;
