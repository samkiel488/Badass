// Pair code link > https://qr-hazel-alpha.vercel.app/md
// Get your session id and put it in the space created for it don't remove "
const { spawnSync } = require('child_process');
const { existsSync, writeFileSync } = require('fs');

const SESSION_ID = 'levanter_SAMKIEL'; // Edit this line only, don't remove ' <- this symbol

if (!existsSync('samkielai')) {
  console.log('Cloning the repository...');
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/samkiel488/SAMKIELAI.git', 'samkielai'],
    {
      stdio: 'inherit',
    }
  );
  
  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`);
  }
  
  const configPath = 'samkielai/config.env';
  try {
    console.log('Writing to config.env...');
    writeFileSync(
      configPath,
      `VPS=true\n` +
      `SESSION_ID=${SESSION_ID}\n` +
      `SUDO=2348087357158,2347025067494\n` +
      `TZ=Africa/Lagos\n` +
      `STICKER_PACKNAME=Ԇ・SAMKIEL\n`
    );
  } catch (err) {
    throw new Error(`Failed to write to config.env: ${err.message}`);
  }
  
  console.log('Installing dependencies...');
  const installResult = spawnSync('yarn', ['install', '--network-concurrency', '3'], {
    cwd: 'samkielai',
    stdio: 'inherit',
  });
  
  if (installResult.error) {
    throw new Error(`Failed to install dependencies: ${installResult.error.message}`);
  }
}

spawnSync('yarn', ['start'], { cwd: 'samkielai', stdio: 'inherit' });