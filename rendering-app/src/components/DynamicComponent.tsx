 const DynamicComponent = async () =>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <div>
            <h1>Dynamic Component content </h1> 
        </div>
    );  
  }

  export default DynamicComponent;