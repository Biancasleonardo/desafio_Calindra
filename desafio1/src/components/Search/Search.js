import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { SectionSearch } from './style';

const Search = () => {
    return (
        <SectionSearch>
            <TextField
                id="outlined-basic"
                label="O que você está procurando?"
                variant="outlined"
                value={''}
                onChange={''}
                size='small'
                fullWidth
            />
            <Button variant='contained' color='primary'onClick={''}>Buscar</Button>
        </SectionSearch>
    );
};

export default Search;