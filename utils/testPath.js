const pangFs = require('pang-fs');
const chalk = require('chalk');

const testPath = (name, type) => {
  const currentPath = type === 'turbo' ? `${pangFs.getCurrPath()}/apps`: pangFs.getCurrPath()
  const fileList = pangFs.readDir(currentPath, 'list');
  if (fileList.includes(name)) {
    console.log(chalk.red('当前目录下已有同名目录或文件，请删除后重新初始化'));
    process.exit(1)
  }
}
module.exports = testPath