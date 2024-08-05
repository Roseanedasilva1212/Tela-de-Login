const showHiddenPass = (loginPass, LoginEye) =>{
    const input = document.getElementById(loginPass),
    iconEye = document.getElementById(LoginEye)

    iconEye.addEventListener('click', () =>{
     
      if(input.type === 'password'){
        
        input.type = 'text'

       
        iconEye.classList.add('ri-eye-line')
        iconEye.classList.remove('ri-eye-off-line')
      } else{

        
        input.type ='password'


        //Icon change 
        iconEye.classList.remove('ri-eye-line')
        iconEye.classList.add('ri-eye-off-line')

      }
    })
  }

  showHiddenPass('login-pass',' login-eye')