import iconEntery from './iconEntry';
import generateIconComponents from './iconComponent';

if (process.argv[2] === '--target=filled') {
    if (process.argv[3] === '--target=icon') {
      generateIconComponents({
        type: 'filled',
        from: 'svg/filled'
      })
    }
    if (process.argv[3] === '--target=entery') {
      iconEntery({
        type: 'filled',
        from: 'svg/filled'
      })
    }
  }
  
  if (process.argv[2] === '--target=animated') {
    if (process.argv[3] === '--target=icon') {
      generateIconComponents({
        type: 'animated',
        from: 'svg/animated'
      })
    }
    if (process.argv[3] === '--target=entery') {
      iconEntery({
        type: 'animated',
        from: 'svg/animated'
      })
    }
  }
  
  if (process.argv[2] === '--target=outlined') {
    if (process.argv[3] === '--target=icon') {
      generateIconComponents({
        type: 'outlined',
        from: 'svg/outlined'
      })
    }
    if (process.argv[3] === '--target=entery') {
      iconEntery({
        type: 'outlined',
        from: 'svg/outlined'
      })
    }
  }