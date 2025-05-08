// Pair code link > https://qr-hazel-alpha.vercel.app/md
// Get your session id and put it in the space created for it don't remove "
const { spawnSync } = require('child_process')
const { existsSync, writeFileSync } = require('fs')

const SESSION_ID = 'levanter_SAMKIEL' // Edit this line only, don't remove ' <- this symbol

if (!existsSync('SAMKIELAI')) {
  console.log('Cloning the repository...')
  const cloneResult = spawnSync(
    'git',
    ['clone', 'https://github.com/samkiel488/SAMKIELAI.git', 'SAMKIELAI'],
    {
      stdio: 'inherit',
    }
  )

  if (cloneResult.error) {
    throw new Error(`Failed to clone the repository: ${cloneResult.error.message}`)
  }

  const configPath = 'levanter/config.env'
  try {
    console.log('Writing to config.env...')
    writeFileSync(configPath, `VPS=true\nSESSION_ID=${SESSION_ID}\nSUDO=2348087357158\nTZ=Africa/Lagos\nSTICKER_PACKNAME=Ԇ・SAMKIEL`)
  } catch (err) {
    throw new Error(`Failed to write to config.env: ${err.message}`)
  }

  console.log('Installing dependencies...')
  const installResult = spawnSync('yarn', ['install', '--network-concurrency', '3'], {
    cwd: 'SAMKIELAI',
    stdio: 'inherit',
  })

  if (installResult.error) {
    throw new Error(`Failed to install dependencies: ${installResult.error.message}`)
  }
}

spawnSync('yarn', ['start'], { cwd: 'SAMKIELAI', stdio: 'inherit' })
