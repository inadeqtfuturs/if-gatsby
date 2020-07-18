import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Field, Form } from 'react-final-form';
import { Button, Input, Radio } from '@components';
import { requiredField } from '@utils/validation';

const StyledButton = styled(Button)`
  width: 100%;
  max-width: unset;
`;

storiesOf('Final Form Test', module).add('default', () => (
  <div>
    <Form
      onSubmit={async body => console.log('body', body)}
      name="test"
      render={({ handleSubmit, submitting, form }) => {
        const { valid } = form.getState();
        return (
          <div style={{ maxWidth: '768px', margin: '0 auto' }}>
            <Field
              component={Input}
              label="name"
              name="name"
              placeholder="full name"
              disabled={submitting}
              validate={requiredField}
              required
              row
            />
            <Field
              component={Input}
              label="guest"
              name="guest"
              placeholder="full name"
              disabled={submitting}
              row
            />
            <Field
              component={Radio}
              label="this is a..."
              options={[
                {
                  name: `good form`,
                  value: 'good'
                },
                {
                  name: 'not very good form',
                  value: 'bad'
                }
              ]}
              name="acceptance"
              validate={requiredField}
              required
            />
            <StyledButton disabled={!valid} onClick={handleSubmit}>
              Submit
            </StyledButton>
          </div>
        );
      }}
    />
  </div>
));
