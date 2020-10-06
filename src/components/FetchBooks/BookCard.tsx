import React from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./Styles";
import { Genre } from "./Types";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

export function Book(props: any) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Book"
          height="240"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description.substring(0, 200)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.genres?.map((genre: Genre, index: number) => (
            <span key={index} style={{ margin: "5px" }}>
              {genre.name}
            </span>
          ))}
        </Button>
        <Link to={`/books/${props.title}`} style={{ textDecoration: "none" }}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
