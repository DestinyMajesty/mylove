const rootPath = __dirname
const packageInfo = require(`${rootPath}/package.json`)

module.exports = {
  apps: [
    {
      name: packageInfo.name,
      script: './server.js',
      cwd: rootPath,
      out_file: 'NULL',
      error_file: `/var/log/pm2-error/${packageInfo.name}.log`,
      log_file: `/var/log/pm2/${packageInfo.name}.log`,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      merge_logs: true,
      max_memory_restart: '1G',
      autorestart: true,
      node_args: [],
      args: [],
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
