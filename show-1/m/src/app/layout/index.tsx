/**
 * Create by fay on 4/22/20 8:33 上午
 */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Header from './header'
import Footer from './footer'
import Router, { useRouter } from 'next/router';
import { PATH_PREFIX } from '@/env';

const useStyles = ({ header, footer }: any) => makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      // backgroundColor: theme.palette.common.white
    },
    content: {
      marginTop: header ? 40 : 0,
      marginBottom: footer ? 60 : 0
    }
  }),
)();

export default ({ children, header, footer, back, centerTxt }: any) => {
  const classes = useStyles({ header, footer });
  const { pathname } = useRouter();
  let right = false;
  let rightTxt = '';
  let rightFuc = () => { };
  if (pathname.indexOf('login/email') !== -1) {
    right = true;
    rightTxt = '手机登录';
    let after = Router.router?.asPath?.replace('/m/login/email/', '');
    rightFuc = () => Router.push(PATH_PREFIX + `/login/${after}`)
  } else if (pathname.indexOf('login') !== -1) {
    right = true;
    rightTxt = '邮箱登录';
    let after = Router.router?.asPath?.replace('/m/login/', '');
    rightFuc = () => Router.push(PATH_PREFIX + `/login/email/${after}`)
  } else if (pathname.indexOf('register/email') !== -1) {
    right = true;
    rightTxt = '手机注册';
    rightFuc = () => Router.push(PATH_PREFIX + '/register')
  } else if (pathname.indexOf('register/succ') !== -1) {
    right = false;
  }
  else if (pathname.indexOf('register') !== -1) {
    right = true;
    rightTxt = '邮箱注册';
    rightFuc = () => Router.push(PATH_PREFIX + '/register/email')
  }
  return (
    <div className={classes.root}>
      {header && <Header left={back} right={right} rightTxt={rightTxt} rightFuc={rightFuc} centerTxt={centerTxt} />}
      <div className={classes.content}>
        {children}
      </div>
      {footer && <Footer />}
    </div>
  )
}