function App() {
   return(

    <div style = {{display : 'flex' ,alignItems : 'center', justifyContent: 'center' , height : '100vh'}}>

    <div style = {{border : '5px solid grey', padding : '30px 10px', width : '450px', height : '540px'}}>

        <div  style = {{display : 'flex', justifyContent: 'center', alignItems : 'center'}}>

            <div style = {{ borderRadius : '50%' , maxWidth : '256px' , overflow : 'hidden', maxHeight : '256px' }}>

            <img style = {{width: '100%', height : '100%', borderRadius : '50%' }} src = 'https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'></img>
            </div>

            
        </div>

        <div  style = {{display : 'flex',flexDirection : "column", justifyContent: 'center', alignItems : 'center'}}>
            <h1>Juliennne Moore</h1>
            <p>Juliennne.moore@company.com</p>
        </div>

        <div  style = {{display : 'flex',flexDirection : "row", justifyContent: 'center', gap : '100px', marginTop : '20px'}}>
            <div>
                <h1>25</h1>
                <p>Posts</p>
            </div> 
            <div>
                <h1>350</h1>
                <p>Posts</p>
            </div> 
            <div>
                <h1>1.5K</h1>
                <p>Followers</p>
            </div> 


        </div>


    </div>

    </div>
   ) 
}























ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)