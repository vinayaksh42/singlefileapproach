import iconEntery from './iconEntry';
import generateIconComponents from './iconComponent';

if (process.argv[2] === '--target=filled') {
    generateIconComponents({
      type: 'filled',
      from: 'svg/filled'
    })
  }
  
  if (process.argv[2] === '--target=animated') {
    generateIconComponents({
      type: 'animated',
      from: 'svg/animated'
    })
  }
  
  if (process.argv[2] === '--target=outlined') {
    generateIconComponents({
      type: 'outlined',
      from: 'svg/outlined'
    })
  }