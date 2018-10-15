const spawn = require('child_process').spawn;

export function testSpawn(){
  spawn('python', [pointsheet.py, JSON.stringify('this is a test')], {
    'cwd': '../client'
  });

  pythonProcess.stdout.on('data', function(data){
    console.log(data);
    console.log('hello');
  });
}
