import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {

        if(ninja.age >0){
        return (
            <div className="Ninjas" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button class="btn" onClick= {() => {deleteNinja(ninja.id)}}>Delete ninja</button>
            </div>

        )}
        return false
    })
    return (
        <div className="ninja-List">
            {ninjaList}
        </div>
    )
     
}

export default Ninjas