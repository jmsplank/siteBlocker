# siteblocker

Intercepts new urls and checks them against a list of blocked ones.

If a blocked page is detected you will be automatically redirected to a page that says Blocked!

## Install Instructions

### Extract the archive named v1_0_0.tar.gz:
1. On Linux or macOS, open a terminal and navigate to the folder containing the archive.
1. Run the following command: `tar -xzf v1_0_0.tar.gz`
1. On Windows, use a file archiver program like 7-Zip or WinRAR to extract the contents.

### Add the unpacked contents as an extension in Google Chrome:
1. Open Google Chrome and navigate to: chrome://extensions
1. Enable "Developer mode" by toggling the switch in the top right corner.
1. Click "Load unpacked" and browse to the folder containing the extracted files.
1. Select the folder and click "Open" to add the extension to Chrome.

## Modify list of blocked pages and enable/disable extension

1. Go to the `extensions` menu and find `siteblocker`
2. Click the 3 dots next to the name and select `Manage Extension`
3. From there you can add/remove sites and also enable/disable the extension
4. Each site should be on a separate line, e.g.:
    ```txt
    youtube.com
    facebook.com
    netflix.com
    ```