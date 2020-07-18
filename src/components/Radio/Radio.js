import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Label as ThemeLabel, Radio as ThemeRadio } from 'theme-ui';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const OptionsWrapper = styled.div`
  flex-basis: 100%;
`;

const StyledLabel = styled(ThemeLabel)(
  ({ theme, ...props }) => ({
    color: props.error && theme.colors.danger
  }),
  variant({
    prop: 'required',
    variants: {
      true: {
        '&::after': {
          content: '"*"',
          color: 'text',
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

function Radio({
  label,
  options,
  required,
  input: { value, onChange },
  meta: { touched, submitError, error: syncError } = {}
}) {
  const error = submitError || syncError;
  const hasError = !!(touched && error);

  return (
    <Wrapper>
      <StyledLabel required={required} size="md" row error={hasError}>
        {label}
      </StyledLabel>
      <OptionsWrapper>
        {options.map(option => (
          <ThemeLabel
            key={option.name}
            style={{ alignItems: 'center', fontSize: '0.875rem' }}
            onChange={() => {
              const nextVal = option.value === value ? undefined : option.value;
              onChange(nextVal);
            }}
          >
            <ThemeRadio name="attendance" value={option.value} />
            {option.name}
          </ThemeLabel>
        ))}
      </OptionsWrapper>
    </Wrapper>
  );
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.object,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  })
};

Radio.defaultProps = {
  required: false,
  meta: undefined,
  input: {
    onChange: () => {},
    value: undefined
  }
};

export default Radio;
