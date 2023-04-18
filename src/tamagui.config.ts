// import { shorthands } from "@tamagui/shorthands";
// import { themes, tokens } from "@tamagui/themes";
// import { createFont, createTamagui } from "tamagui";

// export default createTamagui({
//   themes,
//   tokens,
//   shorthands,
//   fonts: {
//     body: createFont({
//       family: "Arial",
//       size: {
//         // You'll want to fill these values in so you can use them
//         // for now, fontSize="$4" will be 14px.
//         // You can define different keys, but `tamagui`
//         // standardizes on 1-15.
//         4: 14,
//       },
//       lineHeight: {
//         4: 16,
//       },
//     }),
//   },
// });

// import { config } from "@tamagui/config";
// import {
//   createTamagui,
//   // setupReactNative
// } from "tamagui"; // or '@tamagui/core'
// // import * as ReactNative from "react-native";

// // if using only @tamagui/core with `react-native` components
// // if using `tamagui` this isn't necessary
// // setupReactNative(ReactNative);

// const appConfig = createTamagui(config);

// export type AppConfig = typeof appConfig;

// declare module "@tamagui/core" {
//   // overrides TamaguiCustomConfig so your custom types
//   // work everywhere you import `tamagui`
//   interface TamaguiCustomConfig extends AppConfig {}
// }

// export default appConfig;

import { config } from "@tamagui/config";

import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createFont, createTamagui } from "tamagui";

// export default createTamagui({
//   themes,
//   tokens,
//   shorthands,
//   fonts: {
//     body: createFont({
//       family: "sans-serif",
//       size: {
//         // You'll want to fill these values in so you can use them
//         // for now, fontSize="$4" will be 14px.
//         // You can define different keys, but `tamagui`
//         // standardizes on 1-15.
//         4: 14,
//       },
//       letterSpacing: {
//         1: 10,
//       },

//       weight: {
//         4: 800,
//       },
//       lineHeight: {
//         4: 16,
//       },
//     }),
//   },
// });

export default createTamagui(config);
