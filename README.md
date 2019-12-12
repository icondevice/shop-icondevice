## Shopping Catalogue (Android only)<a href="https://icondevice.com"><img align="left" src="https://i.imgur.com/VEnOIUn.png" width="100px"></a>

---

React native app built with [`react-native-firebase`](https://github.com/invertase/react-native-firebase) and [`mobx-state-tree`](https://github.com/mobxjs/mobx-state-tree)

---

### Getting Started

> Assuming you are familiar with Firebase structure & setup.


#### 1) Add `Google Services` files 

- 1.1) **[Android]** Follow the `manually add firebase` to your app instructions [here](https://firebase.google.com/docs/android/setup#manually_add_firebase) to generate your `google-services.json` file if you haven't done so already - use the package name generated previously as your `Android package name`.
- 1.2) **[Android]** Place this file in the `android/app/` directory of your project.


#### 2) Start your app

- 2.1) Start the react native packager, run `npm start` from the root of your project.
- 2.2) **[Android]** If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run `npm run android` from the root of your project.

If all has gone well you'll see an app screen like the one below (after login).

## Screenshots

![preview](https://github.com/icondevice/shop-icondevice/blob/master/assets/demo.gif)

### License

- See [LICENSE](/LICENSE)
