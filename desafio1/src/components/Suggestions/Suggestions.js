import { Typography } from '@material-ui/core';
import React from 'react';
import { ContainerSuggestions } from './style';

const Suggestions = () => {
    return (
        <div>
            <ContainerSuggestions>
            <Typography variant='span' type='span'>Sugestões: Camiseta Branca, Camiseta Rosa, Outra Camiseta</Typography>
        </ContainerSuggestions>
        </div>
    );
};

export default Suggestions;