# [1.7.1] 2/3/2021 14:45:21 

# Added

- Fix BFF service constants.

# [1.7.0] 3/1/2021, 1:10:21 AM 

# Added

- Added Dockerfile.
- Added dockerignore.

# [1.6.4] 26/2/2021 21:38:10 

# Added, Fix

- Added toggle menu action.
- Responsive design.
- Fix some tests.
- Rename some interfaces with `I` prefix.
- Code lint and format.
- Added utils folder with `useWindowSize` hook.
- Added time utils, to calculate elapsed time to show humanly.

# [1.6.3] 26/2/2021 16:52:59

# Added

- Added zoom to post content image.
- Format code.

# [1.6.2] 26/2/2021 13:02:31

# Added, Fix

- Added `redux-persist` library to persist data in store.
- Added `react-loading-skeleton` library to show loading indicators correctly to improve UX.
- Added actions to indicate fetching and error status.

# [1.6.1] 

# Added, Fix

- Added `react-graceful-image` library to process image placeholders.
- Added implementation of `Image` component from `react-graceful-image`.
- Fix reducer issue to prevent handle bad data from bff.
- Format code.

# [1.6.0] 19/2/2021 15:15:59

# Added

- Husky refactor.
- Added `redux-thunk` library to allow promises on reducer.
- Added `redux-thunk` configuration on `redux` store.
- Refactor of constants folder.
- Added `dal` folder (Data access layer).
- Refactor Types, now its consuming an internal BFF (Backend for frontend), with formated data.

# [1.5.8] 19/2/2021 11:54:22 

# Added

- Dismiss all action.
- Added unit test to test block prop of `Button` component.
- Added style to `Button` component to remove default outlined.

# [1.5.7] 18/2/2021 16:50:28 

# Added, Fixed

- Fix general styles.
- Added `loading` mode to `PostImage` component.
- Added a few `TODOS` and comments.
- Added function to get most relevant image to show on `PostContent`.

# [1.5.6] 18/2/2021 15:42:07 

# Added, Fixed

- Added `block` prop to `Button` component.
- Added styles and behavior to `PostContent`.
- Added to `PostImage` component, different sizes.
- Fix general styles.

# [1.5.5] 18/2/2021 12:42:01 

# Added, Fixed

- Added custom types to `IRedditTop50Item` to mark item as read or dismissed.
- Added read and dismiss actions.
- Changed title and description of project in `index.html`.
- Fix Reddit container selector, to include read and dismiss attr.
- Little refactor of reducer types.

# [1.5.4] 17/2/2021 21:55:09 

# Added

- Added postinstall script in `package.json`.

# [1.5.3] 17/2/2021 21:44:32 

# Added

- Added `husky` dependence, to run tests before commit.
- Added `husky` configuration in `package.json`.

# [1.5.2] 17/2/2021 21:43:09 

# Fixed

- Added `Chevron Right` image asset.
- Added `Badge` component.
- Added `Text` component with font size and color variations.
- Added `PostImage` component.
- Added `PostImageModal` component.
- Fix `PostContent` storybook menu access.
- Fix scrollbar styles.
- Fix tests.
- Renamed `MenuItem` to `PostItem`.
- Style improvements.
- Sorting of import/exports of `index.ts` on components.

# [1.5.1] 17/2/2021 16:39:11 

## Added

- Added `Button` component.
- Added styles to `Menu` component.
- Added styles to `Title` component.
- Implement `Menu` with own props on `Reddit Container`.
- Format code.

# [1.5.0] 17/2/2021 15:49:47 

## Fix

- Changed testing suite, now using `@testing-library`.
- Refactor components test.

# [1.4.5] 17/2/2021 15:19:13 

## Added, Fix

- Added `PostContent` component.
- Fix `index.ts` on components root, to export all components.
- Added styles dependencies using @emotion.
    - @emotion/react: 11.1.5.
    - @emotion/styled: 11.1.5.

# [1.4.4] 16/2/2021 22:45:29 

## Added

- Added `Menu` and `Menu Item` components.

# [1.4.3] 16/2/2021 21:44:36

## Added, Fixed

- Added selectors on Reddit container.
- Modified Reddit reducer stored data.
- Added `visitedList` to Reddit reducer.
- Exported root reducer type.

# [1.4.2] 16/2/2021 21:44:13 

## Added, Fixed

- Added fetch action call on Reddit container mount.
- Fix typos.
- Fix returning state error on Reddit reducer.
- Removed Hello World in Reddit container.
- Format and lint code.

# [1.4.1] 16/2/2021 21:44:13 

## Added

- Added `dot-prop-immutable` dependency.
- Added root `constants`.
- Added Reddit service. 
- Added `actions`, `action types`, `constants`, `reducer` files to Reddit container.
- Added Reddit response types generated by `http://json2ts.com/` from example data.
- Added Reddit reducer to root reducer.
- Refactor application constants.
- Format and lint code.

# [1.4.0] 16/2/2021 20:33:03

## Added, Docs

- Added testing suite with Jest and Enzyme.
- Added in README.md, Test and Getting Started section.
- Added test file for Title Component.
- Added in `package.json`, jest configuration and test `scripts`.
- Added setup testing file.

# [1.3.1] 16/2/2021 20:01:26 

## Removed

- Removed default react test suite.

# [1.3.0] 16/2/2021 19:25:35 

## Added

- Added Storybook.

# [1.2.2] 16/2/2021 18:57:26 

## Added, Fix

- Added components folder.
- Added `Title` component.
- Fix changelog version dates.

# [1.2.1] 16/2/2021 18:48:54

## Added

- Added `Reddit` container.

# [1.2.0] 16/2/2021 18:33:38

## Added

- Added `react-redux` types.
- Added `createStore` of redux.
- Added root reducer.
- Added redux dev tools configuration.

# [1.1.3] 16/2/2021 18:32:07 

## Added

- Added `redux` dependencies.
 - redux: 4.0.5.
 - react-redux: 7.2.2.
 - redux-devtools: 3.7.0.

# [1.1.2] 16/2/2021 18:28:08 

## Docs

- Added introduction to `README.md`.

# [1.1.1] 16/2/2021 18:21:55 

## Added

- Installed prettier and eslint to project with `airbnb` configuration.
- Created `eslintrc.js`.
- Added `scripts` to `package.json`, to run lint and prettier.

# [1.0.1] 16/2/2021 18:16:01 

## Fixed

- React app base clean. 

# [1.0.0] 16/2/2021 18:04:07

## Added

- Added base react project with `npx create-react-app`.

# [0.0.1] 15/2/2021 14:48:10 

## Added

- Added `README.md` and `CHANGELOG.md`