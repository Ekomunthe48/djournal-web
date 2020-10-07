import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography, useTheme, Divider, Box } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { Link } from "react-router-dom"
import { autoPlay } from 'react-swipeable-views-utils'

import Test from '../../src/undraw_Bitcoin_P2P_re_1xqa.png'
import Test1 from '../../src/undraw_lost_online_wqob.png'
import Test2 from '../../src/undraw_online_posts_h475.png'
import Test3 from '../../src/undraw_pride_y0te.png'
import Test4 from '../../src/undraw_social_friends_nsbv.png'
import Test5 from '../../src/undraw_working_from_anywhere_ub67.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    pilihan: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textDecoration: 'none',
        color: 'inherit'
    },
    best: {
        margin: theme.spacing(2),
        textAlign: 'center',
        boxShadow: '0px 0px 1px',
        borderRadius: '2px',
        '&:hover': {
            transform: 'translateY(-10px)',
            transition: 'ease-in 0.3s'
        }
    },
    top: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
    },
    news: {
        textAlign: 'center',
        margin: theme.spacing(2),
        fontWeight: 500,
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            transition: 'ease 0.4s'
        }
    },
    image: {
        textAlign: 'center',
    },
    img: {
        maxWidth: 500,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        }
    },
    topN: {
        textAlign: 'justify',
        alignContent: 'center'
    },
    topNews: {
        textAlign: 'justify',
        maxWidth: 300,
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        }
    },
    title: {
        margin: 50,
        fontWeight: 700,
        fontFamily: `'Poppins', sans-serif`,
    },
    artikel: {
        maxWidth: 500,
        maxHeight: 125,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            maxHeight: '100%'
        }
    }
}))

const Blog = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = useState(0)

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Container>
            <Typography className={classes.title} align="center" variant="h3">
                Blog and News
            </Typography>
            <Divider variant="middle" />
            <Grid>
                <Typography className={classes.news} variant="h4">Top News</Typography>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    enableMouseEvents
                >
                    <div className={classes.root} value={value} index={0} dir={theme.direction}>
                        <div className={classes.image}>
                            <img className={classes.img} src={Test} alt="test" />
                        </div>
                        <div className={classes.topN}>
                            <h6>by</h6>
                            <h4>Title 1</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. <a className={classes.link} href="/blog/news">See More...</a>
                            </p>
                        </div>
                    </div>
                    <div className={classes.root} value={value} index={1} dir={theme.direction}>
                        <div>
                            <img src={Test1} className={classes.img} alt="test" />
                        </div>
                        <div className={classes.topN}>
                            <h6>by</h6>
                            <h4>Title 2</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. <a className={classes.link} href="/blog/news">See More...</a>
                            </p>
                        </div>
                    </div>
                    <div className={classes.root} value={value} index={2} dir={theme.direction}>
                        <div>
                            <img src={Test2} className={classes.img} alt="test" />
                        </div>
                        <div className={classes.topN}>
                            <h6>by</h6>
                            <h4>Title 3</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. <a className={classes.link} href="/blog/news">See More...</a>
                            </p>
                        </div>
                    </div>
                </AutoPlaySwipeableViews>
            </Grid>
            <Grid className={classes.top} container justify="center">
                <Typography className={classes.news} justify="center" variant="h4">Artikel</Typography>
                
                <Link to="/blog/news" className={classes.pilihan}>
                    <div className={classes.best}>
                        <div>
                            <img className={classes.artikel} src={Test} alt="test" />
                        </div>
                        <div className={classes.topNews}>
                            <h6>by</h6>
                            <h4>Title 1</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </div>
                    <div className={classes.best}>
                        <div>
                            <img className={classes.artikel} src={Test1} alt="test" />
                        </div>
                        <div className={classes.topNews}>
                            <h6>by</h6>
                            <h4>Title 2</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </div>
                    <div className={classes.best}>
                        <div>
                            <img className={classes.artikel} src={Test2} alt="test" />
                        </div>
                        <div className={classes.topNews}>
                            <h6>by</h6>
                            <h4>Title 3</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </div>
                    <div className={classes.best}>
                        <div>
                            <img className={classes.artikel} src={Test3} alt="test" />
                        </div>
                        <div className={classes.topNews}>
                            <h6>by</h6>
                            <h4>Title 4</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </div>
                    <div className={classes.best}>
                        <div>
                            <img className={classes.artikel} src={Test4} alt="test" />
                        </div>
                        <div className={classes.topNews}>
                            <h6>by</h6>
                            <h4>Title 5</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </div>
                    <div className={classes.best}>
                        <div>
                            <img className={classes.artikel} src={Test5} alt="test" />
                        </div>
                        <div className={classes.topNews}>
                            <h6>by</h6>
                            <h4>Title 6</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </div>
                </Link>
            </Grid>
        </Container>
    );
};

export default Blog;