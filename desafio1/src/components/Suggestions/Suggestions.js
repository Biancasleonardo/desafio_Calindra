import { Typography } from '@material-ui/core';
import React from 'react';
import { ButtonItem, ContainerSuggestions } from './style';

const Suggestions = ({ suggestions,  onClickSuggestion}) => {

    const listSuggestions = suggestions && suggestions.map((suggestion) => {
        return <ButtonItem onClick={() => onClickSuggestion(suggestion.term)} key={suggestion.term}> {suggestion.term} </ButtonItem>
    })

    return (
        <div>
            <ContainerSuggestions>
                <Typography variant='span' type='span'>Sugestões: </Typography>
                {listSuggestions ? listSuggestions : 
                <>
                    <ButtonItem onClick={() => onClickSuggestion('celular')} key={'celular'}> celular </ButtonItem>
                    <ButtonItem onClick={() => onClickSuggestion('camisa')} key={'Camisa'}> Camisa</ButtonItem>
                    <ButtonItem onClick={() => onClickSuggestion('geladeira')} key={'geladeira'}> geladeira </ButtonItem>
                    <ButtonItem onClick={() => onClickSuggestion('microondas')} key={'microondas'}> microondas </ButtonItem>
                </>}
            </ContainerSuggestions>
        </div>
    );
};

export default Suggestions;