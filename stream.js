const { exec } = require('child_process');
  exec('peerflix "magnet:?xt=urn:btih:adb2e72f6948dbbb05a1c0aaba7b9cc6914d625f&dn=The.Death.of.Superman.2018.WEB-DL.x264-FGT" --vlc', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });