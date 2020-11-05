import {
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  Paper,
  TextField,
  Typography,
  FormHelperText,
  CircularProgress } from "@material-ui/core";
import clsx from 'clsx';
import { gql } from "graphql-request";
import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { IAuthenticationRo } from "../../backend-api/api.credentials";
import { normaliseApiException, rethrow } from "../../backend-api/make-api-exception.helper";
import { IApiException } from "../../backend-api/types/api.exception.interface";
import { ApiContext } from "../../contexts/api.context";
import { OrPromise } from "../../types/or-promise.type";


const useStyles = makeStyles((theme) => ({
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    paddingBottom: theme.spacing(1),
  },
  group: {
    marginBottom: theme.spacing(2),
  },
  text: {
    //
  },
}));


export interface IRegisterFormProps {
  title?: string;
  onSuccess: (result: IAuthenticationRo) => OrPromise<any>;
}


export function RegisterForm(props: IRegisterFormProps) {
  const { title, onSuccess, } = props;
  const { api, me } = useContext(ApiContext);

  const classes = useStyles();

  interface IRegisterVars { name: string; password: string; };
  const [doRegister, result] = useMutation<IAuthenticationRo, IApiException, IRegisterVars>(
    async (arg: IRegisterVars): Promise<IAuthenticationRo> => {
      const { name, password } = arg;
      const result = await api.credentials.signUp({ name, password }).catch(rethrow(normaliseApiException));
      return result;
    },
    { onSuccess, },
  );

  const [
    signupData,
    setSignupData
  ] = useState({
    name: '',
    password: '',
  });

  const err = result.error;
  const isDisabled = result.isLoading || result.isSuccess;

  return (
    <Grid container spacing={2} className={classes.centered}>
      {title && (
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <form onSubmit={(evt) => {
          evt.preventDefault();
          doRegister(signupData);
        }}>
          <Grid className={classes.centered} container spacing={2}>
            <Grid className={clsx(undefined, classes.group)} item xs={12} sm={12}>
              <InputLabel className={classes.label} htmlFor="signup_name">name</InputLabel>
              {/* <Input */}
              <TextField
                id="signup_name"
                disabled={isDisabled}
                inputProps={{ className: classes.text }}
                value={signupData.name}
                error={!!err?.data?.name}
                helperText={err?.data?.name?.join('\n')}
                onChange={(evt) => {
                  const value = evt.target.value;
                  setSignupData((prev) => ({ ...prev, name: value }))
                }}
              />
            </Grid>
            <Grid className={clsx(undefined, classes.group)} item xs={12} sm={12}>
              <InputLabel className={classes.label} htmlFor="signup_password">password</InputLabel>
              {/* <Input */}
              <TextField
                id="signup_password"
                disabled={isDisabled}
                inputProps={{ className: classes.text }}
                type="password"
                value={signupData.password}
                error={!!err?.data?.password}
                helperText={err?.data?.password?.join('\n')}
                onChange={(evt) => {
                  const value = evt.target.value;
                  setSignupData((prev) => ({ ...prev, password: value }))
                }}
              />
            </Grid>
            {err && (
              <Grid className={classes.centered} item xs={12} sm={12}>
                <FormHelperText error>
                  {err.message}
                </FormHelperText>
              </Grid>
            )}
            <Grid item xs={12} sm={12}>
              <Button disabled={isDisabled} type="submit">
                Register
              </Button>
            </Grid>
            {isDisabled && (
              <Grid item xs={12} sm={12}>
                <CircularProgress />
              </Grid>
            )}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
