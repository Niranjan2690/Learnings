import FunChildComp from './funchild';




const FunParentComp = ()=>{
        return  <div style={{border: '2px solid green', padding: '10px'}}>
                    <h1>Context API — Function Parent Component</h1>

                    <FunChildComp />
                </div>
}

export default FunParentComp;