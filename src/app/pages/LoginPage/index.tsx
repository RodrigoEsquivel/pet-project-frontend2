/**
 *
 * LoginPage
 *
 */
import {
  Box,
  ResponsiveContext,
  Form,
  FormField,
  Anchor,
  Image,
  Text,
} from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  StyledTextInput,
  StyledButton,
  StyledH3,
} from '../../components/CommonComponents';
import { useLoginSlice } from './slice';
import logo from './img/logo.png';
import { selectError, selectIsLogged } from './slice/selectors';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any> {}

export function LoginPage(props: Props) {
  const dispatch = useDispatch();
  const { actions } = useLoginSlice();
  const isLogged = useSelector(selectIsLogged);
  const error = useSelector(selectError);
  const onChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setEmail(evt.currentTarget.value));
  };
  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setPassword(evt.currentTarget.value));
  };
  const onSubmit = () => {
    dispatch(actions.fetchingData());
  };

  useEffect(() => {
    if (isLogged) {
      props.history.push('/HomePage'); //cambiar cuando se tenga a donde se redirige.
    }
  }, [isLogged, props.history]);
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Wrapper overflow="auto">
          <Box
            responsive={true}
            fill="vertical"
            align="center"
            pad="xlarge"
            gap="medium"
            justify="center"
            background={{ color: 'accent-3', opacity: 'medium' }}
          >
            <>
              <Box justify="center" align="center" width="large" pad="large">
                <Form>
                  <Box height="xsmall" width="medium">
                    <Image src={logo}></Image>
                  </Box>
                  <Box gap="medium" pad={{ top: 'medium' }}>
                    <FormField margin={{ horizontal: 'xlarge' }}>
                      <StyledTextInput
                        onChange={onChangeEmail}
                        textAlign="center"
                        placeholder="Email"
                        size={''}
                      ></StyledTextInput>
                    </FormField>
                    <FormField margin={{ horizontal: 'xlarge' }}>
                      <StyledTextInput
                        onChange={onChangePassword}
                        textAlign="center"
                        type="password"
                        placeholder="Password"
                        size={''}
                      ></StyledTextInput>
                    </FormField>
                  </Box>
                  <Box pad={'medium'} align="center" justify="start">
                    <Anchor
                      href="/password-recovery"
                      label="Forgot password?"
                      size={''}
                    />
                    <Text>
                      {' '}
                      Don't have an account?{' '}
                      <Anchor href="/sign-up" label="Sign Up" size={''} />
                    </Text>

                    <Box height={''} width={''}>
                      <StyledButton
                        onClick={onSubmit}
                        type="submit"
                        label="Login"
                        size={'medium'}
                        color="#5D8BF4"
                        primary
                      />
                    </Box>
                    <Box>
                      {error && (
                        <StyledH3>Incorrect email and/or password</StyledH3>
                      )}
                    </Box>
                  </Box>
                </Form>
              </Box>
            </>
          </Box>
        </Wrapper>
      )}
    </ResponsiveContext.Consumer>
  );
}
