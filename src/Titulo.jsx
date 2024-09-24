function Titulo({nome, cor}) {

    const urlImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQFtEyXJg4vHdkl_XpdTlwMRzJOg_9g5uhQ&s"

    return (
    <div>
        <h1 style={{color: cor}}>Ola eu sou um {nome ? nome : "Fulano"}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolor tempora aliquam voluptate veniam nam, nemo, quisquam numquam qui ipsum excepturi! Commodi, qui error? Earum provident repudiandae asperiores culpa itaque!</p>
        <img width = {100} src={urlImg}/>
        </div>
    )    
}

export default Titulo