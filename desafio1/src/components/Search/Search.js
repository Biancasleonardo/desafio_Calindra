import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { SectionSearch } from './style';

const Search = ({getProducts}) => {
    const [inputSearch, setInputSearch] = useState('')

    const onChangeInput = (e) => {
        setInputSearch(e.target.value)
    }
    return (
        <SectionSearch>
            <TextField
                id="outlined-basic"
                label="O que você está procurando?"
                variant="outlined"
                value={inputSearch}
                onChange={onChangeInput}
                size='small'
                fullWidth
            />
            <Button variant='contained' color='primary'onClick={() => getProducts(inputSearch)}>Buscar</Button>
        </SectionSearch>
    );
};

export default Search;