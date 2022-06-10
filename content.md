Features

- Auth
  -Login
  -on login goto/
  -Logout
  -on logout go t `/login`
  -Feeds Listing Features

  API:

  - login
    get Feeds

  Routing Info

  - / - Home page, protected route accessible after login
  - /login

  React?Current is in react
  -COntext API?
  Redux?Selected

  1.  Action types

  Login_Loading
  Login_Success
  Login_Error
  Logout

  Get_Feeds_Loading
  Get_Feeds_Success
  Get_Feeds_Error

  2.  Actions

  3.  State Structure

  {
  auth:{
  loadigng:false,
  error:false
  data:{
  isAuth:false,
  token:"",
  }
  },


   feeds:{
     getfeeds:{
        loading:false,
         error:false,
              }
      data:[]
          }

  }

  4 . 2 Reducer 
   - auth
   - feeds


ActionTypes -DONE
store-DONE;
