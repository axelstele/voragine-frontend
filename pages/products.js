import React, { useEffect } from 'react';
import {
  makeStyles, GridList, GridListTile, GridListTileBar, IconButton,
} from '@material-ui/core';
// import InfoIcon from '@material-ui/icons/Info';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { products } from 'redux/reducers/products';
import { dataSelector } from 'redux/selectors/products';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'space-around',
    overflow: 'auto',
  },
  gridList: {
    width: '100%',
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Products = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const productsData = useSelector(dataSelector, shallowEqual);

  useEffect(() => {
    dispatch(products.get());
  }, []);

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={4}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {productsData?.map((product) => (
          <GridListTile key={product.id}>
            {product.images.length ? <img src={product.images[0]} alt="" /> : <img src="/no-image.png" alt="" />}
            <GridListTileBar
              title={product.title}
              subtitle={(
                <span>
                  $
                  {product.price}
                </span>
              )}
              actionIcon={(
                <>
                  <IconButton aria-label={`edit ${product.title}`} className={classes.icon}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label={`delete ${product.title}`} className={classes.icon}>
                    <DeleteIcon />
                  </IconButton>
                </>
            )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Products;
