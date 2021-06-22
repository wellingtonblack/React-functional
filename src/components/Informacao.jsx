import React from 'react';

import Card from './Card'

const Informacao = (props) => {
    const { pessoas } = props;

    return (  
        <div className={'infomacao'}>
            {pessoas.map((pessoa) => ( 
                <Card dados={pessoa}/>
            ))}
        </div>
    );
}
 
export default Informacao;