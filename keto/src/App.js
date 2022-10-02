
import { useEffect } from 'react'; 
import Navbar from './Navbar/Navbar';
import AllRouter from './Navbar/AllRouter';
import{Box} from "@chakra-ui/react"

function App() {
  // const style={position:"absolute",top:"0%"}

  // useEffect(() => {
  //   const handleScroll = event => {
  //     if(window.scrollY>50){
  //        style={position:"sticky",top:"0%"}
  //     }
  //     console.log('window.scrollY', window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
  
    <Box w="100%" className="App" >
     <Navbar/>
     
     
     
     <AllRouter/>
     
    
    </Box>
    
  );
}

export default App;
