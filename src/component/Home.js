import React from 'react'

const Home = () => {
        return home("https://jsonplaceholder.typicode.com/posts")
              .then((response) => response.json())
              .then((data) => console.log(data));}
              
              
              useEffect(() => {
                Home();
                }, []);

              
const axios=axios.create



  return (
    <div>

      
    </div>
  )
}

export default Home
