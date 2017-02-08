/* eslint import/no-named-as-default: 'off' */
import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
// components
import Login from './containers/authentication/login/Login.react';
import Home from './containers/home/Home.react';
import Profile from './containers/profile/Profile.react';
import Settings from './containers/settings/Settings.react';
import SplashScreen from './containers/splashscreen/SplashScreen.react';
import TabIcon from './components/TabIcon.react';

const scenes = Actions.create(
  <Scene key="root">

    {/* SplashScreen */}
    {/* 加载页 */}
    <Scene
      key="splash" type="reset"
      title="SplashScreen"
      component={SplashScreen}
      hideNavBar
      initial
    />

    {/* TabBar Container */}
    {/* 内容页
        duration={0}：默认指向第一个，key="homeTab"
    */}
    <Scene
      key="rootTabbar"
      type="reset"
      duration={0}
      tabs
      tabBarStyle={{ backgroundColor: '#F1F1F1' }}
    >
      {/* Tab and it's scenes */}
      <Scene key="homeTab" title="Home" icon={TabIcon}>
        <Scene key="home" title="Home" component={Home} initial />  {/* home内容页 */}
        {/* <Scene key="homeSettings" title="Settings" component={Settings} /> */}    {/* Actions.homeSettings();进入的是Setting模块 */}
        {/* <Scene key="homeSettings" title={this.props.title} component={Settings} /> */}
        <Scene key="homeSettings" title="Settings" component={Settings} />
      </Scene>

      {/* Tab and it's scenes */}
      <Scene key="profileTab" title="Profile" icon={TabIcon}>
        <Scene key="profile" title="Profile" component={Profile} initial />  {/* Profile内容页 */}
        <Scene key="profileSettings" title="Settings1" component={Settings} /> {/* Actions.profileSettings();进入的是Setting模块 */}
      </Scene>
    </Scene>

    {/* Authentication */}
    {/* 验证不通过，回到登录页 */}
    <Scene key="authentication" type="reset">
      <Scene key="login" title="Login" component={Login} hideNavBar initial />
    </Scene>

  </Scene>
);
export default scenes;
