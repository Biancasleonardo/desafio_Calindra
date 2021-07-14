import { CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { CardProduct, ContainerMeta, Score, Visits } from './style';
import ScoreIcon from '@material-ui/icons/Score';
import VisibilityIcon from '@material-ui/icons/Visibility';

const ProductsCard = ({ products }) => {
    const { name, type, _meta } = products

    return (
        <CardProduct variant="outlined">
            <CardContent>
                <Typography variant="body1" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2">
                    Tipo: {type}
                </Typography>
                <ContainerMeta>
                    <Score>
                        <ScoreIcon fontSize='small' />
                        <Typography variant="body2" component="span">
                            {(_meta.score)}
                        </Typography>
                    </Score>
                    <Visits>
                        <VisibilityIcon fontSize='small'/>
                        <Typography variant="body2" component="span">
                            {(_meta.visitsClickCount)}
                        </Typography>
                    </Visits>
                </ContainerMeta>
            </CardContent>
        </CardProduct>
    );
};

export default ProductsCard;