try {
  require('@angular-devkit/core');
  require('listr2');
  console.log('OK');
} catch (error) {
  console.error('ERR', error && error.message);
  process.exit(1);
}
