# Link-Finder

This is a Chrome extension that can help you capture web traffic urls. Normally, you use the Chrome DevTool to monitor network traffic. But some website may stop running when the DevTool is opened, so I write a chrome extension to query the Chorme API for all network traffic, avoiding the DevTool altogether.

# Build

1. Clone this repo to the `master` or `dev` whoever is the latest.
2. Install all dependencies:
    ```
    yarn install
    ```
3. Build the static javascript files:
    ```
    yarn build
    ```

The build version of the extension inside the `build` folder.

# Load the Extension in Chrome

1. Click the extensions icons, click `manage extensions`.
2. Turn on the `Developer mode` switch at top right corner. 
3. Click `Load unpacked` button.
4. Find the locate of your `build` folder.

# Update

Currently the extension is still under development, the most updated version is always on this repo.

To update:
1. Pull the latest changes from `master` or `dev` branch:
    ```
    git pull
    ```
2. Go through the build step mentioned above.
3. The most update version should be reflected in Chrome on next time loading the extension.
4. In case the new version is not loaded, go to the extension page, then click the reloaded button at bottom right corner of the extension card.
