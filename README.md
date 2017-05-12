# Video Automation for Frappé

## Setup Instructions

### For macOS :

1. Install Node.JS and NPM :

        brew install node

1. Clone this repository (Ensure that `git` is installed) :

        git clone https://github.com/sagarvora/testcafe-video.git

## How to use

1. Create a new `.js` file for you video (for example: `naming_series.js`) in the `testcafe-video` directory.

1. Copy the contents of `skeleton.js` into your video's file.

1. Write your code with the help of Function Reference. You can also refer to examples.

1. Start your favourite video recorder and set it to capture audio from your output device.

1. Run the following command from the testcafe-video directory:

        testcafe [your-browser-alias] [your-video-filename]

    You can find your browser alias [here](https://github.com/DevExpress/testcafe/blob/master/docs/articles/documentation/using-testcafe/common-concepts/browser-support.md).

1. After completion: stop the video recorder, edit the video, and publish!