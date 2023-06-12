import React from "react";
import "../component/todos.css";
import { Card, CardContent, Grid} from "@mui/material";


const Todos = ({ todos }) => {
    const todoList = todos?.length ? (
      todos.map((todo) => {
        return (
          <Grid key={todo.id}>
            <Card>
              <CardContent>
                <span style={{ padding: "50px" }}>{todo.content}</span>
              </CardContent>
            </Card>
          </Grid>
        );
      })
    ) : (
      <p>Relax! You have nothing to do!</p>
    );
    
    return (
      <div className="todoCollection" style={{ padding: "10px" }}>
        {todoList}
      </div>
    );
};
  
export default Todos;
